--
-- PostgreSQL database dump
--

-- Dumped from database version 10.7
-- Dumped by pg_dump version 10.7

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: check_managers_role(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.check_managers_role() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
IF 'manager' NOT IN (SELECT lower(ROLE) FROM 
	(SELECT employee.sin FROM employee, 
		(SELECT hotel.hotel_id FROM hotel, 
		 	(SELECT hotel_id FROM employee 
			 WHERE employee.sin = OLD.sin LIMIT 1) AS e
		WHERE e.hotel_id = hotel.hotel_id LIMIT 1) AS h
	WHERE employee.hotel_id = h.hotel_id) AS employees JOIN employeerole ON employeerole.sin = employees.sin)
THEN 
	RAISE EXCEPTION 'There must be at least one manager for every hotel';
END IF;
RETURN NULL;
END
$$;


ALTER FUNCTION public.check_managers_role() OWNER TO postgres;

--
-- Name: check_reservation_dates(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.check_reservation_dates() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
IF EXISTS (SELECT * FROM reservation 
			WHERE NOT ((NEW.start_date < reservation.start_date AND NEW.end_date < reservation.start_date) OR
		  				(NEW.start_date > reservation.end_date AND NEW.end_date > reservation.end_date)) AND
						NEW.hotel_id = reservation.hotel_id AND NEW.room_number = reservation.room_number)
THEN 
	RAISE EXCEPTION 'Reservation dates cannot overlap';
END IF;
RETURN NEW;
END
$$;


ALTER FUNCTION public.check_reservation_dates() OWNER TO postgres;

--
-- Name: decrement_hotel_num(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.decrement_hotel_num() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
update hotelchain
set number_of_hotels = number_of_hotels - 1 where hc_name = old.hc_name;
RETURN NULL;
END;
$$;


ALTER FUNCTION public.decrement_hotel_num() OWNER TO postgres;

--
-- Name: decrement_room_num(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.decrement_room_num() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
update hotel
set number_of_rooms = number_of_rooms - 1 where hotel_id = old.hotel_id;
RETURN NULL;
END;
$$;


ALTER FUNCTION public.decrement_room_num() OWNER TO postgres;

--
-- Name: increment_hotel_num(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.increment_hotel_num() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
update hotelchain
set number_of_hotels = number_of_hotels + 1 where hc_name = new.hc_name;
RETURN NULL;
END;
$$;


ALTER FUNCTION public.increment_hotel_num() OWNER TO postgres;

--
-- Name: increment_room_num(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.increment_room_num() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
update hotel
set number_of_rooms = number_of_rooms + 1 where hotel_id = new.hotel_id;
RETURN NULL;
END;
$$;


ALTER FUNCTION public.increment_room_num() OWNER TO postgres;

--
-- Name: log_reservation(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.log_reservation() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
	BEGIN
		INSERT INTO reservationsarchive(hc_name, hotel_id, room_number, start_date, end_date, customer_sin, employee_sin, reservation_type) 
		VALUES(
			(SELECT hc_name FROM hotel WHERE hotel.hotel_id = NEW.hotel_id limit 1),
			NEW.hotel_id, NEW.room_number, NEW.start_date, NEW.end_date, NEW.customer_sin,
			(SELECT employee_sin FROM checkedin WHERE NEW.hotel_id = checkedin.hotel_id AND
											NEW.room_number = checkedin.room_number AND
											NEW.start_date = checkedin.start_date AND
											NEW.end_date = checkedin.end_date limit 1),
			NEW.reservation_type);
	RETURN NEW;
	END;
$$;


ALTER FUNCTION public.log_reservation() OWNER TO postgres;

--
-- Name: update_reservation(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.update_reservation() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
	BEGIN
		IF (TG_OP = 'DELETE') THEN
			UPDATE reservation SET reservation_type = False 
				WHERE reservation.hotel_id = OLD.hotel_id 
					AND reservation.room_number = OLD.room_number 
					AND reservation.start_date = OLD.start_date
					AND reservation.end_date = OLD.end_date;
			RETURN NULL;
		ELSEIF (TG_OP = 'INSERT') THEN 
			UPDATE reservation SET reservation_type = True
				WHERE reservation.hotel_id = NEW.hotel_id 
					AND reservation.room_number = NEW.room_number 
					AND reservation.start_date = NEW.start_date
					AND reservation.end_date = NEW.end_date;
			RETURN NEW;
		END IF;
	END;
$$;


ALTER FUNCTION public.update_reservation() OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: centraloffice; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.centraloffice (
    hc_name text NOT NULL,
    street_name text NOT NULL,
    street_number integer NOT NULL,
    city text NOT NULL,
    state character varying(2) NOT NULL,
    country character varying(2) NOT NULL,
    phone_number text NOT NULL,
    email_address text NOT NULL,
    CONSTRAINT centraloffice_street_number_check CHECK ((street_number > 0))
);


ALTER TABLE public.centraloffice OWNER TO postgres;

--
-- Name: checkedin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.checkedin (
    employee_sin text NOT NULL,
    hotel_id integer NOT NULL,
    room_number integer NOT NULL,
    start_date timestamp without time zone NOT NULL,
    end_date timestamp without time zone NOT NULL,
    payment numeric(8,2) NOT NULL,
    CONSTRAINT checkedin_payment_check CHECK (((payment)::double precision > (0.00)::double precision))
);


ALTER TABLE public.checkedin OWNER TO postgres;

--
-- Name: customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer (
    sin text NOT NULL,
    given_name text NOT NULL,
    family_name text NOT NULL,
    street_name text NOT NULL,
    street_number integer NOT NULL,
    city text NOT NULL,
    state character varying(2) NOT NULL,
    country character varying(2) NOT NULL,
    date_of_registration timestamp without time zone DEFAULT CURRENT_TIMESTAMP(0) NOT NULL,
    CONSTRAINT customer_street_number_check CHECK ((street_number > 0))
);


ALTER TABLE public.customer OWNER TO postgres;

--
-- Name: employee; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employee (
    hotel_id integer NOT NULL,
    sin text NOT NULL,
    street_name text NOT NULL,
    street_number integer NOT NULL,
    city text NOT NULL,
    state character varying(2) NOT NULL,
    country character varying(2) NOT NULL,
    given_name text NOT NULL,
    family_name text NOT NULL,
    CONSTRAINT employee_street_number_check CHECK ((street_number > 0))
);


ALTER TABLE public.employee OWNER TO postgres;

--
-- Name: employeerole; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employeerole (
    sin text NOT NULL,
    role text NOT NULL
);


ALTER TABLE public.employeerole OWNER TO postgres;

--
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: public; Owner: Web_App_User
--

CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hibernate_sequence OWNER TO "Web_App_User";

--
-- Name: hotel; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hotel (
    hc_name text NOT NULL,
    hotel_id integer NOT NULL,
    street_name text NOT NULL,
    street_number integer NOT NULL,
    city text NOT NULL,
    state character varying(2) NOT NULL,
    country character varying(2) NOT NULL,
    rating integer NOT NULL,
    phone_number text NOT NULL,
    number_of_rooms integer DEFAULT 0 NOT NULL,
    CONSTRAINT hotel_number_of_rooms_check CHECK ((number_of_rooms >= 0)),
    CONSTRAINT hotel_rating_check CHECK (((rating <= 5) AND (rating >= 0))),
    CONSTRAINT hotel_street_number_check CHECK ((street_number > 0))
);


ALTER TABLE public.hotel OWNER TO postgres;

--
-- Name: hotel_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hotel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hotel_id_seq OWNER TO postgres;

--
-- Name: hotel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.hotel_id_seq OWNED BY public.hotel.hotel_id;


--
-- Name: hotelchain; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hotelchain (
    hc_name text NOT NULL,
    number_of_hotels integer DEFAULT 0 NOT NULL,
    CONSTRAINT hotelchain_number_of_hotels_check CHECK ((number_of_hotels >= 0))
);


ALTER TABLE public.hotelchain OWNER TO postgres;

--
-- Name: reservation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reservation (
    hotel_id integer NOT NULL,
    room_number integer NOT NULL,
    start_date timestamp without time zone NOT NULL,
    end_date timestamp without time zone NOT NULL,
    customer_sin text NOT NULL,
    reservation_type boolean DEFAULT false,
    CONSTRAINT reservation_check CHECK ((start_date <= end_date))
);


ALTER TABLE public.reservation OWNER TO postgres;

--
-- Name: reservationsarchive; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reservationsarchive (
    id integer NOT NULL,
    hc_name text,
    hotel_id integer,
    room_number integer,
    start_date timestamp without time zone,
    end_date timestamp without time zone,
    customer_sin text,
    employee_sin text,
    reservation_type boolean DEFAULT false
);


ALTER TABLE public.reservationsarchive OWNER TO postgres;

--
-- Name: reservationsarchive_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reservationsarchive_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reservationsarchive_id_seq OWNER TO postgres;

--
-- Name: reservationsarchive_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reservationsarchive_id_seq OWNED BY public.reservationsarchive.id;


--
-- Name: room; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.room (
    hotel_id integer NOT NULL,
    room_number integer NOT NULL,
    view_type text NOT NULL,
    capacity integer NOT NULL,
    price numeric(8,2) NOT NULL,
    extendable boolean DEFAULT false NOT NULL,
    area numeric(8,2) NOT NULL,
    CONSTRAINT room_area_check CHECK (((area)::double precision > (0.00)::double precision)),
    CONSTRAINT room_capacity_check CHECK ((capacity > 0)),
    CONSTRAINT room_price_check CHECK (((price)::double precision > (0.00)::double precision)),
    CONSTRAINT room_room_number_check CHECK ((room_number > 0))
);


ALTER TABLE public.room OWNER TO postgres;

--
-- Name: roomamenities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roomamenities (
    hotel_id integer NOT NULL,
    room_number integer NOT NULL,
    amenity text NOT NULL
);


ALTER TABLE public.roomamenities OWNER TO postgres;

--
-- Name: roomcapacities; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.roomcapacities AS
 SELECT h.hc_name,
    h.street_name,
    h.street_number,
    h.city,
    h.state,
    h.country,
    r.capacity
   FROM (public.hotel h
     JOIN public.room r ON ((r.hotel_id = h.hotel_id)));


ALTER TABLE public.roomcapacities OWNER TO postgres;

--
-- Name: roomdamages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roomdamages (
    hotel_id integer NOT NULL,
    room_number integer NOT NULL,
    damage text NOT NULL
);


ALTER TABLE public.roomdamages OWNER TO postgres;

--
-- Name: roomsperarea; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.roomsperarea AS
 SELECT hotel.city,
    hotel.state,
    hotel.country,
    sum(hotel.number_of_rooms) AS sum
   FROM public.hotel
  GROUP BY hotel.city, hotel.state, hotel.country;


ALTER TABLE public.roomsperarea OWNER TO postgres;

--
-- Name: unit; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.unit (
    id integer NOT NULL,
    name text,
    rating double precision
);


ALTER TABLE public.unit OWNER TO postgres;

--
-- Name: hotel hotel_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hotel ALTER COLUMN hotel_id SET DEFAULT nextval('public.hotel_id_seq'::regclass);


--
-- Name: reservationsarchive id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservationsarchive ALTER COLUMN id SET DEFAULT nextval('public.reservationsarchive_id_seq'::regclass);


--
-- Data for Name: centraloffice; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.centraloffice (hc_name, street_name, street_number, city, state, country, phone_number, email_address) FROM stdin;
TopHill	Laurier	26	Ottawa	ON	CA	124-122-6789	test@tophill.ca
\.


--
-- Data for Name: checkedin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.checkedin (employee_sin, hotel_id, room_number, start_date, end_date, payment) FROM stdin;
253423627	1	100	2019-04-12 18:00:00	2019-04-20 18:00:00	100.00
\.


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer (sin, given_name, family_name, street_name, street_number, city, state, country, date_of_registration) FROM stdin;
124532589	Quang-Vinh	Do	Craig Henry	31	Ottawa	ON	CA	2019-04-01 23:34:57
122342564	Omar	Elboraey	Vanier	31	Ottawa	ON	CA	2019-04-01 23:34:57
532346978	Joey	Jeon	Baseline	31	Ottawa	ON	CA	2019-04-01 23:34:57
\.


--
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employee (hotel_id, sin, street_name, street_number, city, state, country, given_name, family_name) FROM stdin;
1	153269837	Laurier	100	Ottawa	ON	CA	Mob	Psycho
1	389129734	Marvel	100	Ottawa	ON	CA	Iron	Man
1	253423627	Merivale	100	Ottawa	ON	CA	Reigen	Reigen
\.


--
-- Data for Name: employeerole; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employeerole (sin, role) FROM stdin;
153269837	manager
389129734	Nurse
389129734	UI Designer
253423627	cook
253423627	Waiter
\.


--
-- Data for Name: hotel; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.hotel (hc_name, hotel_id, street_name, street_number, city, state, country, rating, phone_number, number_of_rooms) FROM stdin;
McDonalds	9	Street24	65	Ottawa	ON	CA	1	533-236-9762	0
TopHill	1	Lincoln	25	Montreal	QC	CA	1	423-196-9274	5
TopHill	2	Cedar	25	Montreal	QC	CA	2	543-236-9274	5
TopHill	3	River	65	Montreal	QC	CA	3	953-236-9272	5
TopHill	4	Route9	65	Ottawa	ON	CA	5	153-236-9752	5
TopHill	5	Route10	65	Ottawa	ON	CA	2	153-246-9762	5
TopHill	6	Manordale	65	Ottawa	ON	CA	4	553-236-9762	5
TopHill	7	Algonquin	65	Ottawa	ON	CA	4	753-236-9762	5
TopHill	8	Route9	65	Ottawa	ON	CA	4	953-236-9762	5
\.


--
-- Data for Name: hotelchain; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.hotelchain (hc_name, number_of_hotels) FROM stdin;
TopHill	8
McDonalds	1
\.


--
-- Data for Name: reservation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reservation (hotel_id, room_number, start_date, end_date, customer_sin, reservation_type) FROM stdin;
1	100	2019-04-12 18:00:00	2019-04-20 18:00:00	124532589	t
2	100	2019-04-15 18:00:00	2019-04-20 18:00:00	124532589	f
2	100	2019-02-15 18:00:00	2019-03-20 18:00:00	124532589	f
1	100	2019-06-16 18:00:00	2019-06-29 18:00:00	124532589	f
\.


--
-- Data for Name: reservationsarchive; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reservationsarchive (id, hc_name, hotel_id, room_number, start_date, end_date, customer_sin, employee_sin, reservation_type) FROM stdin;
4	TopHill	1	100	2019-04-12 18:00:00	2019-04-20 18:00:00	124532589	\N	f
5	TopHill	1	100	2019-04-12 18:00:00	2019-04-20 18:00:00	124532589	253423627	t
6	TopHill	2	100	2019-04-15 18:00:00	2019-04-20 18:00:00	124532589	\N	f
7	TopHill	2	100	2019-02-15 18:00:00	2019-03-20 18:00:00	124532589	\N	f
8	TopHill	1	100	2019-06-16 18:00:00	2019-06-29 18:00:00	124532589	\N	f
\.


--
-- Data for Name: room; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.room (hotel_id, room_number, view_type, capacity, price, extendable, area) FROM stdin;
1	100	Sea	3	80.00	f	96.00
1	101	Sea	4	80.00	f	10.00
1	103	Mountain	5	80.00	t	100.00
1	200	Sea	8	80.00	f	453.00
1	201	Mountain	9	20.00	t	42.00
2	100	Sea	3	80.00	f	96.00
2	101	Sea	4	80.00	f	10.00
2	103	Mountain	5	80.00	t	100.00
2	200	Volcano	8	80.00	f	453.00
2	201	Sky	9	20.00	t	42.00
3	100	Sea	3	80.00	f	96.00
3	101	Sea	4	80.00	f	10.00
3	103	Mountain	5	80.00	t	100.00
3	200	Sea	8	80.00	f	453.00
3	201	Mountain	9	20.00	t	42.00
4	100	Sea	3	80.00	f	96.00
4	101	Sea	4	80.00	f	10.00
4	103	Mountain	5	80.00	t	100.00
4	200	Sea	8	80.00	f	453.00
4	201	Mountain	9	20.00	t	42.00
5	100	Sea	3	80.00	f	96.00
5	101	Sea	4	80.00	f	10.00
5	103	Mountain	5	80.00	t	100.00
5	200	Sea	8	80.00	f	453.00
5	201	Sea	9	20.00	t	42.00
6	100	Sea	3	80.00	f	96.00
6	101	Sea	4	80.00	f	10.00
6	103	Mountain	5	80.00	t	100.00
6	200	Sea	8	80.00	f	453.00
6	201	Mountain	9	20.00	t	42.00
7	100	Sea	3	80.00	f	96.00
7	101	Sea	4	80.00	f	10.00
7	103	Mountain	5	80.00	t	100.00
7	200	Mountain	8	80.00	f	453.00
7	201	Mountain	9	20.00	t	42.00
8	100	Sea	3	80.00	f	96.00
8	101	Sea	4	80.00	f	10.00
8	103	Mountain	5	80.00	t	100.00
8	200	Mountain	8	80.00	f	453.00
8	201	Sea	9	20.00	t	42.00
\.


--
-- Data for Name: roomamenities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roomamenities (hotel_id, room_number, amenity) FROM stdin;
1	103	pool
1	100	food
1	103	wine
\.


--
-- Data for Name: roomdamages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roomdamages (hotel_id, room_number, damage) FROM stdin;
1	100	mold
1	101	mold
1	101	bedbugs
\.


--
-- Data for Name: unit; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.unit (id, name, rating) FROM stdin;
1	unit-1	1.1000000000000001
2	unit-2	2.2999999999999998
3	unit-3	3.3300000000000001
4	unit-4	4.3399999999999999
6	described	6.46
7	describes	7.0899999999999999
\.


--
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: Web_App_User
--

SELECT pg_catalog.setval('public.hibernate_sequence', 1, false);


--
-- Name: hotel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hotel_id_seq', 9, true);


--
-- Name: reservationsarchive_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reservationsarchive_id_seq', 8, true);


--
-- Name: centraloffice centraloffice_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.centraloffice
    ADD CONSTRAINT centraloffice_pkey PRIMARY KEY (street_name, street_number, city, state, country);


--
-- Name: checkedin checkedin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.checkedin
    ADD CONSTRAINT checkedin_pkey PRIMARY KEY (employee_sin, hotel_id, room_number, start_date, end_date);


--
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (sin);


--
-- Name: employee employee_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (sin);


--
-- Name: employeerole employeerole_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employeerole
    ADD CONSTRAINT employeerole_pkey PRIMARY KEY (sin, role);


--
-- Name: hotel hotel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hotel
    ADD CONSTRAINT hotel_pkey PRIMARY KEY (hotel_id);


--
-- Name: hotelchain hotelchain_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hotelchain
    ADD CONSTRAINT hotelchain_pkey PRIMARY KEY (hc_name);


--
-- Name: reservation reservation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT reservation_pkey PRIMARY KEY (hotel_id, room_number, start_date, end_date);


--
-- Name: reservationsarchive reservationsarchive_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservationsarchive
    ADD CONSTRAINT reservationsarchive_pkey PRIMARY KEY (id);


--
-- Name: room room_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.room
    ADD CONSTRAINT room_pkey PRIMARY KEY (hotel_id, room_number);


--
-- Name: roomamenities roomamenities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roomamenities
    ADD CONSTRAINT roomamenities_pkey PRIMARY KEY (hotel_id, room_number, amenity);


--
-- Name: roomdamages roomdamages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roomdamages
    ADD CONSTRAINT roomdamages_pkey PRIMARY KEY (hotel_id, room_number, damage);


--
-- Name: checkedin uk_jod1fe9hpw4444kqwqdhhueyn; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.checkedin
    ADD CONSTRAINT uk_jod1fe9hpw4444kqwqdhhueyn UNIQUE (hotel_id, room_number, start_date, end_date);


--
-- Name: unit unit_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unit
    ADD CONSTRAINT unit_pkey PRIMARY KEY (id);


--
-- Name: employeerole check_managers; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER check_managers AFTER DELETE OR UPDATE ON public.employeerole FOR EACH ROW WHEN ((old.role = 'manager'::text)) EXECUTE PROCEDURE public.check_managers_role();


--
-- Name: reservation check_reservation; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER check_reservation BEFORE INSERT ON public.reservation FOR EACH ROW EXECUTE PROCEDURE public.check_reservation_dates();


--
-- Name: hotel decrement_hotel_number; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER decrement_hotel_number AFTER DELETE ON public.hotel FOR EACH ROW EXECUTE PROCEDURE public.decrement_hotel_num();


--
-- Name: room decrement_room_number; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER decrement_room_number AFTER DELETE ON public.room FOR EACH ROW EXECUTE PROCEDURE public.decrement_room_num();


--
-- Name: hotel increment_hotel_number; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER increment_hotel_number AFTER INSERT ON public.hotel FOR EACH ROW EXECUTE PROCEDURE public.increment_hotel_num();


--
-- Name: room increment_room_number; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER increment_room_number AFTER INSERT ON public.room FOR EACH ROW EXECUTE PROCEDURE public.increment_room_num();


--
-- Name: reservation log_reservation; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER log_reservation AFTER INSERT OR UPDATE ON public.reservation FOR EACH ROW EXECUTE PROCEDURE public.log_reservation();


--
-- Name: checkedin update_reservation; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER update_reservation AFTER INSERT OR DELETE ON public.checkedin FOR EACH ROW EXECUTE PROCEDURE public.update_reservation();


--
-- Name: centraloffice centraloffice_hc_name_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.centraloffice
    ADD CONSTRAINT centraloffice_hc_name_fkey FOREIGN KEY (hc_name) REFERENCES public.hotelchain(hc_name) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: checkedin checkedin_employee_sin_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.checkedin
    ADD CONSTRAINT checkedin_employee_sin_fkey FOREIGN KEY (employee_sin) REFERENCES public.employee(sin) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: checkedin checkedin_hotel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.checkedin
    ADD CONSTRAINT checkedin_hotel_id_fkey FOREIGN KEY (hotel_id, end_date, start_date, room_number) REFERENCES public.reservation(hotel_id, end_date, start_date, room_number) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: employee employee_hotel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_hotel_id_fkey FOREIGN KEY (hotel_id) REFERENCES public.hotel(hotel_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: employeerole employeerole_sin_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employeerole
    ADD CONSTRAINT employeerole_sin_fkey FOREIGN KEY (sin) REFERENCES public.employee(sin) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: hotel hotel_hc_name_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hotel
    ADD CONSTRAINT hotel_hc_name_fkey FOREIGN KEY (hc_name) REFERENCES public.hotelchain(hc_name) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: reservation reservation_customer_sin_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT reservation_customer_sin_fkey FOREIGN KEY (customer_sin) REFERENCES public.customer(sin) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: reservation reservation_hotel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT reservation_hotel_id_fkey FOREIGN KEY (room_number, hotel_id) REFERENCES public.room(room_number, hotel_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: room room_hotel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.room
    ADD CONSTRAINT room_hotel_id_fkey FOREIGN KEY (hotel_id) REFERENCES public.hotel(hotel_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: roomamenities roomamenities_hotel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roomamenities
    ADD CONSTRAINT roomamenities_hotel_id_fkey FOREIGN KEY (room_number, hotel_id) REFERENCES public.room(room_number, hotel_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: roomdamages roomdamages_hotel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roomdamages
    ADD CONSTRAINT roomdamages_hotel_id_fkey FOREIGN KEY (room_number, hotel_id) REFERENCES public.room(room_number, hotel_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: TABLE centraloffice; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.centraloffice TO "Web_App_User";


--
-- Name: TABLE checkedin; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.checkedin TO "Web_App_User";


--
-- Name: TABLE customer; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.customer TO "Web_App_User";


--
-- Name: TABLE employee; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.employee TO "Web_App_User";


--
-- Name: TABLE employeerole; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.employeerole TO "Web_App_User";


--
-- Name: TABLE hotel; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.hotel TO "Web_App_User";


--
-- Name: TABLE hotelchain; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.hotelchain TO "Web_App_User";


--
-- Name: TABLE reservation; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.reservation TO "Web_App_User";


--
-- Name: TABLE room; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.room TO "Web_App_User";


--
-- Name: TABLE roomamenities; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.roomamenities TO "Web_App_User";


--
-- Name: TABLE roomcapacities; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.roomcapacities TO "Web_App_User";


--
-- Name: TABLE roomdamages; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.roomdamages TO "Web_App_User";


--
-- Name: TABLE roomsperarea; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.roomsperarea TO "Web_App_User";


--
-- Name: TABLE unit; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.unit TO "Web_App_User";


--
-- PostgreSQL database dump complete
--


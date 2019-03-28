--
-- PostgreSQL database dump
--

-- Dumped from database version 10.3
-- Dumped by pg_dump version 10.3

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
    payment double precision NOT NULL,
    CONSTRAINT checkedin_payment_check CHECK ((payment > (0.00)::double precision))
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
    date_of_registration timestamp without time zone NOT NULL,
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
    rating integer NOT NULL,
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
    number_of_rooms integer NOT NULL,
    CONSTRAINT hotel_number_of_rooms_check CHECK ((number_of_rooms > 0)),
    CONSTRAINT hotel_rating_check CHECK (((rating <= 5) AND (rating >= 0))),
    CONSTRAINT hotel_street_number_check CHECK ((street_number > 0))
);


ALTER TABLE public.hotel OWNER TO postgres;

--
-- Name: hotelchain; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hotelchain (
    hc_name text NOT NULL,
    number_of_hotels integer NOT NULL,
    CONSTRAINT hotelchain_number_of_hotels_check CHECK ((number_of_hotels > 0))
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
    reservation_type boolean DEFAULT false
);


ALTER TABLE public.reservation OWNER TO postgres;

--
-- Name: reservationsarchive; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reservationsarchive (
    hc_name text NOT NULL,
    hotel_id integer NOT NULL,
    room_number integer NOT NULL,
    start_date timestamp without time zone NOT NULL,
    end_date timestamp without time zone NOT NULL,
    customer_sin text NOT NULL,
    employee_sin text NOT NULL,
    reservation_type boolean DEFAULT false
);


ALTER TABLE public.reservationsarchive OWNER TO postgres;

--
-- Name: room; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.room (
    hotel_id integer NOT NULL,
    room_number integer NOT NULL,
    view_type text NOT NULL,
    capacity integer NOT NULL,
    price double precision,
    extendable boolean DEFAULT false,
    area double precision NOT NULL,
    CONSTRAINT room_area_check CHECK ((area > (0.00)::double precision)),
    CONSTRAINT room_capacity_check CHECK ((capacity > 0)),
    CONSTRAINT room_price_check CHECK ((price > (0.00)::double precision)),
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
-- Name: roomdamages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roomdamages (
    hotel_id integer NOT NULL,
    room_number integer NOT NULL,
    damage text NOT NULL
);


ALTER TABLE public.roomdamages OWNER TO postgres;

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
-- Data for Name: centraloffice; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.centraloffice (hc_name, street_name, street_number, city, state, country, phone_number, email_address) FROM stdin;
\.


--
-- Data for Name: checkedin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.checkedin (employee_sin, hotel_id, room_number, start_date, end_date, payment) FROM stdin;
\.


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer (sin, given_name, family_name, street_name, street_number, city, state, country, date_of_registration) FROM stdin;
\.


--
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employee (hotel_id, sin, street_name, street_number, city, state, country, rating, given_name, family_name) FROM stdin;
\.


--
-- Data for Name: employeerole; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employeerole (sin, role) FROM stdin;
\.


--
-- Data for Name: hotel; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.hotel (hc_name, hotel_id, street_name, street_number, city, state, country, rating, phone_number, number_of_rooms) FROM stdin;
\.


--
-- Data for Name: hotelchain; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.hotelchain (hc_name, number_of_hotels) FROM stdin;
\.


--
-- Data for Name: reservation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reservation (hotel_id, room_number, start_date, end_date, customer_sin, reservation_type) FROM stdin;
\.


--
-- Data for Name: reservationsarchive; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reservationsarchive (hc_name, hotel_id, room_number, start_date, end_date, customer_sin, employee_sin, reservation_type) FROM stdin;
\.


--
-- Data for Name: room; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.room (hotel_id, room_number, view_type, capacity, price, extendable, area) FROM stdin;
\.


--
-- Data for Name: roomamenities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roomamenities (hotel_id, room_number, amenity) FROM stdin;
\.


--
-- Data for Name: roomdamages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roomdamages (hotel_id, room_number, damage) FROM stdin;
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
    ADD CONSTRAINT reservationsarchive_pkey PRIMARY KEY (hc_name, hotel_id, room_number, start_date, end_date, customer_sin, employee_sin);


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
-- Name: unit unit_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unit
    ADD CONSTRAINT unit_pkey PRIMARY KEY (id);


--
-- Name: centraloffice centraloffice_hc_name_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.centraloffice
    ADD CONSTRAINT centraloffice_hc_name_fkey FOREIGN KEY (hc_name) REFERENCES public.hotelchain(hc_name);


--
-- Name: checkedin checkedin_employee_sin_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.checkedin
    ADD CONSTRAINT checkedin_employee_sin_fkey FOREIGN KEY (employee_sin) REFERENCES public.employee(sin);


--
-- Name: checkedin checkedin_hotel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.checkedin
    ADD CONSTRAINT checkedin_hotel_id_fkey FOREIGN KEY (hotel_id, room_number, start_date, end_date) REFERENCES public.reservation(hotel_id, room_number, start_date, end_date);


--
-- Name: employee employee_hotel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_hotel_id_fkey FOREIGN KEY (hotel_id) REFERENCES public.hotel(hotel_id);


--
-- Name: employeerole employeerole_sin_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employeerole
    ADD CONSTRAINT employeerole_sin_fkey FOREIGN KEY (sin) REFERENCES public.employee(sin);


--
-- Name: hotel hotel_hc_name_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hotel
    ADD CONSTRAINT hotel_hc_name_fkey FOREIGN KEY (hc_name) REFERENCES public.hotelchain(hc_name);


--
-- Name: reservation reservation_customer_sin_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT reservation_customer_sin_fkey FOREIGN KEY (customer_sin) REFERENCES public.customer(sin);


--
-- Name: reservation reservation_hotel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT reservation_hotel_id_fkey FOREIGN KEY (hotel_id, room_number) REFERENCES public.room(hotel_id, room_number);


--
-- Name: room room_hotel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.room
    ADD CONSTRAINT room_hotel_id_fkey FOREIGN KEY (hotel_id) REFERENCES public.hotel(hotel_id);


--
-- Name: roomamenities roomamenities_hotel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roomamenities
    ADD CONSTRAINT roomamenities_hotel_id_fkey FOREIGN KEY (hotel_id, room_number) REFERENCES public.room(hotel_id, room_number);


--
-- Name: roomdamages roomdamages_hotel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roomdamages
    ADD CONSTRAINT roomdamages_hotel_id_fkey FOREIGN KEY (hotel_id, room_number) REFERENCES public.room(hotel_id, room_number);


--
-- Name: TABLE unit; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.unit TO "Web_App_User";


--
-- PostgreSQL database dump complete
--


CREATE FUNCTION increment_room_num() RETURNS trigger AS $$
BEGIN
update hotel
set number_of_rooms = number_of_rooms + 1 where hotel_id = new.hotel_id;
RETURN NULL;
END;
$$ LANGUAGE plpgsql;

create trigger increment_room_number
	after delete on room
	for each row
EXECUTE PROCEDURE increment_room_num();
----------------------------------------------------------------------------------------------------
CREATE FUNCTION decrement_room_num() RETURNS trigger AS $$
BEGIN
update hotel
set number_of_rooms = number_of_rooms - 1 where hotel_id = old.hotel_id;
RETURN NULL;
END;
$$ LANGUAGE plpgsql;

create trigger decrement_room_number
	after delete on room
	for each row
EXECUTE PROCEDURE decrement_room_num();
---------------------------------------------------------------------------------------------------
CREATE FUNCTION decrement_hotel_num() RETURNS trigger AS $$
BEGIN
update hotelchain
set number_of_hotels = number_of_hotels - 1 where hc_name = old.hc_name;
RETURN NULL;
END;
$$ LANGUAGE plpgsql;

create trigger decrement_hotel_number
	after delete on hotel
	for each row
EXECUTE PROCEDURE decrement_hotel_num();

CREATE FUNCTION increment_hotel_num() RETURNS trigger AS $$
BEGIN
update hotelchain
set number_of_hotels = number_of_hotels + 1 where hc_name = new.hc_name;
RETURN NULL;
END;
$$ LANGUAGE plpgsql;

create trigger increment_hotel_number
	after delete on hotel
	for each row
EXECUTE PROCEDURE increment_hotel_num();
-----------------------------------------------------------------------------------------------
CREATE FUNCTION check_managers_role()
	RETURNS TRIGGER AS $BODY$
BEGIN
IF 'manager' NOT IN (SELECT ROLE FROM 
	(SELECT * FROM employee, 
		(SELECT * FROM hotel, 
		 	(SELECT hotel_id FROM employee 
			 WHERE employee.sin = OLD.sin LIMIT 1) AS e
		WHERE e.hotel_id = hotel.hotel_id LIMIT 1) AS h
	WHERE employee.hotel_id = h.hotel_id) AS employees JOIN employeerole ON employeerole.sin = e.sin)
THEN 
	RAISE EXCEPTION 'There must be at least one manager for every hotel';
END IF;
RETURN NULL;
END
$BODY$ LANGUAGE plpgsql;

CREATE TRIGGER check_managers
AFTER DELETE OR UPDATE ON employeerole
FOR EACH ROW
WHEN (OLD.role = 'manager')
EXECUTE PROCEDURE check_managers_role();
------------------------------------------------------------------------------------------
CREATE FUNCTION check_reservation_dates()
RETURNS TRIGGER AS $BODY$
BEGIN
IF EXISTS (SELECT * FROM reservation WHERE NOT ((NEW.start_date < reservation.start_date AND NEW.end_date < reservation.start_date) OR
		  									(NEW.start_date > reservation.end_date AND NEW.end_date > reservation.end_date)))
THEN 
	RAISE EXCEPTION 'Reservation dates cannot overlap';
END IF;
RETURN NEW;
END
$BODY$ LANGUAGE plpgsql;

CREATE TRIGGER check_reservation
BEFORE INSERT ON reservation
FOR EACH ROW 
EXECUTE PROCEDURE check_reservation_dates();
--------------------------------------------------------------------------------------------------------
CREATE FUNCTION check_reservation_dates_order()
RETURNS TRIGGER AS $BODY$
BEGIN
IF NEW.end_date < NEW.start_date
THEN 
	RAISE EXCEPTION 'Reservation start date must be before end date';
END IF;
RETURN NEW;
END
$BODY$ LANGUAGE plpgsql;

CREATE TRIGGER check_reservation_dates_order
BEFORE INSERT ON reservation
FOR EACH ROW 
EXECUTE PROCEDURE check_reservation_dates_order();
------------------------------------------------------------------------------------------------
CREATE FUNCTION log_reservation()
RETURNS TRIGGER AS $BODY$
	BEGIN
		INSERT INTO reservationsarchive VALUES(
			(SELECT hc_name FROM hotel WHERE hotel.hotel_id = NEW.hotel_id limit 1),
			NEW.hotel_id, NEW.room_number, NEW.start_end, NEW.end_date, NEW.customer_sin,
			(SELECT employee_sin FROM checkedin WHERE NEW.hotel_id = checkedin.hotel_id AND
											NEW.room_number = checkedin.room_number AND
											NEW.start_date = checkedin.start_date AND
											NEW.end_date = checkedin.end_date limit 1),
			NEW.reservation_type);
	RETURN NEW;
	END;
$BODY$ LANGUAGE plpgsql;


CREATE TRIGGER log_reservation
AFTER INSERT ON reservation
FOR EACH ROW
EXECUTE PROCEDURE log_reservation();
--------------------------------------------------------------------------------------------------
select room.* from room,hotel,reservation where ((
	room.hotel_id=hotel.hotel_id AND
	hotel.rating=? 				 AND
	hotel.city=?				 AND
	hotel.state=?				 AND
	hotel.country=?				 
	) AND (
	room.capacity=?				 AND
	room.price<=?				 AND
	room.area>=?				 
  	) AND (
		if not exists (
			select 1 from reservation where (
				(reservation.hotel_id=room.hotel_id AND reservation.room_id=room.room_id) AND (
					(reservation.end_date>? AND reservation.start_date<=?) OR -- ?1 :start , ?2 : end
					(reservation.start_date>=? AND reservation.start_date<?) OR -- ?1 :start , ?2 : end
					(reservation.start<? AND reservation.end>?) -- ?1 :start , ?2 : end
				)
			);
		)
	)
);
--------------------------------------------------------------------------------------------------

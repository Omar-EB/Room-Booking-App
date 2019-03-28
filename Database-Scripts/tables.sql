CREATE TABLE hotelchain
(
    hc_name text NOT NULL,
    number_of_hotels integer NOT NULL,
    PRIMARY KEY (hc_name),
    CHECK (number_of_hotels > 0)
)

CREATE TABLE CentralOffice (
	hc_name TEXT NOT NULL,
	street_name TEXT,
	street_number INT, 
	city TEXT,
	state VARCHAR(2),
	country VARCHAR(2),
	phone_number TEXT NOT NULL,
	email_address TEXT NOT NULL,
	PRIMARY KEY (street_name, street_number, city, state, country),
	FOREIGN KEY (hc_name) REFERENCES hotelchain (hc_name),
	CHECK (street_number > 0)
)

CREATE TABLE CheckedIn(
	employee_sin TEXT,
	hotel_id INT,
	room_number INT,
	start_date TIMESTAMP,
	end_date TIMESTAMP,
	payment FLOAT NOT NULL,
	PRIMARY KEY (employee_sin, hotel_id, room_number, start_date, end_date),
	FOREIGN KEY (employee_sin) REFERENCES employee (sin),
	FOREIGN KEY (hotel_id,room_number,start_date,end_date) REFERENCES reservation (hotel_id,room_number,start_date,end_date),
	CHECK (payment > 0.00)
)
								 
CREATE TABLE ReservationsArchive (
	hc_name TEXT,
	hotel_id INT,
	room_number INT,
	start_date timestamp,
	end_date timestamp,
	customer_sin TEXT,
	employee_sin TEXT,
	reservation_type Boolean DEFAULT False ,
	PRIMARY KEY (hc_name, hotel_id, room_number, start_date, end_date, customer_sin, employee_sin)
)
								 
create table Hotel (
	hc_name text not null references HotelChain(hc_name),
	hotel_id int primary key,
	street_name TEXT not null,
	street_number int not null, 
	city TEXT not null,
	state VARCHAR(2) not null,
	country VARCHAR(2) not null,
	rating int not null,
	phone_number text not null,
	number_of_rooms int not null,
	check (rating <= 5 and rating >= 0),
	check (number_of_rooms > 0),
	check (street_number > 0)
)

create table Employee (
	hotel_id int not null references Hotel(hotel_id),
	sin int primary key,
	street_name TEXT not null,
	street_number int not null, 
	city TEXT not null,
	state VARCHAR(2) not null,
	country VARCHAR(2) not null,
	rating int not null,
	given_name text not null,
	family_name text not null,
	check (street_number > 0)
)

create table EmployeeRole (
	sin text not null references Employee(sin),
	role text not null,
	primary key (sin,role)
)

CREATE TABLE Reservation (
	hotel_id INT,
	room_number INT,
	start_date TIMESTAMP,
	end_date TIMESTAMP,
	customer_sin TEXT NOT NULL,
	reservation_type BOOLEAN DEFAULT FALSE,
	PRIMARY KEY (hotel_id, room_number, start_date, end_date),
	FOREIGN KEY (hotel_id,room_number) REFERENCES room (hotel_id,room_number),
	FOREIGN KEY (customer_sin) REFERENCES customer (sin)
)

CREATE TABLE Customer (
	sin TEXT,
	given_name TEXT NOT NULL,
	family_name TEXT NOT NULL,
	street_name TEXT NOT NULL,
	street_number INT NOT NULL,
	city TEXT NOT NULL,
	state VARCHAR(2) NOT NULL,
	country VARCHAR(2) NOT NULL,
	date_of_registration TIMESTAMP NOT NULL,
	PRIMARY KEY (sin),
	CHECK (street_number > 0)
)


CREATE TABLE Room (
	hotel_id INT,
	room_number INT,
	view_type TEXT NOT NULL,
	capacity INT NOT NULL,
	price FLOAT,
	extendable BOOLEAN DEFAULT FALSE,
	area FLOAT NOT NULL,
	PRIMARY KEY (hotel_id, room_number),
	FOREIGN KEY (hotel_id) REFERENCES hotel (hotel_id),
	CHECK (room_number > 0),
	CHECK (capacity > 0),
	CHECK (price > 0.00),
	CHECK (area > 0.00)
)

CREATE TABLE RoomAmenities (
	hotel_id INT,
	room_number INT,
	amenity TEXT,
	PRIMARY KEY (hotel_id, room_number, amenity),
	FOREIGN KEY (hotel_id,room_numer) REFERENCES room (hotel_id,room_numer)
)

CREATE TABLE RoomDamages (
	hotel_id INT,
	room_number INT,
	damage TEXT,
	PRIMARY KEY (hotel_id, room_number, damage),
	FOREIGN KEY (hotel_id,room_numer) REFERENCES room (hotel_id,room_numer)
)
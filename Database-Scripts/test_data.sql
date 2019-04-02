
-- HOTEL CHAIN
insert into hotelchain values ('TopHill');
insert into hotelchain values ('McDonalds');


-- CENTRAL OFFICE
insert into centraloffice values ('TopHill','Laurier',26,'Ottawa','ON','CA','124-122-6789','test@tophill.ca');


-- HOTEL  
alter sequence hotel_id_seq restart;

insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('TopHill', 'Lincoln', 25, 'Montreal', 'QC', 'CA', 1, '423-196-9274');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('TopHill', 'Cedar', 25, 'Montreal', 'QC', 'CA', 2, '543-236-9274');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('TopHill', 'River', 65, 'Montreal', 'QC', 'CA', 3, '953-236-9272');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('TopHill', 'Route9', 65, 'Ottawa', 'ON', 'CA', 5, '153-236-9752');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('TopHill', 'Route10', 65, 'Ottawa', 'ON', 'CA', 2, '153-246-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('TopHill', 'Manordale', 65, 'Ottawa', 'ON', 'CA', 4, '553-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('TopHill', 'Algonquin', 65, 'Ottawa', 'ON', 'CA', 4, '753-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('TopHill', 'Route9', 65, 'Ottawa', 'ON', 'CA', 4, '953-236-9762');


insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('McDonalds', 'Street24', 65, 'Ottawa', 'ON', 'CA', 1, '533-236-9762');



-- ROOM
insert into room values (1, 100, 'Sea', 3, 80, false, 96);
insert into room values (1, 101, 'Sea', 4, 80, false, 10);
insert into room values (1, 103, 'Mountain', 5, 80, True, 100);
insert into room values (1, 200, 'Volcano', 8, 80, false, 453);
insert into room values (1, 201, 'Sky', 9, 20, True, 42);

insert into room values (2, 100, 'Sea', 3, 80, false, 96);
insert into room values (2, 101, 'Sea', 4, 80, false, 10);
insert into room values (2, 103, 'Mountain', 5, 80, True, 100);
insert into room values (2, 200, 'Volcano', 8, 80, false, 453);
insert into room values (2, 201, 'Sky', 9, 20, True, 42);

insert into room values (3, 100, 'Sea', 3, 80, false, 96);
insert into room values (3, 101, 'Sea', 4, 80, false, 10);
insert into room values (3, 103, 'Mountain', 5, 80, True, 100);
insert into room values (3, 200, 'Volcano', 8, 80, false, 453);
insert into room values (3, 201, 'Sky', 9, 20, True, 42);

insert into room values (4, 100, 'Sea', 3, 80, false, 96);
insert into room values (4, 101, 'Sea', 4, 80, false, 10);
insert into room values (4, 103, 'Mountain', 5, 80, True, 100);
insert into room values (4, 200, 'Volcano', 8, 80, false, 453);
insert into room values (4, 201, 'Sky', 9, 20, True, 42);

insert into room values (5, 100, 'Sea', 3, 80, false, 96);
insert into room values (5, 101, 'Sea', 4, 80, false, 10);
insert into room values (5, 103, 'Mountain', 5, 80, True, 100);
insert into room values (5, 200, 'Volcano', 8, 80, false, 453);
insert into room values (5, 201, 'Sky', 9, 20, True, 42);

insert into room values (6, 100, 'Sea', 3, 80, false, 96);
insert into room values (6, 101, 'Sea', 4, 80, false, 10);
insert into room values (6, 103, 'Mountain', 5, 80, True, 100);
insert into room values (6, 200, 'Volcano', 8, 80, false, 453);
insert into room values (6, 201, 'Sky', 9, 20, True, 42);

insert into room values (7, 100, 'Sea', 3, 80, false, 96);
insert into room values (7, 101, 'Sea', 4, 80, false, 10);
insert into room values (7, 103, 'Mountain', 5, 80, True, 100);
insert into room values (7, 200, 'Volcano', 8, 80, false, 453);
insert into room values (7, 201, 'Sky', 9, 20, True, 42);

insert into room values (8, 100, 'Sea', 3, 80, false, 96);
insert into room values (8, 101, 'Sea', 4, 80, false, 10);
insert into room values (8, 103, 'Mountain', 5, 80, True, 100);
insert into room values (8, 200, 'Volcano', 8, 80, false, 453);
insert into room values (8, 201, 'Sky', 9, 20, True, 42);
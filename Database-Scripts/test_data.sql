-- To remove all data
delete from hotelchain;
delete from employee;
delete from customer;
delete from reservationsarchive;


-- HOTEL CHAIN
insert into hotelchain values ('TopHill');
insert into hotelchain values ('McDonalds');
insert into hotelchain values ('Prolog');
insert into hotelchain values ('Mariott');
insert into hotelchain values ('Thanos');
insert into hotelchain values ('Magica');
insert into hotelchain values ('Deuce');
insert into hotelchain values ('Joker');


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
	values ('McDonalds', 'Street3', 65, 'Ottawa', 'ON', 'CA', 1, '533-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('McDonalds', 'Snorlax', 25, 'Montreal', 'QC', 'CA', 2, '543-236-9274');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('McDonalds', 'Road', 65, 'Montreal', 'QC', 'CA', 3, '953-236-9272');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('McDonalds', 'Route11', 65, 'Ottawa', 'ON', 'CA', 5, '153-236-9752');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('McDonalds', 'Route99', 65, 'Ottawa', 'ON', 'CA', 2, '153-246-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('McDonalds', 'Manor', 65, 'Ottawa', 'ON', 'CA', 4, '553-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('McDonalds', 'Alquin', 65, 'Ottawa', 'ON', 'CA', 4, '753-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('McDonalds', 'Ash', 65, 'Ottawa', 'ON', 'CA', 4, '953-236-9762');

insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Prolog', 'Seet3', 65, 'Ottawa', 'ON', 'CA', 1, '533-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Prolog', 'Snor', 25, 'Montreal', 'QC', 'CA', 2, '543-236-9274');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Prolog', 'Far', 65, 'Montreal', 'QC', 'CA', 3, '953-236-9272');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Prolog', 'Halo', 65, 'Ottawa', 'ON', 'CA', 5, '153-236-9752');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Prolog', 'Jabba', 65, 'Ottawa', 'ON', 'CA', 2, '153-246-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Prolog', 'Lemon', 65, 'Ottawa', 'ON', 'CA', 4, '553-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Prolog', 'Wave', 65, 'Ottawa', 'ON', 'CA', 4, '753-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Prolog', 'Key', 65, 'Ottawa', 'ON', 'CA', 4, '953-236-9762');

insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Mariott', 'Seet3', 65, 'Ottawa', 'ON', 'CA', 1, '533-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Mariott', 'Snor', 25, 'Montreal', 'QC', 'CA', 2, '543-236-9274');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Mariott', 'Far', 65, 'Montreal', 'QC', 'CA', 3, '953-236-9272');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Mariott', 'Halo', 65, 'Ottawa', 'ON', 'CA', 5, '153-236-9752');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Mariott', 'Jabba', 65, 'Ottawa', 'ON', 'CA', 2, '153-246-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Mariott', 'Lemon', 65, 'Ottawa', 'ON', 'CA', 4, '553-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Mariott', 'Wave', 65, 'Ottawa', 'ON', 'CA', 4, '753-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Mariott', 'Key', 65, 'Ottawa', 'ON', 'CA', 4, '953-236-9762');

insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Thanos', 'Cactus', 9, 'Ottawa', 'ON', 'CA', 1, '533-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Thanos', 'Cat', 25, 'Montreal', 'QC', 'CA', 2, '543-236-9274');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Thanos', 'Sovereign', 5, 'Montreal', 'QC', 'CA', 3, '953-236-9272');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Thanos', 'Laurier', 65, 'Ottawa', 'ON', 'CA', 5, '153-236-9752');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Thanos', 'Over', 35, 'Ottawa', 'ON', 'CA', 2, '153-246-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Thanos', 'Apple', 55, 'Ottawa', 'ON', 'CA', 4, '553-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Thanos', 'Orange', 66, 'Ottawa', 'ON', 'CA', 4, '753-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Thanos', 'Key', 55, 'Ottawa', 'ON', 'CA', 4, '953-236-9762');


insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Magica', 'Flower', 94, 'Ottawa', 'ON', 'CA', 1, '533-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Magica', 'Mackenzie', 253, 'Montreal', 'QC', 'CA', 2, '543-236-9274');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Magica', 'King', 54, 'Montreal', 'QC', 'CA', 3, '953-236-9272');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Magica', 'Edward', 365, 'Ottawa', 'ON', 'CA', 5, '153-236-9752');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Magica', 'Moodie', 325, 'Ottawa', 'ON', 'CA', 2, '153-246-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Magica', 'Carleton', 535, 'Ottawa', 'ON', 'CA', 4, '553-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Magica', 'Merivale', 66, 'Ottawa', 'ON', 'CA', 4, '753-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Magica', 'Keyee', 53, 'Ottawa', 'ON', 'CA', 4, '953-236-9762');

insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Deuce', 'Heart', 94, 'Ottawa', 'ON', 'CA', 1, '533-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Deuce', 'Yes', 253, 'Montreal', 'QC', 'CA', 2, '543-236-9274');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Deuce', 'Angular', 54, 'Montreal', 'QC', 'CA', 3, '953-236-9272');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Deuce', 'Spring', 365, 'Ottawa', 'ON', 'CA', 5, '153-236-9752');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Deuce', 'Boot', 325, 'Ottawa', 'ON', 'CA', 2, '153-246-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Deuce', 'Carlen', 535, 'Ottawa', 'ON', 'CA', 4, '553-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Deuce', 'Merale', 66, 'Ottawa', 'ON', 'CA', 4, '753-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Deuce', 'Yeet', 53, 'Ottawa', 'ON', 'CA', 4, '953-236-9762');

insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Joker', 'Space', 94, 'Ottawa', 'ON', 'CA', 1, '533-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Joker', 'Green', 253, 'Montreal', 'QC', 'CA', 2, '543-236-9274');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Joker', 'Angar', 54, 'Montreal', 'QC', 'CA', 3, '953-236-9272');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Joker', 'Ring', 365, 'Ottawa', 'ON', 'CA', 5, '153-236-9752');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Joker', 'Bot', 325, 'Ottawa', 'ON', 'CA', 2, '153-246-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Joker', 'Arlen', 535, 'Ottawa', 'ON', 'CA', 4, '553-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Joker', 'Rale', 66, 'Ottawa', 'ON', 'CA', 4, '753-236-9762');
insert into hotel(hc_name, street_name, street_number, city, state, country, rating, phone_number) 
	values ('Joker', 'Yeeeeeet', 53, 'Ottawa', 'ON', 'CA', 4, '953-236-9762');


-- ROOM
insert into room values (1, 100, 'Sea', 3, 80, false, 96);
insert into room values (1, 101, 'Sea', 4, 80, false, 10);
insert into room values (1, 103, 'Mountain', 5, 80, True, 100);
insert into room values (1, 200, 'Sea', 8, 80, false, 453);
insert into room values (1, 201, 'Mountain', 9, 20, True, 42);

insert into room values (2, 100, 'Sea', 3, 80, false, 96);
insert into room values (2, 101, 'Sea', 4, 80, false, 10);
insert into room values (2, 103, 'Mountain', 5, 80, True, 100);
insert into room values (2, 200, 'Volcano', 8, 80, false, 453);
insert into room values (2, 201, 'Sky', 9, 20, True, 42);

insert into room values (3, 100, 'Sea', 3, 80, false, 96);
insert into room values (3, 101, 'Sea', 4, 80, false, 10);
insert into room values (3, 103, 'Mountain', 5, 80, True, 100);
insert into room values (3, 200, 'Sea', 8, 80, false, 453);
insert into room values (3, 201, 'Mountain', 9, 20, True, 42);

insert into room values (4, 100, 'Sea', 3, 80, false, 96);
insert into room values (4, 101, 'Sea', 4, 80, false, 10);
insert into room values (4, 103, 'Mountain', 5, 80, True, 100);
insert into room values (4, 200, 'Sea', 8, 80, false, 453);
insert into room values (4, 201, 'Mountain', 9, 20, True, 42);

insert into room values (5, 100, 'Sea', 3, 80, false, 96);
insert into room values (5, 101, 'Sea', 4, 80, false, 10);
insert into room values (5, 103, 'Mountain', 5, 80, True, 100);
insert into room values (5, 200, 'Sea', 8, 80, false, 453);
insert into room values (5, 201, 'Sea', 9, 20, True, 42);

insert into room values (6, 100, 'Sea', 3, 80, false, 96);
insert into room values (6, 101, 'Sea', 4, 80, false, 10);
insert into room values (6, 103, 'Mountain', 5, 80, True, 100);
insert into room values (6, 200, 'Sea', 8, 80, false, 453);
insert into room values (6, 201, 'Mountain', 9, 20, True, 42);

insert into room values (7, 100, 'Sea', 3, 80, false, 96);
insert into room values (7, 101, 'Sea', 4, 80, false, 10);
insert into room values (7, 103, 'Mountain', 5, 80, True, 100);
insert into room values (7, 200, 'Mountain', 8, 80, false, 453);
insert into room values (7, 201, 'Mountain', 9, 20, True, 42);

insert into room values (8, 100, 'Sea', 3, 80, false, 96);
insert into room values (8, 101, 'Sea', 4, 80, false, 10);
insert into room values (8, 103, 'Mountain', 5, 80, True, 100);
insert into room values (8, 200, 'Mountain', 8, 80, false, 453);
insert into room values (8, 201, 'Sea', 9, 20, True, 42);



insert into room values (9, 100, 'Sea', 3, 80, false, 96);
insert into room values (9, 101, 'Sea', 4, 80, false, 10);
insert into room values (9, 103, 'Mountain', 5, 80, True, 100);
insert into room values (9, 200, 'Sea', 8, 80, false, 453);
insert into room values (9, 201, 'Mountain', 9, 20, True, 42);

insert into room values (10, 100, 'Sea', 3, 80, false, 96);
insert into room values (10, 101, 'Sea', 4, 80, false, 10);
insert into room values (10, 103, 'Mountain', 5, 80, True, 100);
insert into room values (10, 200, 'Volcano', 8, 80, false, 453);
insert into room values (10, 201, 'Sky', 9, 20, True, 42);

insert into room values (11, 100, 'Sea', 3, 80, false, 96);
insert into room values (11, 101, 'Sea', 4, 80, false, 10);
insert into room values (11, 103, 'Mountain', 5, 80, True, 100);
insert into room values (11, 200, 'Sea', 8, 80, false, 453);
insert into room values (11, 201, 'Mountain', 9, 20, True, 42);

insert into room values (12, 100, 'Sea', 3, 80, false, 96);
insert into room values (12, 101, 'Sea', 4, 80, false, 10);
insert into room values (12, 103, 'Mountain', 5, 80, True, 100);
insert into room values (12, 200, 'Sea', 8, 80, false, 453);
insert into room values (12, 201, 'Mountain', 9, 20, True, 42);

insert into room values (13, 100, 'Sea', 3, 80, false, 96);
insert into room values (13, 101, 'Sea', 4, 80, false, 10);
insert into room values (13, 103, 'Mountain', 5, 80, True, 100);
insert into room values (13, 200, 'Sea', 8, 80, false, 453);
insert into room values (13, 201, 'Sea', 9, 20, True, 42);

insert into room values (14, 100, 'Sea', 3, 80, false, 96);
insert into room values (14, 101, 'Sea', 4, 80, false, 10);
insert into room values (14, 103, 'Mountain', 5, 80, True, 100);
insert into room values (14, 200, 'Sea', 8, 80, false, 453);
insert into room values (14, 201, 'Mountain', 9, 20, True, 42);

insert into room values (15, 100, 'Sea', 3, 80, false, 96);
insert into room values (15, 101, 'Sea', 4, 80, false, 10);
insert into room values (15, 103, 'Mountain', 5, 80, True, 100);
insert into room values (15, 200, 'Mountain', 8, 80, false, 453);
insert into room values (15, 201, 'Mountain', 9, 20, True, 42);

insert into room values (16, 100, 'Sea', 3, 80, false, 96);
insert into room values (16, 101, 'Sea', 4, 80, false, 10);
insert into room values (16, 103, 'Mountain', 5, 80, True, 100);
insert into room values (16, 200, 'Mountain', 8, 80, false, 453);
insert into room values (16, 201, 'Sea', 9, 20, True, 42);



insert into room values (17, 100, 'Sea', 3, 80, false, 96);
insert into room values (17, 101, 'Sea', 4, 80, false, 10);
insert into room values (17, 103, 'Mountain', 5, 80, True, 100);
insert into room values (17, 200, 'Sea', 8, 80, false, 453);
insert into room values (17, 201, 'Mountain', 9, 20, True, 42);

insert into room values (18, 100, 'Sea', 3, 80, false, 96);
insert into room values (18, 101, 'Sea', 4, 80, false, 10);
insert into room values (18, 103, 'Mountain', 5, 80, True, 100);
insert into room values (18, 200, 'Volcano', 8, 80, false, 453);
insert into room values (18, 201, 'Sky', 9, 20, True, 42);

insert into room values (19, 100, 'Sea', 3, 80, false, 96);
insert into room values (19, 101, 'Sea', 4, 80, false, 10);
insert into room values (19, 103, 'Mountain', 5, 80, True, 100);
insert into room values (19, 200, 'Sea', 8, 80, false, 453);
insert into room values (19, 201, 'Mountain', 9, 20, True, 42);

insert into room values (20, 100, 'Sea', 3, 80, false, 96);
insert into room values (20, 101, 'Sea', 4, 80, false, 10);
insert into room values (20, 103, 'Mountain', 5, 80, True, 100);
insert into room values (20, 200, 'Sea', 8, 80, false, 453);
insert into room values (20, 201, 'Mountain', 9, 20, True, 42);

insert into room values (21, 100, 'Sea', 3, 80, false, 96);
insert into room values (21, 101, 'Sea', 4, 80, false, 10);
insert into room values (21, 103, 'Mountain', 5, 80, True, 100);
insert into room values (21, 200, 'Sea', 8, 80, false, 453);
insert into room values (21, 201, 'Mountain', 9, 20, True, 42);

insert into room values (22, 100, 'Sea', 3, 80, false, 96);
insert into room values (22, 101, 'Sea', 4, 80, false, 10);
insert into room values (22, 103, 'Mountain', 5, 80, True, 100);
insert into room values (22, 200, 'Mountain', 8, 80, false, 453);
insert into room values (22, 201, 'Mountain', 9, 20, True, 42);

insert into room values (23, 100, 'Sea', 3, 80, false, 96);
insert into room values (23, 101, 'Sea', 4, 80, false, 10);
insert into room values (23, 103, 'Mountain', 5, 80, True, 100);
insert into room values (23, 200, 'Mountain', 8, 80, false, 453);
insert into room values (23, 201, 'Sea', 9, 20, True, 42);

insert into room values (24, 100, 'Sea', 3, 80, false, 96);
insert into room values (24, 101, 'Sea', 4, 80, false, 10);
insert into room values (24, 103, 'Mountain', 5, 80, True, 100);
insert into room values (24, 200, 'Sea', 8, 80, false, 453);
insert into room values (24, 201, 'Sea', 9, 20, True, 42);



insert into room values (25, 100, 'Sea', 3, 80, false, 96);
insert into room values (25, 101, 'Sea', 4, 80, false, 10);
insert into room values (25, 103, 'Mountain', 5, 80, True, 100);
insert into room values (25, 200, 'Sea', 8, 80, false, 453);
insert into room values (25, 201, 'Mountain', 9, 20, True, 42);

insert into room values (26, 100, 'Sea', 3, 80, false, 96);
insert into room values (26, 101, 'Sea', 4, 80, false, 10);
insert into room values (26, 103, 'Mountain', 5, 80, True, 100);
insert into room values (26, 200, 'Volcano', 8, 80, false, 453);
insert into room values (26, 201, 'Sky', 9, 20, True, 42);

insert into room values (27, 100, 'Sea', 3, 80, false, 96);
insert into room values (27, 101, 'Sea', 4, 80, false, 10);
insert into room values (27, 103, 'Mountain', 5, 80, True, 100);
insert into room values (27, 200, 'Sea', 8, 80, false, 453);
insert into room values (27, 201, 'Mountain', 9, 20, True, 42);

insert into room values (28, 100, 'Sea', 3, 80, false, 96);
insert into room values (28, 101, 'Sea', 4, 80, false, 10);
insert into room values (28, 103, 'Mountain', 5, 80, True, 100);
insert into room values (28, 200, 'Sea', 8, 80, false, 453);
insert into room values (28, 201, 'Mountain', 9, 20, True, 42);

insert into room values (29, 100, 'Sea', 3, 80, false, 96);
insert into room values (29, 101, 'Sea', 4, 80, false, 10);
insert into room values (29, 103, 'Mountain', 5, 80, True, 100);
insert into room values (29, 200, 'Sea', 8, 80, false, 453);
insert into room values (29, 201, 'Mountain', 9, 20, True, 42);

insert into room values (30, 100, 'Sea', 3, 80, false, 96);
insert into room values (30, 101, 'Sea', 4, 80, false, 10);
insert into room values (30, 103, 'Mountain', 5, 80, True, 100);
insert into room values (30, 200, 'Mountain', 8, 80, false, 453);
insert into room values (30, 201, 'Mountain', 9, 20, True, 42);

insert into room values (31, 100, 'Sea', 3, 80, false, 96);
insert into room values (31, 101, 'Sea', 4, 80, false, 10);
insert into room values (31, 103, 'Mountain', 5, 80, True, 100);
insert into room values (31, 200, 'Mountain', 8, 80, false, 453);
insert into room values (31, 201, 'Sea', 9, 20, True, 42);

insert into room values (32, 100, 'Sea', 3, 80, false, 96);
insert into room values (32, 101, 'Sea', 4, 80, false, 10);
insert into room values (32, 103, 'Mountain', 5, 80, True, 100);
insert into room values (32, 200, 'Sea', 8, 80, false, 453);
insert into room values (32, 201, 'Sea', 9, 20, True, 42);




insert into room values (33, 100, 'Sea', 3, 80, false, 96);
insert into room values (33, 101, 'Sea', 4, 80, false, 10);
insert into room values (33, 103, 'Mountain', 5, 80, True, 100);
insert into room values (33, 200, 'Sea', 8, 80, false, 453);
insert into room values (33, 201, 'Mountain', 9, 20, True, 42);

insert into room values (34, 100, 'Sea', 3, 80, false, 96);
insert into room values (34, 101, 'Sea', 4, 80, false, 10);
insert into room values (34, 103, 'Mountain', 5, 80, True, 100);
insert into room values (34, 200, 'Volcano', 8, 80, false, 453);
insert into room values (34, 201, 'Sky', 9, 20, True, 42);

insert into room values (35, 100, 'Sea', 3, 80, false, 96);
insert into room values (35, 101, 'Sea', 4, 80, false, 10);
insert into room values (35, 103, 'Mountain', 5, 80, True, 100);
insert into room values (35, 200, 'Sea', 8, 80, false, 453);
insert into room values (35, 201, 'Mountain', 9, 20, True, 42);

insert into room values (36, 100, 'Sea', 3, 80, false, 96);
insert into room values (36, 101, 'Sea', 4, 80, false, 10);
insert into room values (36, 103, 'Mountain', 5, 80, True, 100);
insert into room values (36, 200, 'Sea', 8, 80, false, 453);
insert into room values (36, 201, 'Mountain', 9, 20, True, 42);

insert into room values (37, 100, 'Sea', 3, 80, false, 96);
insert into room values (37, 101, 'Sea', 4, 80, false, 10);
insert into room values (37, 103, 'Mountain', 5, 80, True, 100);
insert into room values (37, 200, 'Sea', 8, 80, false, 453);
insert into room values (37, 201, 'Mountain', 9, 20, True, 42);

insert into room values (38, 100, 'Sea', 3, 80, false, 96);
insert into room values (38, 101, 'Sea', 4, 80, false, 10);
insert into room values (38, 103, 'Mountain', 5, 80, True, 100);
insert into room values (38, 200, 'Mountain', 8, 80, false, 453);
insert into room values (38, 201, 'Mountain', 9, 20, True, 42);

insert into room values (39, 100, 'Sea', 3, 80, false, 96);
insert into room values (39, 101, 'Sea', 4, 80, false, 10);
insert into room values (39, 103, 'Mountain', 5, 80, True, 100);
insert into room values (39, 200, 'Mountain', 8, 80, false, 453);
insert into room values (39, 201, 'Sea', 9, 20, True, 42);

insert into room values (40, 100, 'Sea', 3, 80, false, 96);
insert into room values (40, 101, 'Sea', 4, 80, false, 10);
insert into room values (40, 103, 'Mountain', 5, 80, True, 100);
insert into room values (40, 200, 'Sea', 8, 80, false, 453);
insert into room values (40, 201, 'Sea', 9, 20, True, 42);





insert into room values (41, 100, 'Sea', 3, 80, false, 96);
insert into room values (41, 101, 'Sea', 4, 80, false, 10);
insert into room values (41, 103, 'Mountain', 5, 80, True, 100);
insert into room values (41, 200, 'Sea', 8, 80, false, 453);
insert into room values (41, 201, 'Mountain', 9, 20, True, 42);

insert into room values (42, 100, 'Sea', 3, 80, false, 96);
insert into room values (42, 101, 'Sea', 4, 80, false, 10);
insert into room values (42, 103, 'Mountain', 5, 80, True, 100);
insert into room values (42, 200, 'Volcano', 8, 80, false, 453);
insert into room values (42, 201, 'Sky', 9, 20, True, 42);

insert into room values (43, 100, 'Sea', 3, 80, false, 96);
insert into room values (43, 101, 'Sea', 4, 80, false, 10);
insert into room values (43, 103, 'Mountain', 5, 80, True, 100);
insert into room values (43, 200, 'Sea', 8, 80, false, 453);
insert into room values (43, 201, 'Mountain', 9, 20, True, 42);

insert into room values (44, 100, 'Sea', 3, 80, false, 96);
insert into room values (44, 101, 'Sea', 4, 80, false, 10);
insert into room values (44, 103, 'Mountain', 5, 80, True, 100);
insert into room values (44, 200, 'Sea', 8, 80, false, 453);
insert into room values (44, 201, 'Mountain', 9, 20, True, 42);

insert into room values (45, 100, 'Sea', 3, 80, false, 96);
insert into room values (45, 101, 'Sea', 4, 80, false, 10);
insert into room values (45, 103, 'Mountain', 5, 80, True, 100);
insert into room values (45, 200, 'Sea', 8, 80, false, 453);
insert into room values (45, 201, 'Mountain', 9, 20, True, 42);

insert into room values (46, 100, 'Sea', 3, 80, false, 96);
insert into room values (46, 101, 'Sea', 4, 80, false, 10);
insert into room values (46, 103, 'Mountain', 5, 80, True, 100);
insert into room values (46, 200, 'Mountain', 8, 80, false, 453);
insert into room values (46, 201, 'Mountain', 9, 20, True, 42);

insert into room values (47, 100, 'Sea', 3, 80, false, 96);
insert into room values (47, 101, 'Sea', 4, 80, false, 10);
insert into room values (47, 103, 'Mountain', 5, 80, True, 100);
insert into room values (47, 200, 'Mountain', 8, 80, false, 453);
insert into room values (47, 201, 'Sea', 9, 20, True, 42);

insert into room values (48, 100, 'Sea', 3, 80, false, 96);
insert into room values (48, 101, 'Sea', 4, 80, false, 10);
insert into room values (48, 103, 'Mountain', 5, 80, True, 100);
insert into room values (48, 200, 'Sea', 8, 80, false, 453);
insert into room values (48, 201, 'Sea', 9, 20, True, 42);



insert into room values (49, 100, 'Sea', 3, 80, false, 96);
insert into room values (49, 101, 'Sea', 4, 80, false, 10);
insert into room values (49, 103, 'Mountain', 5, 80, True, 100);
insert into room values (49, 200, 'Sea', 8, 80, false, 453);
insert into room values (49, 201, 'Mountain', 9, 20, True, 42);

insert into room values (50, 100, 'Sea', 3, 80, false, 96);
insert into room values (50, 101, 'Sea', 4, 80, false, 10);
insert into room values (50, 103, 'Mountain', 5, 80, True, 100);
insert into room values (50, 200, 'Volcano', 8, 80, false, 453);
insert into room values (50, 201, 'Sky', 9, 20, True, 42);

insert into room values (51, 100, 'Sea', 3, 80, false, 96);
insert into room values (51, 101, 'Sea', 4, 80, false, 10);
insert into room values (51, 103, 'Mountain', 5, 80, True, 100);
insert into room values (51, 200, 'Sea', 8, 80, false, 453);
insert into room values (51, 201, 'Mountain', 9, 20, True, 42);

insert into room values (52, 100, 'Sea', 3, 80, false, 96);
insert into room values (52, 101, 'Sea', 4, 80, false, 10);
insert into room values (52, 103, 'Mountain', 5, 80, True, 100);
insert into room values (52, 200, 'Sea', 8, 80, false, 453);
insert into room values (52, 201, 'Mountain', 9, 20, True, 42);

insert into room values (53, 100, 'Sea', 3, 80, false, 96);
insert into room values (53, 101, 'Sea', 4, 80, false, 10);
insert into room values (53, 103, 'Mountain', 5, 80, True, 100);
insert into room values (53, 200, 'Sea', 8, 80, false, 453);
insert into room values (53, 201, 'Mountain', 9, 20, True, 42);

insert into room values (54, 100, 'Sea', 3, 80, false, 96);
insert into room values (54, 101, 'Sea', 4, 80, false, 10);
insert into room values (54, 103, 'Mountain', 5, 80, True, 100);
insert into room values (54, 200, 'Mountain', 8, 80, false, 453);
insert into room values (54, 201, 'Mountain', 9, 20, True, 42);

insert into room values (55, 100, 'Sea', 3, 80, false, 96);
insert into room values (55, 101, 'Sea', 4, 80, false, 10);
insert into room values (55, 103, 'Mountain', 5, 80, True, 100);
insert into room values (55, 200, 'Mountain', 8, 80, false, 453);
insert into room values (55, 201, 'Sea', 9, 20, True, 42);

insert into room values (56, 100, 'Sea', 3, 80, false, 96);
insert into room values (56, 101, 'Sea', 4, 80, false, 10);
insert into room values (56, 103, 'Mountain', 5, 80, True, 100);
insert into room values (56, 200, 'Sea', 8, 80, false, 453);
insert into room values (56, 201, 'Sea', 9, 20, True, 42);



insert into room values (57, 100, 'Sea', 3, 80, false, 96);
insert into room values (57, 101, 'Sea', 4, 80, false, 10);
insert into room values (57, 103, 'Mountain', 5, 80, True, 100);
insert into room values (57, 200, 'Sea', 8, 80, false, 453);
insert into room values (57, 201, 'Mountain', 9, 20, True, 42);

insert into room values (58, 100, 'Sea', 3, 80, false, 96);
insert into room values (58, 101, 'Sea', 4, 80, false, 10);
insert into room values (58, 103, 'Mountain', 5, 80, True, 100);
insert into room values (58, 200, 'Volcano', 8, 80, false, 453);
insert into room values (58, 201, 'Sky', 9, 20, True, 42);

insert into room values (59, 100, 'Sea', 3, 80, false, 96);
insert into room values (59, 101, 'Sea', 4, 80, false, 10);
insert into room values (59, 103, 'Mountain', 5, 80, True, 100);
insert into room values (59, 200, 'Sea', 8, 80, false, 453);
insert into room values (59, 201, 'Mountain', 9, 20, True, 42);

insert into room values (60, 100, 'Sea', 3, 80, false, 96);
insert into room values (60, 101, 'Sea', 4, 80, false, 10);
insert into room values (60, 103, 'Mountain', 5, 80, True, 100);
insert into room values (60, 200, 'Sea', 8, 80, false, 453);
insert into room values (60, 201, 'Mountain', 9, 20, True, 42);

insert into room values (61, 100, 'Sea', 3, 80, false, 96);
insert into room values (61, 101, 'Sea', 4, 80, false, 10);
insert into room values (61, 103, 'Mountain', 5, 80, True, 100);
insert into room values (61, 200, 'Sea', 8, 80, false, 453);
insert into room values (61, 201, 'Mountain', 9, 20, True, 42);

insert into room values (62, 100, 'Sea', 3, 80, false, 96);
insert into room values (62, 101, 'Sea', 4, 80, false, 10);
insert into room values (62, 103, 'Mountain', 5, 80, True, 100);
insert into room values (62, 200, 'Mountain', 8, 80, false, 453);
insert into room values (62, 201, 'Mountain', 9, 20, True, 42);

insert into room values (63, 100, 'Sea', 3, 80, false, 96);
insert into room values (63, 101, 'Sea', 4, 80, false, 10);
insert into room values (63, 103, 'Mountain', 5, 80, True, 100);
insert into room values (63, 200, 'Mountain', 8, 80, false, 453);
insert into room values (63, 201, 'Sea', 9, 20, True, 42);

insert into room values (64, 100, 'Sea', 3, 80, false, 96);
insert into room values (64, 101, 'Sea', 4, 80, false, 10);
insert into room values (64, 103, 'Mountain', 5, 80, True, 100);
insert into room values (64, 200, 'Sea', 8, 80, false, 453);
insert into room values (64, 201, 'Sea', 9, 20, True, 42);




-- ROOM DAMAGES
insert into roomdamages(hotel_id, room_number, damage)  values (1, 100, 'mold');
insert into roomdamages(hotel_id, room_number, damage)  values (1, 101, 'mold');
insert into roomdamages(hotel_id, room_number, damage)  values (1, 101, 'bedbugs');

-- ROOM AMENITIES
insert into roomamenities(hotel_id, room_number, amenity)  values (1, 103, 'pool');
insert into roomamenities(hotel_id, room_number, amenity)  values (1, 100, 'food');
insert into roomamenities(hotel_id, room_number, amenity)  values (1, 103, 'wine');

-- CUSTOMER
insert into customer values ('124532589', 'Quang-Vinh', 'Do', 'Craig Henry', 31, 'Ottawa', 'ON', 'CA');
insert into customer values ('122342564', 'Omar', 'Elboraey', 'Vanier', 31, 'Ottawa', 'ON', 'CA');
insert into customer values ('532346978', 'Joey', 'Jeon', 'Baseline', 31, 'Ottawa', 'ON', 'CA');


-- EMPLOYEE
insert into employee(hotel_id, sin, given_name, family_name, street_name, street_number, city, state, country) 
    values (1, '153269837', 'Mob', 'Psycho', 'Laurier', 100, 'Ottawa', 'ON', 'CA');
insert into employee(hotel_id, sin, given_name, family_name, street_name, street_number, city, state, country) 
    values (1, '253423627', 'Reigen', 'Reigen', 'Merivale', 100, 'Ottawa', 'ON', 'CA');
insert into employee(hotel_id, sin, given_name, family_name, street_name, street_number, city, state, country) 
    values (1, '389129734', 'Iron', 'Man', 'Marvel', 100, 'Ottawa', 'ON', 'CA');


-- EMPLOYEE ROLES
insert into employeerole(sin, role)
    values ('153269837', 'manager');
insert into employeerole(sin, role)
    values ('253423627', 'Software developper');
insert into employeerole(sin, role)
    values ('253423627', 'cook');
insert into employeerole(sin, role)
    values ('253423627', 'Waiter');
insert into employeerole(sin, role)
    values ('389129734', 'Nurse');
insert into employeerole(sin, role)
    values ('389129734', 'UI Designer');


-- RESERVATION
alter sequence reservationsarchive_id_seq restart;
insert into reservation(hotel_id, room_number, start_date, end_date, customer_sin)
    values (1, 100, '2019-04-12 18:00:00', '2019-04-20 18:00:00', '124532589');


-- CHECKEDIN
insert into checkedin(hotel_id, room_number, start_date, end_date, employee_sin, payment)
    values (1, 100, '2019-04-12 18:00:00', '2019-04-20 18:00:00', '253423627', 100)

    
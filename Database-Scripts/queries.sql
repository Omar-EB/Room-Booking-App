-- the main room query based on parameters
select room.* from room,hotel where ((
	room.hotel_id=hotel.hotel_id AND
	hotel.city=?				 AND
	hotel.state=?				 AND
	hotel.country=?				 AND
	hotel.rating=? 				 AND
	hotel.hc_name=?
	) AND (
	room.capacity>=?				 AND
	room.price<=?				 AND
	room.area>=?				 
  	) AND (
		not exists (
			select 1 from reservation where (
				(reservation.hotel_id=room.hotel_id AND reservation.room_number=room.room_number) AND (
					(reservation.start_date<=? AND reservation.end_date>?) OR -- start
					(reservation.start_date<? AND reservation.end_date>=?) OR -- end
					(reservation.start_date>=? AND reservation.end_date<=?) -- ?1 :start , ?2 : end
				)
			);
		)
	)
)	GROUP BY room.hotel_id,room.room_number ;
--------------------------------------------------------------------------------------------------
-- room query for a specific hotel
select room.* from room,hotel where ((
	room.hotel_id=?
	) AND (
	room.capacity>=?				 AND
	room.price<=?				 AND
	room.area>=?				 
  	) AND (
		not exists (
			select 1 from reservation where (
				(reservation.hotel_id=room.hotel_id AND reservation.room_number=room.room_number) AND (
					(reservation.start_date<=? AND reservation.end_date>?) OR -- start
					(reservation.start_date<? AND reservation.end_date>=?) OR -- end
					(reservation.start_date>=? AND reservation.end_date<=?) -- ?1 :start , ?2 : end
				)
			);
		)
	)
)	GROUP BY room.hotel_id,room.room_number ;
--------------------------------------------------------------------------------------------------
SELECT p.name, e.city, e.category, e.num_rooms, s.price
From hotel e
INNER JOIN room s on e.hotel_id = s.hotel_id
INNER JOIN hotelchain p on s.chain_id = p.chain_id
WHERE s.room_num NOT IN (SELECT room_num FROM reservation WHERE NOT (('2019-04-10' < reservation.from_date AND '2019-04-12' < reservation.from_date) OR
		  				('2019-04-10' > reservation.to_date AND '2019-04-13' > reservation.to_date)) AND
						1 = reservation.hotel_id AND 1 = reservation.room_num)
package com.team.application.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.team.application.models.Reservation;
import com.team.application.models.keys.ReservationCompositeKey;

public interface ReservationRepository extends CrudRepository<Reservation, ReservationCompositeKey> {

	@Query("SELECT rs FROM Reservation rs WHERE rs.room.hotel.hotel_id = :hotel_id AND rs.customer.sin = :customer_sin")
	public List<Reservation> findReservationsByHotelAndCustomer(@Param("hotel_id") Integer hotel_Id, @Param("customer_sin") String customer_sin);
	
	@Query("SELECT rs FROM Reservation rs WHERE rs.room.hotel.hotel_id = :hotel_id")
	public List<Reservation> findReservationsByHotelId(@Param("hotel_id") Integer hotel_Id);
	
	//@Query("SELECT rs FROM Reservation rs WHERE rs.room.hotel.hotel_id = :hotel_id AND rs.room.room_id.room_number= :room_number")
	@Query("SELECT rs FROM Reservation rs WHERE rs.hotel_id = :hotel_id AND rs.room_number= :room_number")
	public List<Reservation> findReservationsByRoom(@Param("hotel_id") Integer hotel_Id, @Param("room_number") Integer room_number);
}

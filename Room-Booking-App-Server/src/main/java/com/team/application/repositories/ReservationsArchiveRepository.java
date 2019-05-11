package com.team.application.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.team.application.models.ReservationsArchive;

public interface ReservationsArchiveRepository extends CrudRepository<ReservationsArchive, Integer> {

	@Query("SELECT arc FROM ReservationsArchive arc WHERE arc.hotel_id = :hotel_id AND arc.room_number= :room_number")
	public List<ReservationsArchive> findArchivesByRoom(@Param("hotel_id") Integer hotel_Id, @Param("room_number") Integer room_number);

	@Query("SELECT arc FROM ReservationsArchive arc WHERE arc.hotel_id = :hotel_id")
	public List<ReservationsArchive> findArchivesByHotel(@Param("hotel_id") Integer hotel_Id);

}

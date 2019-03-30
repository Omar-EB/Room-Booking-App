package com.team.application.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.team.application.models.Room;
import com.team.application.models.RoomCompositeKey;

public interface RoomRepository extends CrudRepository<Room, RoomCompositeKey> {
	
	@Query("SELECT r FROM Room r WHERE r.room_id.hotel_id = :hotel_id")
    public List<Room> findRoomsByHotelId(@Param("hotel_id") int hotel_id);

}

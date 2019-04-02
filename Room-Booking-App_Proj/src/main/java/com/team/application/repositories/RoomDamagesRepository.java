package com.team.application.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.team.application.models.RoomDamages;
import com.team.application.models.RoomDamagesCompositeKey;
public interface RoomDamagesRepository extends CrudRepository<RoomDamages, RoomDamagesCompositeKey> {
	
	@Query("SELECT r FROM RoomDamages r WHERE r.hotel_id = :hotel_id AND  r.room_number = :room_number")
    public List<RoomDamages> findDamagesByHotelRoom(@Param("hotel_id") int hotel_id,@Param("room_number") int room_number);

}

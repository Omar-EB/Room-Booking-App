package com.team.application.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.team.application.models.RoomAmenities;
import com.team.application.models.keys.RoomAmenitiesCompositeKey;
public interface RoomAmenitiesRepository extends CrudRepository<RoomAmenities, RoomAmenitiesCompositeKey> {
	
	@Query("SELECT r FROM RoomAmenities r WHERE r.hotel_id = :hotel_id AND  r.room_number = :room_number")
    public List<RoomAmenities> findAmenitiesByHotelRoom(@Param("hotel_id") Integer hotel_id,@Param("room_number") Integer room_number);

}

package com.team.application.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.team.application.models.RoomAmenitiesCompositeKey;
import com.team.application.models.RoomAmenities;
public interface RoomAmenitiesRepository extends CrudRepository<RoomAmenities, RoomAmenitiesCompositeKey> {
	
	@Query("SELECT r FROM RoomAmenities r WHERE r.hotel_id = :hotel_id AND  r.room_number = :room_number")
    public List<RoomAmenities> findAmenitiesByHotelRoom(@Param("hotel_id") int hotel_id,@Param("room_number") int room_number);


}

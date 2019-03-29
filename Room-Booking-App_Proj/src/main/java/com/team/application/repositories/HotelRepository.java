package com.team.application.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.team.application.Unit;
import com.team.application.models.Hotel;

public interface HotelRepository extends CrudRepository<Hotel, Integer> {
	
	@Query("SELECT h.hotel_id FROM Hotel h WHERE h.street_name = :street_name AND h.street_number = :street_number AND h.city = :city AND h.state = :state AND h.country = :country")
    public int findHotelId(@Param("street_name") String street_name,@Param("street_number") int street_number,@Param("city") String city,@Param("state") String state,@Param("country") String country);

}

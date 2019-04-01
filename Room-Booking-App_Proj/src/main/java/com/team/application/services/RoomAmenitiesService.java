package com.team.application.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.team.application.models.Room;
import com.team.application.models.RoomAmenities;
import com.team.application.repositories.RoomAmenitiesRepository;
import com.team.application.repositories.room.RoomRepository;

@Service
public class RoomAmenitiesService {

	@Autowired
	private RoomAmenitiesRepository roomAmenitiesRepository;
	
	public List<RoomAmenities> getAllRoomAmenities(){
		List<RoomAmenities> results = new ArrayList();
		roomAmenitiesRepository.findAll().forEach(results :: add);
		return results;
	}
	
	public List<RoomAmenities> findAmenitiesByHotelRoom(int hotel_id,int room_number) {
		return roomAmenitiesRepository.findAmenitiesByHotelRoom(hotel_id,room_number);
	}
}

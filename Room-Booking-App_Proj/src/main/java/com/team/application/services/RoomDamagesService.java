package com.team.application.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.application.models.RoomDamages;
import com.team.application.repositories.RoomDamagesRepository;

@Service
public class RoomDamagesService {
	@Autowired
	private RoomDamagesRepository roomDamagesRepository;
	
	public List<RoomDamages> getAllRoomDamages(){
		List<RoomDamages> results = new ArrayList();
		roomDamagesRepository.findAll().forEach(results :: add);
		return results;
	}
	
	public List<RoomDamages> findDamagesByHotelRoom(int hotel_id,int room_number) {
		return roomDamagesRepository.findDamagesByHotelRoom(hotel_id,room_number);
	}
}

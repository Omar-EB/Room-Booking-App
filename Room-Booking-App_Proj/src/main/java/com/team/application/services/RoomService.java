package com.team.application.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.team.application.models.Room;
import com.team.application.repositories.room.RoomRepository;

@Service
public class RoomService {
	
	@Autowired
	private RoomRepository roomRepository;
	
	public List<Room> getAllRooms(){
		List<Room> results = new ArrayList();
		roomRepository.findAll().forEach(results :: add);
		return results;
	}
	
	public List<Room> findRoomsByHotelId(int id) {
		return roomRepository.findRoomsByHotelId(id);
	}
	
	public List<Room> findRoomsByQuery(int id,String state) {
		return roomRepository.roomQuery(0,state,null,id);
	}

}

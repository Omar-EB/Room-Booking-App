package com.team.application.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.application.models.Customer;
import com.team.application.models.Room;
import com.team.application.models.keys.RoomCompositeKey;
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
	
	public List<Room> findRoomsByHotelId(Integer id) {
		return roomRepository.findRoomsByHotelId(id);
	}
	
	public List<Room> findRoomsByQuery(String hc_name, String city, String state, String country, Integer rating, Integer capacity, Double price, Double area, Date start,Date end) {
		return roomRepository.roomQuery(hc_name,city,state,country,rating,capacity,price,area,start,end);
	}
	
	public List<Room> findRoomsInHotelByQuery(Integer hotel_id,Integer capacity, Double price, Double area, Date start,Date end){
		return roomRepository.roomsInHotelQuery(hotel_id,capacity,price,area,start,end);
	}

	public List<Room> findRoomById (Integer hotel_id, Integer room_number){
		try {
			List<Room> results = new ArrayList();
			RoomCompositeKey key = new RoomCompositeKey();
			key.setHotel_id(hotel_id);
			key.setRoom_number(room_number);
			results.add(roomRepository.findById(key).get());
			return results;
		} catch (NoSuchElementException exception) {
			return new ArrayList<Room>();
		}
	}
	
	public Room saveRoom(Room room) {
		return roomRepository.save(room);
	}
	
	public void deleteRoom (Integer hotel_id, Integer room_number) {
		RoomCompositeKey key = new RoomCompositeKey();
		key.setHotel_id(hotel_id);
		key.setRoom_number(room_number);
		roomRepository.deleteById(key);
	}
}

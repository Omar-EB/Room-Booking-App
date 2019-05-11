package com.team.application.repositories.room;

import java.util.Date;
import java.util.List;
import com.team.application.models.Room;

public interface RoomCustomRepository {
	public List<Room> roomQuery(String hc_name, String city, String state, String country, Integer rating, Integer capacity, Double price, Double area, Date start,Date end);

	public List<Room> roomsInHotelQuery(Integer hotel_id, Integer capacity, Double price, Double area, Date start,Date end);
}

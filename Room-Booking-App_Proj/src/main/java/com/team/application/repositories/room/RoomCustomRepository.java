package com.team.application.repositories.room;

import java.util.List;
import com.team.application.models.Room;

public interface RoomCustomRepository {
	public List<Room> roomQuery(double price, String state,String country,int hotel_id);
}

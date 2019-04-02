package com.team.application.repositories.room;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import com.team.application.models.Room;

@Repository
public class RoomCustomRepositoryImpl implements RoomCustomRepository{
	
	    @PersistenceContext
	    private EntityManager entityManager;

	    @SuppressWarnings("unchecked")
		public List<Room> roomQuery(double max_price, String state,String country, int hotel_id){
	    	String query = "Select room.* from room,hotel where room.hotel_id=hotel.hotel_id AND hotel.state=?;";
	    	Query q = entityManager.createNativeQuery(query,Room.class);
	    	q.setParameter(1, state);
	    	return (List<Room>) q.getResultList();
	    }
}

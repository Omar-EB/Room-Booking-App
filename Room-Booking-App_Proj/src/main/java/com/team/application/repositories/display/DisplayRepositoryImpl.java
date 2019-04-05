package com.team.application.repositories.display;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.team.application.models.Hotel;
import com.team.application.models.HotelChain;
@Repository
public class DisplayRepositoryImpl implements DisplayRepository {
	
	@PersistenceContext
    private EntityManager entityManager;
	
	@SuppressWarnings("unchecked")
	public List<Object[]> getCities(){
		String query = "SELECT hotel.city, hotel.state, hotel.country FROM hotel GROUP BY country,city,state ;";
		Query nativeQuery = entityManager.createNativeQuery(query);
		return (List<Object[]>) nativeQuery.getResultList();
	}
	
	@SuppressWarnings("unchecked")
	public List<Object> getHotelChainNames(){
		String query = "SELECT hotelchain.hc_name FROM hotelchain ;";
		Query nativeQuery = entityManager.createNativeQuery(query);
		return (List<Object>) nativeQuery.getResultList();
	}
}

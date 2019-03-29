package com.team.application.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.team.application.models.Hotel;
import com.team.application.models.HotelChain;
import com.team.application.repositories.HotelRepository;

@Service
public class HotelService {
	
	@Autowired
	private HotelRepository hotelRepository;
	
	public List<Hotel> getAllHotels(){
		List<Hotel> results = new ArrayList();
		hotelRepository.findAll().forEach(results :: add);
		return results;
	}
	
	public int getHotelId(String street_name,int street_number,String city,String state,String country) {
		return hotelRepository.findHotelId(street_name,street_number,city,state,country);
	}

}

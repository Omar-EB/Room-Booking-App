package com.team.application.services;

import com.team.application.repositories.HotelChainRepository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.application.Unit;
import com.team.application.models.HotelChain;

@Service
public class HotelChainService {
	
	@Autowired
	private HotelChainRepository hotelChainRepository;
	
	public List<HotelChain> getAllHotelChains(){
		List<HotelChain> results = new ArrayList();
		hotelChainRepository.findAll().forEach(results :: add);
		return results;
	}
	
	public List<HotelChain> getHotelChain(String hc_name) {
		List<HotelChain> result = new ArrayList();
		result.add(hotelChainRepository.findById(hc_name).get());
		return result;
	}

}

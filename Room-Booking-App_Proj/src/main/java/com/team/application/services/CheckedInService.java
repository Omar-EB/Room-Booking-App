package com.team.application.services;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.application.models.CheckedIn;
import com.team.application.repositories.CheckedInRepository;

@Service
public class CheckedInService {
	
	@Autowired
	private CheckedInRepository checkedInRepository;
	
	public List<CheckedIn> getAllCheckIns(){
		List<CheckedIn> results = new ArrayList();
		checkedInRepository.findAll().forEach(results :: add);
		return results;
	}
	
	public List<CheckedIn> findCheckInsByRoom(Integer hotel_id,Integer room_number){
		return checkedInRepository.findCheckInsByRoom(hotel_id,room_number);
	}
}
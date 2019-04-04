package com.team.application.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.team.application.models.ReservationsArchive;
import com.team.application.repositories.ReservationsArchiveRepository;

@Service
public class ReservationsArchiveService {
	
	@Autowired
	private ReservationsArchiveRepository reservationsArchiveRepository;
	
	List<ReservationsArchive> findArchivesByRoom(Integer hotel_Id,Integer room_number){
		return reservationsArchiveRepository.findArchivesByRoom(hotel_Id, room_number);
	}

}

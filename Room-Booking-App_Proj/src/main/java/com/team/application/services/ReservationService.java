package com.team.application.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.application.models.Reservation;
import com.team.application.repositories.ReservationReposirtory;

@Service
public class ReservationService {
	
	@Autowired
	private ReservationReposirtory reservationRepository;
	
	public List<Reservation> getAllReservations(){
		List<Reservation> results = new ArrayList();
		reservationRepository.findAll().forEach(results :: add);
		return results;
	}
	
	public List<Reservation> findReservationsByHotelId(Integer id) {
		return reservationRepository.findReservationsByHotelId(id);
	}
	
	public List<Reservation> findReservationsByRoomlId(Integer hotel_id,Integer room_number) {
		return reservationRepository.findReservationsByRoom(hotel_id,room_number);
	}

}

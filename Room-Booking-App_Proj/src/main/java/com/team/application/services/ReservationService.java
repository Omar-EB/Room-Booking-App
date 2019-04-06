package com.team.application.services;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.application.models.Customer;
import com.team.application.models.Reservation;
import com.team.application.models.Room;
import com.team.application.models.keys.ReservationCompositeKey;
import com.team.application.repositories.ReservationRepository;

@Service
public class ReservationService {
	
	@Autowired
	private ReservationRepository reservationRepository;
	
	
	public List<Reservation> getAllReservations(){
		List<Reservation> results = new ArrayList();
		reservationRepository.findAll().forEach(results :: add);
		return results;
	}
	
	public List<Reservation> findReservationsByHotelId(Integer id) {
		return reservationRepository.findReservationsByHotelId(id);
	}
	
	public List<Reservation> findReservationsByRoomId(Integer hotel_id,Integer room_number) {
		return reservationRepository.findReservationsByRoom(hotel_id,room_number);
	}
	
	public List<Reservation> findReservationsById(ReservationCompositeKey key) {
		List<Reservation> result = new ArrayList();
		result.add( reservationRepository.findById(key).get());
		return result;
	}
	
	public Reservation reserveRoom( Integer hotel_id,
									Integer room_number,
									String customer_sin,
									String given_name,
									String family_name,
									String street_name,
								    Integer street_number,
								    String city,
								    String state,
								    String country,
								    Date start_date,
								    Date end_date ,
								    CustomerService customerService,
								    RoomService roomService
								    ) throws ParseException 
	{
		
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
        format.setTimeZone(TimeZone.getTimeZone("UTC"));
        
	    Customer customer;
	    if(customerService.findCustomerbyId(customer_sin).size()==0) {
	    	customer = new Customer(customer_sin, given_name, family_name, street_name, street_number, city, state, country);
	    	customer = customerService.addCustomer(customer);
	    } else {
	    	customer = customerService.findCustomerbyId(customer_sin).get(0);
	    }
		Room room = roomService.findRoomById(hotel_id, room_number).get(0);
	    Reservation reservation = new Reservation();
	    reservation.setHotel_id(hotel_id);
	    reservation.setRoom_number(room_number);
	    reservation.setCustomer(customer);
	    reservation.setRoom(room);
	    //WARNING:
	    //date.getYear() returns # of years since 1900
	    //date.getMonth() returns months index starting from 0 (ie Jan is 0 , March is 2 ..)
	  	//additions below necessary for date creation through parser
	  	reservation.setStart_date(format.parse((1900+start_date.getYear())+"-"+(1+start_date.getMonth())+"-"+start_date.getDate()+"T"+start_date.getHours()+":"+start_date.getMinutes()+":"+start_date.getSeconds()));
	  	reservation.setEnd_date(format.parse((1900+end_date.getYear())+"-"+(1+end_date.getMonth())+"-"+end_date.getDate()+"T"+end_date.getHours()+":"+end_date.getMinutes()+":"+end_date.getSeconds()));
	    return reservationRepository.save(reservation);
	} 

}

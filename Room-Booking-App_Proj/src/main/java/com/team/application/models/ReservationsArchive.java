package com.team.application.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="reservationsarchive")
public class ReservationsArchive {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String hc_name;
	private Integer hotel_id;
	private Integer room_number;
	@Temporal(TemporalType.TIMESTAMP)
	private Date start_date;
	@Temporal(TemporalType.TIMESTAMP)
	private Date end_date;
	private String customer_sin;
	private String employee_sin;
	
	//true for booking, false for renting, default renting
	private Boolean reservation_type;

	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getHc_name() {
		return hc_name;
	}

	public void setHc_name(String hc_name) {
		this.hc_name = hc_name;
	}

	public Integer getHotel_id() {
		return hotel_id;
	}

	public void setHotel_id(Integer hotel_id) {
		this.hotel_id = hotel_id;
	}

	public Integer getRoom_number() {
		return room_number;
	}

	public void setRoom_number(Integer room_number) {
		this.room_number = room_number;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public String getCustomer_sin() {
		return customer_sin;
	}

	public void setCustomer_sin(String customer_sin) {
		this.customer_sin = customer_sin;
	}

	public String getEmployee_sin() {
		return employee_sin;
	}

	public void setEmployee_sin(String employee_sin) {
		this.employee_sin = employee_sin;
	}

	public Boolean getReservation_type() {
		return reservation_type;
	}

	public void setReservation_type(Boolean reservation_type) {
		this.reservation_type = reservation_type;
	}

}

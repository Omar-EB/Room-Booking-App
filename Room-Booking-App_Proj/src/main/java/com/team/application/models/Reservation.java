package com.team.application.models;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.team.application.models.keys.ReservationCompositeKey;


@Entity
@Table(name="reservation")
@IdClass(ReservationCompositeKey.class)
public class Reservation {
	
	@Id
	private Integer hotel_id;
	
	@Id
	private Integer room_number;
	@Id
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "start_date")
	private Date start_date;
	
	@Id
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "end_date")
	private Date end_date;
	
	@ManyToOne(optional = false)
	@JoinColumn(name = "customer_sin",referencedColumnName="sin", nullable = false) 
	private Customer customer;
	
	//true for booking, false for renting, default renting
	private Boolean reservation_type;
	
	@MapsId("room_number")
	@ManyToOne(optional = false)
	@JoinColumns({
		@JoinColumn(name = "hotel_id", nullable = false),
		@JoinColumn(name = "room_number", nullable = false) })	
	private Room room;
	
	// One to Many due to Database design mistake, future fix to make it One to One (must add joined columns in this case)
	@MapsId
	@OneToMany(mappedBy="reservation",fetch = FetchType.LAZY,cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<CheckedIn> check_ins;

	
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

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Boolean getReservation_type() {
		return reservation_type;
	}

	public void setReservation_type(Boolean reservation_type) {
		this.reservation_type = reservation_type;
	}

	public Room getRoom() {
		return room;
	}

	public void setRoom(Room room) {
		this.room = room;
	}

}
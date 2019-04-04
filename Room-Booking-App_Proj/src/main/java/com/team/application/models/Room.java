package com.team.application.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.team.application.models.keys.RoomCompositeKey;

@Entity
@Table(name = "room")
//@JsonInclude(Include.NON_NULL)
public class Room {
	
	@EmbeddedId
	private RoomCompositeKey room_id;
	
	@MapsId("hotel_id")
	@ManyToOne(optional = false)
	@JoinColumn(name = "hotel_id", nullable = false) 
	private Hotel hotel;
	
    private String view_type;
    private Integer capacity;
    Double price;
    Boolean extendable;
    Double area;
    
	@OneToMany(mappedBy="room",fetch = FetchType.LAZY,cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<RoomAmenities> amenities = new ArrayList<>();
	
	@OneToMany(mappedBy="room",fetch = FetchType.LAZY,cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<RoomDamages> damages = new ArrayList<>();
	
	@OneToMany(mappedBy="room",fetch = FetchType.LAZY,cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Reservation> reservations = new ArrayList<>();
    
	public RoomCompositeKey getRoom_id() {
		return room_id;
	}
	public void setRoom_id(RoomCompositeKey room_id) {
		this.room_id = room_id;
	}
	public Hotel getHotel() {
		return hotel;
	}
	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}
	public String getView_type() {
		return view_type;
	}
	public void setView_type(String view_type) {
		this.view_type = view_type;
	}
	public Integer getCapacity() {
		return capacity;
	}
	public void setCapacity(Integer capacity) {
		this.capacity = capacity;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public Boolean isExtendable() {
		return extendable;
	}
	public void setExtendable(Boolean extendable) {
		this.extendable = extendable;
	}
	public Double getArea() {
		return area;
	}
	public void setArea(Double area) {
		this.area = area;
	}
}

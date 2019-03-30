package com.team.application.models;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

@Entity
@Table(name = "room")
public class Room {
	
	@EmbeddedId
	private RoomCompositeKey room_id;
	
	/*
	 THIS MADE IT WORK
	 @MapsId("hotel_id")
	  @ManyToOne(optional = false)
	  @JoinColumns(value = {
	          @JoinColumn(name = "hotel_id", referencedColumnName = "hotel_id") }) 
	 * */
	
/*	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "hotel_id", nullable = false) */
	
	@MapsId("hotel_id")
	@ManyToOne(optional = false)
	@JoinColumn(name = "hotel_id", nullable = false) 
	private Hotel hotel;
	
    private String view_type;
    private int capacity;
    double price;
    boolean extendable;
    double area;
    
    
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
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public boolean isExtendable() {
		return extendable;
	}
	public void setExtendable(boolean extendable) {
		this.extendable = extendable;
	}
	public double getArea() {
		return area;
	}
	public void setArea(double area) {
		this.area = area;
	}
	
}

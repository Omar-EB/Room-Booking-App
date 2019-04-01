package com.team.application.models;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

//@JsonInclude(Include.NON_NULL)
@Entity
@Table(name = "roomamenities")
@IdClass(RoomAmenitiesCompositeKey.class)
public class RoomAmenities {
	
	/*@EmbeddedId
	private RoomAmenitiesCompositeKey room_amenity_Id;*/
	@Id
	private Integer hotel_id;
	@Id
	private Integer room_number;
	@Id
	private String amenity;
	
	@MapsId("room_number")
	@ManyToOne(optional = false)
	@JoinColumns({
			@JoinColumn(name = "hotel_id", nullable = false),
			@JoinColumn(name = "room_number", nullable = false) })
	private Room room;


/*	public RoomAmenitiesCompositeKey getRoom_amenity_Id() {
		return room_amenity_Id;
	}

	public void setRoom_amenity_Id(RoomAmenitiesCompositeKey room_amenity_Id) {
		this.room_amenity_Id = room_amenity_Id;
	} */

	public Room getRoom() {
		return room;
	}

	public void setRoom(Room room) {
		this.room = room;
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

	public String getAmenity() {
		return amenity;
	}

	public void setAmenity(String amenity) {
		this.amenity = amenity;
	}

}

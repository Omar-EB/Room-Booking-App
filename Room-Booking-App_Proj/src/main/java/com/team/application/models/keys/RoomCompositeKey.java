package com.team.application.models.keys;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class RoomCompositeKey implements Serializable {

	private static final long serialVersionUID = 1L;
	//private static final long serialVersionUID = -6186756438480671973L;
	
	private Integer hotel_id;
	private Integer room_number;
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

}

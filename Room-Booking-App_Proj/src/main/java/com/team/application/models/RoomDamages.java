package com.team.application.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;


@Entity
@Table(name = "roomdamages")
@IdClass(RoomDamagesCompositeKey.class)
public class RoomDamages {
	
	@Id
	private Integer hotel_id;
	@Id
	private Integer room_number;
	@Id
	private String damage;
	
	@MapsId("room_number")
	@ManyToOne(optional = false)
	@JoinColumns({
			@JoinColumn(name = "hotel_id", nullable = false),
			@JoinColumn(name = "room_number", nullable = false) })
	private Room room;

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

	public String getDamage() {
		return damage;
	}

	public void setDamage(String damage) {
		this.damage = damage;
	}

}

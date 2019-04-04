package com.team.application.models.keys;

import java.io.Serializable;


public class RoomAmenitiesCompositeKey implements Serializable {

	
	private static final long serialVersionUID = 1L;
	
	private Integer hotel_id;
	private Integer room_number;
	private String amenity;

	public RoomAmenitiesCompositeKey() {}

	public RoomAmenitiesCompositeKey(Integer hotel_id, Integer room_number, String amenity) {
		super();
		this.hotel_id = hotel_id;
		this.room_number = room_number;
		this.amenity = amenity;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((amenity == null) ? 0 : amenity.hashCode());
		result = prime * result + ((hotel_id == null) ? 0 : hotel_id.hashCode());
		result = prime * result + ((room_number == null) ? 0 : room_number.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		RoomAmenitiesCompositeKey other = (RoomAmenitiesCompositeKey) obj;
		if (amenity == null) {
			if (other.amenity != null)
				return false;
		} else if (!amenity.equals(other.amenity))
			return false;
		if (hotel_id == null) {
			if (other.hotel_id != null)
				return false;
		} else if (!hotel_id.equals(other.hotel_id))
			return false;
		if (room_number == null) {
			if (other.room_number != null)
				return false;
		} else if (!room_number.equals(other.room_number))
			return false;
		return true;
	}
}

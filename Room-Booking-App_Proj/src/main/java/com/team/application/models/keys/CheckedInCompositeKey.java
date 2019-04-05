package com.team.application.models.keys;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
public class CheckedInCompositeKey implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Integer hotel_id;
	
	private Integer room_number;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date start_date;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date end_date;
	
	private String employee_sin;

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((employee_sin == null) ? 0 : employee_sin.hashCode());
		result = prime * result + ((end_date == null) ? 0 : end_date.hashCode());
		result = prime * result + ((hotel_id == null) ? 0 : hotel_id.hashCode());
		result = prime * result + ((room_number == null) ? 0 : room_number.hashCode());
		result = prime * result + ((start_date == null) ? 0 : start_date.hashCode());
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
		CheckedInCompositeKey other = (CheckedInCompositeKey) obj;
		if (employee_sin == null) {
			if (other.employee_sin != null)
				return false;
		} else if (!employee_sin.equals(other.employee_sin))
			return false;
		if (end_date == null) {
			if (other.end_date != null)
				return false;
		} else if (!end_date.equals(other.end_date))
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
		if (start_date == null) {
			if (other.start_date != null)
				return false;
		} else if (!start_date.equals(other.start_date))
			return false;
		return true;
	}
	
}

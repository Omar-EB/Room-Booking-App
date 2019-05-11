package com.team.application.models;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.hibernate.annotations.Parameter;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.team.application.models.keys.CheckedInCompositeKey;


@Entity
@Table(name="checkedin")
@IdClass(CheckedInCompositeKey.class)
public class CheckedIn {

	@Id
	private Integer hotel_id;
	
	@Id
	private Integer room_number;
	
	@Id
	@Temporal(TemporalType.TIMESTAMP)
	private Date start_date;
	
	//@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
	@Id
	@Temporal(TemporalType.TIMESTAMP)
	private Date end_date;
	
	@Id
	private String employee_sin;

	// Many to One due to Database design mistake, future fix to make it One to One (leave joined columns)
    @MapsId
    @ManyToOne(optional = false)
	@JoinColumns({
		@JoinColumn(name = "hotel_id", nullable = false),
		@JoinColumn(name = "room_number", nullable = false),
		@JoinColumn(name = "start_date", nullable = false),
		@JoinColumn(name = "end_date", nullable = false)
	})
	private Reservation reservation;
	
	@MapsId//("employee_sin")
	@ManyToOne(fetch = FetchType.LAZY,optional=false)
    @JoinColumn(name = "employee_sin", nullable = false)
	//@PrimaryKeyJoinColumn
	private Employee employee;
	
	private Double payment;

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
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

	public Reservation getReservation() {
		return reservation;
	}

	public void setReservation(Reservation reservation) {
		this.reservation = reservation;
	}

	public Double getPayment() {
		return payment;
	}

	public void setPayment(Double payment) {
		this.payment = payment;
	}

	public String getEmployee_sin() {
		return employee_sin;
	}

	public void setEmployee_sin(String employee_sin) {
		this.employee_sin = employee_sin;
	}

}

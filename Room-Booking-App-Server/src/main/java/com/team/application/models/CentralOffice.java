package com.team.application.models;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.team.application.models.keys.CentralOfficeCompositeKey;

@Entity
@Table(name = "centraloffice")
public class CentralOffice {

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "hc_name", nullable = false)
	private HotelChain hotelChain;

	@EmbeddedId
	private CentralOfficeCompositeKey central_office_id;

	private String phone_number;
	private String email_address;

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

	public String getEmail_address() {
		return email_address;
	}

	public void setEmail_address(String email_address) {
		this.email_address = email_address;
	}

	public HotelChain getHotelChain() {
		return hotelChain;
	}

	public void setHotelChain(HotelChain hotelChain) {
		this.hotelChain = hotelChain;
	}

	public CentralOfficeCompositeKey getCentral_office_id() {
		return central_office_id;
	}

	public void setCentral_office_id(CentralOfficeCompositeKey central_office_id) {
		this.central_office_id = central_office_id;
	}

}

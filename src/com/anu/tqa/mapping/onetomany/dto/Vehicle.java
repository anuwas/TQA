package com.anu.tqa.mapping.onetomany.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vehicle {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private int vehicleId;
private String vehichlename;

public int getVehicleId() {
	return vehicleId;
}
public void setVehicleId(int vehicleId) {
	this.vehicleId = vehicleId;
}
public String getVehichlename() {
	return vehichlename;
}
public void setVehichlename(String vehichlename) {
	this.vehichlename = vehichlename;
}

}

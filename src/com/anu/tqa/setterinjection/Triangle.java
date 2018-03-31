package com.anu.tqa.setterinjection;

public class Triangle {
	
	private String type;
	
	public void setType(String type) {
		this.type = type;
	}
	
	public String getType() {
		return type;
	}
	

	public void draw() {
		System.out.println("Triangle Draw ,Type "+getType() );
	}
	
}

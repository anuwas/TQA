package com.anu.tqa.autowireannotation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;

public class Circle implements Shape{

	private Point center;
	
	public Point getPoint() {
		return center;
	}

	@Autowired
	public void setPoint(Point center) {
		this.center = center;
	}

	@Override
	public void draw() {
		System.out.println("Drawing Circle ");
		System.out.println("Center of the cirecle is X "+center.getPointX()+", Y "+center.getPointY());
		
	}
}

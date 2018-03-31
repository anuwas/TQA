package com.anu.tqa.implementinginterface;

public class Circle implements Shape{

	private Point center;
	
	public Point getPoint() {
		return center;
	}

	public void setPoint(Point center) {
		this.center = center;
	}

	@Override
	public void draw() {
		System.out.println("Drawing Circle ");
		System.out.println("Center of the cirecle is X "+center.getPointX()+", Y "+center.getPointY());
		
	}

}

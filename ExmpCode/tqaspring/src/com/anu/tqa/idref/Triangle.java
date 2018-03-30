package com.anu.tqa.idref;

public class Triangle {
	
	private Point pointA;
	private Point pointB;
	private Point pointC;
	
	public Point getPointA() {
		return pointA;
	}

	public void setPointA(Point pointA) {
		this.pointA = pointA;
	}

	public Point getPointB() {
		return pointB;
	}
	
	public void setPointB(Point pointB) {
		this.pointB = pointB;
	}

	public Point getPointC() {
		return pointC;
	}
	
	public void setPointC(Point pointC) {
		this.pointC = pointC;
	}

	public void draw() {
		System.out.println("Triangle Draw ,"
				+ " Point A "+getPointA().getPointX()+","+getPointA().getPointY()
				+ ", Pint B "+getPointB().getPointX()+", "+getPointB().getPointY()
				+ ", Point C "+getPointC().getPointX()+", "+ getPointC().getPointY());
	}
	
}

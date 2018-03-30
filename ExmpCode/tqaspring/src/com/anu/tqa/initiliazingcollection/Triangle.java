package com.anu.tqa.initiliazingcollection;

import java.util.List;

public class Triangle {
	
	private List<Point> points;

	public List<Point> getPoints() {
		return points;
	}

	public void setPoints(List<Point> points) {
		this.points = points;
	}

	public void draw() {
		for(Point pointObj : points) {
			System.out.println("Triangle Draw ,"
					+ " Point "+pointObj.getPointX()+","+pointObj.getPointY());
		}	
	}
}

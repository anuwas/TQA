package com.anu.tqa.componentannotation;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Component;

@Component
public class Circle implements Shape{

	private Point center;
	
	public Point getPoint() {
		return center;
	}

	@Resource
	public void setPoint(Point center) {
		this.center = center;
	}

	@Override
	public void draw() {
		System.out.println("Drawing Circle ");
		System.out.println("Center of the cirecle is X "+center.getPointX()+", Y "+center.getPointY());
		
	}

}

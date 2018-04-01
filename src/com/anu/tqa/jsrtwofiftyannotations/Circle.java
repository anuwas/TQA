package com.anu.tqa.jsrtwofiftyannotations;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Required;

public class Circle implements Shape{

	private Point center;
	
	public Point getPoint() {
		return center;
	}

	@Resource(name="pint2")
	public void setPoint(Point center) {
		this.center = center;
	}

	@Override
	public void draw() {
		System.out.println("Drawing Circle ");
		System.out.println("Center of the cirecle is X "+center.getPointX()+", Y "+center.getPointY());
		
	}
	
	@PostConstruct
	public void initializeCircle() {
		System.out.println("Circle initializing .. ");
	}
	
	@PreDestroy
	public void destroyCircle() {
		System.out.println("Circle Destroing .. ");
	}
}

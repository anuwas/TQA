package com.anu.tqa.lifecyclecallbacks;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

public class Triangle implements InitializingBean,DisposableBean{
	
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

	@Override
	public void afterPropertiesSet() throws Exception {
		System.out.println("Bean Initializing ..Init method called for Triangle");
	}

	@Override
	public void destroy() throws Exception {
		System.out.println("Destroy method called for Triangle");
		
	}
	
	public void myInit() {
		System.out.println("Bean Initializing ..Init method called for Triangle");
	}
	
	
	public void myDestory() {
		System.out.println("Destroy method called for Triangle");
	}
}

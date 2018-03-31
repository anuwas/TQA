package com.anu.tqa.applicationcontextaware;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

public class Triangle implements ApplicationContextAware,BeanNameAware{
	
	private Point pointA;
	private Point pointB;
	private Point pointC;
	private ApplicationContext context = null;
	
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
	public void setApplicationContext(ApplicationContext context) throws BeansException {
		this.context = context;
		
	}

	@Override
	public void setBeanName(String beanName) {
		System.out.println("Bean Name is "+beanName);
		
	}
	
}

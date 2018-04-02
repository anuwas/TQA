package com.anu.tqa.messageresource;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Component
public class Circle implements Shape{

	private Point center;
	@Autowired
	private MessageSource messageSource;
	
	public MessageSource getMessageSource() {
		return messageSource;
	}

	public void setMessageSource(MessageSource messageSource) {
		this.messageSource = messageSource;
	}

	
	
	public Point getPoint() {
		return center;
	}

	@Resource
	public void setPoint(Point center) {
		this.center = center;
	}

	@Override
	public void draw() {
		System.out.println(this.messageSource.getMessage("drawing.circle", null, "Default Greeting",null));
		System.out.println(this.messageSource.getMessage("drawing.point", new Object[] {center.getPointX(),center.getPointY()}, "Default Greeting",null));
		System.out.println(this.messageSource.getMessage("greeting", null, "Default Greeting",null));
	}
}

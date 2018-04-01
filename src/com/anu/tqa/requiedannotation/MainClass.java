package com.anu.tqa.requiedannotation;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainClass {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("bean.xml");
		Shape shape = (Shape) context.getBean("circle");
		shape.draw();
	}
}

package com.anu.tqa.beandefinitioninheritance;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainClass {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("bean.xml");
		Triangle triangle = (Triangle) context.getBean("triangle1");
		triangle.draw();
	}
}

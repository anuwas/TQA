package com.anu.tqa.messageresource;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainClass {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("bean.xml");
		Shape shape = (Shape) context.getBean("circle");
		shape.draw();
		//differents signature are here
		//1. name of the property
		//2. If any parameter avalibe in preperty file
		//3. Default Message 
		//4. Local
		//System.out.print(context.getMessage("greeting", null, "Default Greeting",null));
	}
}

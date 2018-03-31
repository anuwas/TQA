package com.anu.tqa.lifecyclecallbacks;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainClass {
	public static void main(String[] args) {
		AbstractApplicationContext context = new ClassPathXmlApplicationContext("bean.xml");
		//Application will be shout down after execution
		context.registerShutdownHook();
		
		Triangle triangle = (Triangle) context.getBean("triangle");
		triangle.draw();
	}
}



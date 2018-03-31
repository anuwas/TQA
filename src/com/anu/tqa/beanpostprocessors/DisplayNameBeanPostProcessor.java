package com.anu.tqa.beanpostprocessors;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;

public class DisplayNameBeanPostProcessor implements BeanPostProcessor{

	//this method called after initializing
	//first argument is bean itself and second argument is string
	@Override
	public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
		System.out.println("After bean Initialization , Bean "+beanName);
		return bean;
	}

	//This method called before initializing 
	//first argument is bean itself and second argument is string
	@Override
	public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
		System.out.println("Before bean Initialization , Bean "+beanName);
		return bean;
	}

}

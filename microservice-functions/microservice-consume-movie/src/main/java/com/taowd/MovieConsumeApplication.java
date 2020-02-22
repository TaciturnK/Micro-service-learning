package com.taowd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

/**
 * @author Taoweidong <br/>
 * @RibbonClient 启动Ribbon客户端负载均衡功能 参数name可指定微服务进行负载均衡 // 注意：Feign中已经包含Ribbon此处不用专门开启Ribbon功能<br/>
 * @EnableHystrix
 */
@SpringBootApplication
@EnableEurekaClient
@EnableFeignClients
public class MovieConsumeApplication {

  /**
   * 主函数
   * 
   * @param args
   */
  public static void main(String[] args) {

    SpringApplication.run(MovieConsumeApplication.class, args);
  }
}

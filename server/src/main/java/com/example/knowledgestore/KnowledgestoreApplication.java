package com.example.knowledgestore;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@MapperScan("com.example.knowledgestore.mapper")
public class KnowledgestoreApplication {

    public static void main(String[] args) {
        SpringApplication.run(KnowledgestoreApplication.class, args);
    }

}

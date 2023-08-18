### 说明
使用 **Koa** + **mysql2** 实现对用户增删改查的接口demo


### 一. 创建数据库
    CREATE DATABASE `coderhub`

### 二. 创建表
    CREATE TABLE `user` (
      `id` int NOT NULL AUTO_INCREMENT,
      `name` varchar(30) NOT NULL,
      `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
      `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
      `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (`id`),
      UNIQUE KEY `name` (`name`)
    )
# koa2teastore

#### 介绍
茶好喝之后端开发

#### 软件架构
软件架构说明
- 框架选型：koa2
- 数据库选型：mysql
- 登录技术：session
- 缓存数据库：redis
- 单元测试：jest

#### 数据库设计

- 用户表 user

|  column  |  datatype   | pk 主键 | nn 不为空 | 自动增加 |
| :------: | :---------: | :-----: | :-------: | :------: |
|    id    |     int     |    Y    |     Y     |    Y     |
| username | varchar(20) |         |     Y     |          |
|  phone   | varchar(20) |         |     Y     |          |

- 地址表 address

|   column    |  datatype   | pk 主键 | nn 不为空 | 自动增加 |
| :---------: | :---------: | :-----: | :-------: | :------: |
|     id      |     int     |    Y    |     Y     |    Y     |
| addressinfo | varchar(50) |         |     Y     |          |
|  consignee  | varchar(20) |         |     Y     |          |
|    phone    | varchar(20) |         |     Y     |          |
|   userid    |     int     |         |     Y     |          |

- 商品表 product

| column |  datatype   | pk 主键 | nn 不为空 | 自动增加 |
| :----: | :---------: | :-----: | :-------: | :------: |
|   id   |     int     |    Y    |     Y     |    Y     |
|  name  | varchar(20) |         |     Y     |          |
|  type  | varchar(20) |         |     Y     |          |
| price  |     int     |         |     Y     |          |
| imgurl | varchar(50) |         |     Y     |          |

- 订单表 order

|    column    |  datatype   | pk 主键 | nn 不为空 | 自动增加 |
| :----------: | :---------: | :-----: | :-------: | :------: |
|      id      |     int     |    Y    |     Y     |    Y     |
| creationtime |  DATETIME   |         |     Y     |          |
|    status    |     int     |         |     Y     |          |
|  delstatus   |     int     |         |     Y     |          |
| temperature  | varchar(20) |         |     Y     |          |
|  sweetness   | varchar(20) |         |     Y     |          |
|  productid   |     int     |         |     Y     |          |
|    userid    |     int     |         |     Y     |          |

- 购物车表 cart [存储在localStorage中]

|   column    |  datatype   | pk 主键 | nn 不为空 | 自动增加 |
| :---------: | :---------: | :-----: | :-------: | :------: |
|     id      |     int     |    Y    |     Y     |    Y     |
| temperature | varchar(20) |         |     Y     |          |
|  sweetness  | varchar(20) |         |     Y     |          |
|  productid  |     int     |         |     Y     |          |
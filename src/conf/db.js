/**
 * @description 存储配置
 */
const { isProd } = require('../utils/env')

// redis 配置
let REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1'
}

 // mysql 配置
let MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'teastore'
}

if (isProd) {
  // redis 线上配置
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }
  // mysql 线上配置
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'teastore'
  }
}

if (env === 'production') {
  // 只是模拟线上环境，实际项目时，应该写上实际线上的配置
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'myblog'
  }

}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF
}
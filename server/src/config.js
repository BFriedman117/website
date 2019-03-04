module.exports = {
  port: 3000,
  db: {
    database: process.env.DB_NAME || 'website',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'website',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost'
    }
  }
}

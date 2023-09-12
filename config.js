const dotenv = require('dotenv');

try {
  dotenv.config({
    path: process.env.NODE_ENV === 'development' ? '.env.config' : undefined
  });
} catch (err) {
  console.error('Error loading environment variables:', err);
  process.exit(1); // Optionally, you can terminate the application if the environment variables couldn't be loaded.
}

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 4000,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE || 'landing_page_db',
  MYSQL_USERNAME: process.env.MYSQL_USERNAME || 'root',
  MYSQL_ROOT_PASSWORD: process.env.MYSQL_ROOT_PASSWORD || 'Adaeze34567890',
  MYSQL_HOST: process.env.MYSQL_HOST || 'localhost',
  MYSQL_STORE_COLLECTION:process.env.MYSQL_STORE_COLLECTION || 'mySessions',
  MYSQL_PORT:process.env.MYSQL_PORT || 3306,
  MYSQL_STORE_SECRET_KEY:process.env.MYSQL_STORE_SECRET_KEY || '3456',
  STMP_HOST:process.env.STMP_HOST || 'smtp-mail.outlook.com',
  STMP_PORT:process.env.STMP_PORT||587,
  SMTP_USER:process.env.SMTP_USER || 'chisom.ozowara@manifoldcomputers.com',
  SMTP_PASS:process.env.SMTP_PASS || 'Adaeze123@@',
  EMAIL_FROM:process.env.EMAIL_FROM || 'chisom.ozowara@manifoldcomputers.com',
  ACCESS_TOKEN_PRIVATE_KEY:process.env.ACCESS_TOKEN_PRIVATE_KEY||'dd26dcb5d27b1a7c9aaac9ad06d4140d79bd53a670657d8eccc252a633dbab1ea69ed319b360c72fe7255348c01be4ab25ce0e51c5efb3295d259b19aa818085',
  REFRESH_TOKEN_PRIVATE_KEY:process.env.REFRESH_TOKEN_PRIVATE_KEY||'1b1e1908ba2c9089587c8e02a100c67e11e4fcddf44a6553e7a49c94c48af60a19b8d67110cc476fc3cde7aa6eba0864e8f8a7ca62e53094ab97ee45629f8e62',
  BASE_URL:process.env.BASE_URL||' http://192.168.205.49:3000',
  EMAIL_VERIFICATION_TOKEN:process.env.EMAIL_VERIFICATION_TOKEN||'becfea1d7b6897c95b73a01007ce82f1d3c1862c9159d0e18b3b66bc7dcc1173d69a1c776656844952f9681370061aeb0e4193af51e6576e378b94d919e93d43e239d4a428a1732d42d0b365d859399633a1e6b80ac9f0f105574d9f8dbd01b5eacbecc26a6e4259006eade42c0481c16ad3aedfc16f4244d361e603b62c7b7b',
  RESET_PASSWORD_TOKEN:process.env.RESET_PASSWORD_TOKEN||'34cd3bdfb577cb5bc911f14c8f55e112fe1e47d43d7b959a399e5801b441c186ef84a94e046161e2f99bda12bdde0cceee1fcb3a4282eef82b1a865c90163f16'
};

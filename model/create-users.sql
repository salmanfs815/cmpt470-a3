CREATE TABLE IF NOT EXISTS users (
  userId INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  address VARCHAR(50),
  phone VARCHAR(15)
);
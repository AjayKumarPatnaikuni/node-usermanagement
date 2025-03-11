-- Create the database if it does not exist
CREATE DATABASE IF NOT EXISTS usermanagement;

-- Use the database
USE my_database;

-- Create a users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Insert dummy data
INSERT INTO users (username, password) VALUES 
('admin', 'admin123'),
('testuser', 'testpassword');

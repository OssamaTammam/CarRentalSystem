-- Create DB only if it doesn't exist
CREATE DATABASE IF NOT EXISTS car_rental_system;
USE car_rental_system;
-- Create tables
CREATE TABLE car(
    plate_id BIGINT NOT NULL,
    model VARCHAR(50) NOT NULL,
    year INT NOT NULL,
    price_per_day FLOAT NOT NULL,
    status ENUM("Active", "Out of Service", "Rented") NOT NULL,
    office_id BIGINT NOT NULL,
    PRIMARY KEY (plate_id)
);
CREATE TABLE car_specs(
    plate_id BIGINT NOT NULL,
    color VARCHAR(20) NOT NULL,
    horse_power INT NOT NULL,
    PRIMARY KEY (plate_id)
);
CREATE TABLE office(
    office_id BIGINT AUTO_INCREMENT NOT NULL,
    location VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    PRIMARY KEY (office_id)
);
CREATE TABLE reservation(
    reservation_id BIGINT AUTO_INCREMENT NOT NULL,
    plate_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    office_id BIGINT NOT NULL,
    reservation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    pickup_date DATE NOT NULL,
    return_date DATE NOT NULL,
    price FLOAT NOT NULL,
    payment_status ENUM("Paid", "Unpaid") NOT NULL,
    PRIMARY KEY (reservation_id)
);
CREATE TABLE user(
    user_id BIGINT AUTO_INCREMENT NOT NULL,
    username VARCHAR(50) NOT NULL,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    birth_date DATE NOT NULL,
    address VARCHAR(255) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    role ENUM("Admin", "User") DEFAULT "User" NOT NULL,
    jwt VARCHAR(255) NULL,
    PRIMARY KEY (user_id)
);
-- Adding foreign keys
ALTER TABLE car
ADD CONSTRAINT fk_car_office_id FOREIGN KEY (office_id) REFERENCES office(office_id);
ALTER TABLE car_specs
ADD CONSTRAINT fk_car_plate_id FOREIGN KEY (plate_id) REFERENCES car(plate_id);
ALTER TABLE reservation
ADD CONSTRAINT fk_reservation_plate_id FOREIGN KEY (plate_id) REFERENCES car(plate_id),
    ADD CONSTRAINT fk_reservation_user_id FOREIGN KEY (user_id) REFERENCES user(user_id),
    ADD CONSTRAINT fk_reservation_office_id FOREIGN KEY (office_id) REFERENCES office(office_id);
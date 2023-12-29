-- Inserting dummy data into the office table
INSERT INTO office (location, phone_number, email)
VALUES (
        'Office 1 Location',
        '123-456-7890',
        'office1@example.com'
    ),
    (
        'Office 2 Location',
        '987-654-3210',
        'office2@example.com'
    );
-- Inserting dummy data into the car table
INSERT INTO car (
        plate_id,
        model,
        year,
        price_per_day,
        status,
        office_id
    )
VALUES (
        'ABC123',
        'Toyota Camry',
        2020,
        50.00,
        'Available',
        1
    ),
    (
        'XYZ789',
        'Honda Accord',
        2019,
        45.00,
        'Available',
        2
    );
-- Inserting dummy data into the car_specs table
INSERT INTO car_specs (car_id, color, horse_power)
VALUES (1, 'Red', 200),
    (2, 'Blue', 180);
-- Inserting dummy data into the user table
INSERT INTO user (
        username,
        first_name,
        last_name,
        birth_date,
        address,
        email,
        password_hash,
        phone_number,
        role
    )
VALUES (
        'user1',
        'John',
        'Doe',
        '1990-01-15',
        '123 Main St',
        'john.doe@example.com',
        'hashed_password',
        '555-1234',
        'User'
    ),
    (
        'admin1',
        'Admin',
        'User',
        '1985-05-20',
        '456 Oak St',
        'admin@example.com',
        'hashed_password',
        '555-5678',
        'Admin'
    );
-- Inserting dummy data into the reservation table
INSERT INTO reservation (
        car_id,
        user_id,
        office_id,
        pickup_date,
        return_date,
        price,
        payment_status
    )
VALUES (
        1,
        1,
        1,
        '2023-01-01',
        '2023-01-05',
        200.00,
        'Paid'
    ),
    (
        2,
        2,
        2,
        '2023-02-01',
        '2023-02-07',
        250.00,
        'Unpaid'
    );
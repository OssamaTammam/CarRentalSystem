INSERT INTO office (location, phone_number, email)
VALUES (
        'Office1 Location',
        '123-456-7890',
        'office1@example.com'
    ),
    (
        'Office2 Location',
        '987-654-3210',
        'office2@example.com'
    );
INSERT INTO car (
        plate_id,
        model,
        year,
        price_per_day,
        status,
        office_id
    )
VALUES (1, 'Car Model 1', 2022, 50.00, 'Active', 1),
    (
        2,
        'Car Model 2',
        2021,
        60.00,
        'Out of Service',
        1
    ),
    (3, 'Car Model 3', 2023, 70.00, 'Rented', 2);
INSERT INTO car_specs (plate_id, color, horse_power)
VALUES (1, 'Red', 200),
    (2, 'Blue', 180),
    (3, 'Black', 220);
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
        'john@example.com',
        'hashed_password',
        '555-1234',
        'User'
    ),
    (
        'admin1',
        'Admin',
        'User',
        '1985-05-20',
        '456 Admin St',
        'admin@example.com',
        'hashed_password_admin',
        '555-5678',
        'Admin'
    );
INSERT INTO reservation (
        plate_id,
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
        1,
        1,
        '2023-02-01',
        '2023-02-05',
        240.00,
        'Unpaid'
    ),
    (
        3,
        2,
        2,
        '2023-03-01',
        '2023-03-05',
        280.00,
        'Paid'
    );
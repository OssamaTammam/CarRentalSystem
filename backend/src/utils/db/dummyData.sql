-- Dummy data for car table
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
    ),
    (
        'DEF456',
        'Ford Mustang',
        2021,
        70.00,
        'Out of Service',
        1
    ),
    (
        'GHI789',
        'Chevrolet Malibu',
        2018,
        55.00,
        'Rented',
        3
    );
-- Dummy data for car_specs table
INSERT INTO car_specs (car_id, color, horse_power)
VALUES (1, 'Blue', 200),
    (2, 'Red', 180),
    (3, 'Black', 300),
    (4, 'Silver', 220);
-- Dummy data for office table
INSERT INTO office (location, phone_number, email)
VALUES (
        '123 Main St, CityA',
        '+1234567890',
        'office1@example.com'
    ),
    (
        '456 Oak St, CityB',
        '+9876543210',
        'office2@example.com'
    ),
    (
        '789 Pine St, CityC',
        '+1112233445',
        'office3@example.com'
    );
-- Dummy data for reservation table
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
        '2023-02-15',
        '2023-02-20',
        225.00,
        'Unpaid'
    ),
    (
        3,
        3,
        3,
        '2023-03-10',
        '2023-03-15',
        350.00,
        'Paid'
    ),
    (
        4,
        4,
        1,
        '2023-04-05',
        '2023-04-10',
        275.00,
        'Unpaid'
    );
-- Dummy data for user table
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
        'john_doe',
        'John',
        'Doe',
        '1990-05-15',
        '789 Elm St, CityD',
        'john@example.com',
        'hashed_password_1',
        '+5551112233',
        'User'
    ),
    (
        'jane_smith',
        'Jane',
        'Smith',
        '1985-08-20',
        '456 Birch St, CityE',
        'jane@example.com',
        'hashed_password_2',
        '+7772223344',
        'Admin'
    ),
    (
        'bob_jackson',
        'Bob',
        'Jackson',
        '1995-02-10',
        '123 Cedar St, CityF',
        'bob@example.com',
        'hashed_password_3',
        '+9993334455',
        'User'
    ),
    (
        'sara_williams',
        'Sara',
        'Williams',
        '1988-11-25',
        '789 Maple St, CityG',
        'sara@example.com',
        'hashed_password_4',
        '+8884445566',
        'User'
    );
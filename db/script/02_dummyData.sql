USE car_rental_system;
-- Additional dummy data for offices
INSERT INTO office (location, phone_number, email)
VALUES (
        'North Branch',
        '111-222-3333',
        'north_branch@example.com'
    ),
    (
        'South Branch',
        '444-555-6666',
        'south_branch@example.com'
    ),
    (
        'East Branch',
        '777-888-9999',
        'east_branch@example.com'
    ),
    (
        'West Branch',
        '123-456-7890',
        'west_branch@example.com'
    ),
    (
        'Central Branch',
        '987-654-3210',
        'central_branch@example.com'
    );
-- Additional dummy data for cars with and without reservations
INSERT INTO car (
        plate_id,
        model,
        year,
        price_per_day,
        status,
        office_id
    )
VALUES (
        'VWX345',
        'Hyundai Sonata',
        2020,
        55.00,
        'Available',
        1
    ),
    (
        'YZA678',
        'Kia Optima',
        2021,
        58.00,
        'Available',
        2
    ),
    ('BCD901', 'Audi A4', 2022, 75.00, 'Available', 3),
    (
        'EFG234',
        'Lexus ES',
        2020,
        70.00,
        'Available',
        1
    ),
    (
        'HIJ567',
        'Tesla Model 3',
        2022,
        90.00,
        'Available',
        2
    ),
    (
        'KLM890',
        'Ford Fusion',
        2019,
        50.00,
        'Available',
        3
    ),
    (
        'NOP123',
        'Chevrolet Impala',
        2021,
        60.00,
        'Available',
        1
    ),
    (
        'QRS456',
        'Mercedes-Benz E-Class',
        2020,
        80.00,
        'Available',
        2
    ),
    (
        'TUV789',
        'Volkswagen Passat',
        2022,
        65.00,
        'Available',
        3
    ),
    (
        'WXY012',
        'BMW 5 Series',
        2021,
        85.00,
        'Available',
        1
    ),
    (
        'ZAB345',
        'Toyota Avalon',
        2020,
        62.00,
        'Available',
        2
    ),
    (
        'CDE678',
        'Nissan Maxima',
        2022,
        68.00,
        'Available',
        3
    ),
    (
        'FGH901',
        'Honda Accord',
        2021,
        58.00,
        'Available',
        1
    ),
    (
        'IJK234',
        'Hyundai Genesis',
        2019,
        55.00,
        'Available',
        2
    ),
    ('LMN567', 'Audi A6', 2020, 75.00, 'Available', 3),
    (
        'OPQ890',
        'Lexus GS',
        2022,
        78.00,
        'Available',
        1
    ),
    (
        'RST123',
        'Tesla Model S',
        2021,
        95.00,
        'Available',
        2
    ),
    (
        'UVW456',
        'Ford Taurus',
        2019,
        48.00,
        'Available',
        3
    ),
    (
        'XYZ789',
        'Chevrolet Malibu',
        2020,
        65.00,
        'Available',
        1
    ),
    (
        'JKL321',
        'Nissan Altima',
        2021,
        60.00,
        'Available',
        2
    );
-- Additional dummy data for car specs without reservations
INSERT INTO car_specs (car_id, color, horse_power)
VALUES (1, 'Blue', 180),
    (2, 'Red', 160),
    (3, 'White', 200),
    (4, 'Black', 190),
    (5, 'Silver', 250),
    (6, 'Gray', 220),
    (7, 'Green', 170),
    (8, 'Yellow', 210),
    (9, 'Orange', 185),
    (10, 'Purple', 195),
    (11, 'Brown', 175),
    (12, 'Cyan', 205),
    (13, 'Magenta', 225),
    (14, 'Turquoise', 190),
    (15, 'Gold', 215),
    (16, 'Bronze', 180),
    (17, 'Platinum', 240),
    (18, 'Indigo', 200),
    (19, 'Pink', 170),
    (20, 'Sapphire', 210);
-- Additional dummy data for users
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
        '1990-03-15',
        '123 Main St',
        'john.doe@example.com',
        'hashed_password',
        '555-123-4567',
        'User'
    ),
    (
        'jane_smith',
        'Jane',
        'Smith',
        '1985-08-22',
        '456 Oak St',
        'jane.smith@example.com',
        'hashed_password',
        '555-987-6543',
        'User'
    ),
    (
        'michael_jones',
        'Michael',
        'Jones',
        '1992-05-10',
        '789 Elm St',
        'michael.jones@example.com',
        'hashed_password',
        '555-567-8901',
        'User'
    ),
    (
        'emily_wilson',
        'Emily',
        'Wilson',
        '1988-12-03',
        '101 Pine St',
        'emily.wilson@example.com',
        'hashed_password',
        '555-234-5678',
        'User'
    ),
    (
        'david_clark',
        'David',
        'Clark',
        '1995-07-18',
        '202 Cedar St',
        'david.clark@example.com',
        'hashed_password',
        '555-876-5432',
        'User'
    );
-- Additional dummy data for reservations
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
        '2022-07-01',
        '2022-07-10',
        550.00,
        'Paid'
    ),
    (
        3,
        2,
        3,
        '2022-08-15',
        '2022-08-20',
        375.00,
        'Paid'
    ),
    (
        5,
        3,
        2,
        '2022-09-05',
        '2022-09-15',
        540.00,
        'Unpaid'
    ),
    (
        7,
        4,
        4,
        '2022-10-10',
        '2022-10-20',
        630.00,
        'Unpaid'
    );
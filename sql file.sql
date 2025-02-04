CREATE TABLE Nutrition (
    restaurant VARCHAR(100),
    item VARCHAR(100),
    calories INT,
    cal_fat INT,
    total_fat INT,
    sat_fat DECIMAL(3, 1),
    trans_fat DECIMAL(3, 1),
    cholesterol INT,
    sodium INT,
    total_carb INT,
    fiber DECIMAL(3, 1),
    sugar DECIMAL(3, 1),
    protein DECIMAL(3, 1),
    vit_a DECIMAL(5, 1),
    vit_c DECIMAL(5, 1),
    calcium DECIMAL(5, 1),
    salad VARCHAR(100),  
    PRIMARY KEY (restaurant, item)
);

CREATE TABLE restuarants(
address    VARCHAR(255) NOT NULL,
city       VARCHAR(255) NOT NULL,
country    VARCHAR(255) NOT NULL,
keys       VARCHAR(255) NOT NULL PRIMARY KEY,
latitude   NUMERIC(14,9) NOT NULL,
longitude  NUMERIC(14,9) NOT NULL,
name       VARCHAR(255) NOT NULL,
postalCode VARCHAR(255) NOT NULL,
province   VARCHAR(225) NOT NULL,
websites   VARCHAR(2000)
);

CREATE TABLE Revenue (
    rank INT,
    Fast_Food_Chains VARCHAR(100),
    Sales_Millions INT,           
    Avg_Sales_Per_Unit INT,       
    Franchised_Stores INT,
    Company_Stores INT,
    Total_Units_2024 INT,
    Unit_Change_from_2024 INT,
    PRIMARY KEY (Fast_Food_Chains)
);

CREATE TABLE fast_food_locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    latitude DECIMAL(10, 6) NOT NULL,
    longitude DECIMAL(10, 6) NOT NULL
);

-- Insert 10 fast food locations
INSERT INTO fast_food_locations (name, latitude, longitude) VALUES
('McDonald''s', 41.8781, -87.6298),  -- Chicago, IL
('Burger King', 40.7128, -74.0060),  -- New York, NY
('Wendy''s', 39.9612, -82.9988),  -- Columbus, OH
('Taco Bell', 34.0522, -118.2437),  -- Los Angeles, CA
('Subway', 40.7306, -73.9352),  -- Queens, NY
('Domino''s Pizza', 33.7490, -84.3880),  -- Atlanta, GA
('KFC', 38.2527, -85.7585),  -- Louisville, KY
('Pizza Hut', 37.7749, -122.4194),  -- San Francisco, CA
('Dairy Queen', 44.9778, -93.2650),  -- Minneapolis, MN
('Starbucks', 47.6062, -122.3321);  -- Seattle, WA

-- Select all records to verify data
SELECT * FROM fast_food_locations;
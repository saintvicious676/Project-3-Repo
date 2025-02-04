-- Create a table for storing restaurant locations
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

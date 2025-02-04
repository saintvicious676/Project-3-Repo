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
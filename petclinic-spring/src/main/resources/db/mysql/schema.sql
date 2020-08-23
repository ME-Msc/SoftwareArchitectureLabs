/*
DROP TABLE vet_specialties IF EXISTS;
DROP TABLE vets IF EXISTS;
DROP TABLE specialties IF EXISTS;
DROP TABLE visits IF EXISTS;
DROP TABLE pets IF EXISTS;
DROP TABLE types IF EXISTS;
DROP TABLE owners IF EXISTS;
*/

CREATE TABLE specialties (
  id   INTEGER IDENTITY PRIMARY KEY,
  name VARCHAR(80)
);
CREATE INDEX specialties_name ON specialties (name);

CREATE TABLE owners (
  id          INTEGER IDENTITY PRIMARY KEY,
  first_name  VARCHAR(30),
  last_name   VARCHAR_IGNORECASE(30),
  gender      VARCHAR(20),
  birthDate   VARCHAR(20),
  address     VARCHAR(255),
  department  VARCHAR(80),
  telephone   VARCHAR(20)
);
CREATE INDEX owners_last_name ON owners (last_name);


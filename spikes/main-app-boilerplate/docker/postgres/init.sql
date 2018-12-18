CREATE TABLE participants(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  middle_name VARCHAR(255),
  last_name VARCHAR(255),
  aka VARCHAR(255) ARRAY,
  status VARCHAR(100),
  dob DATE,
  phone VARCHAR(10),
  email VARCHAR(255),
  address VARCHAR(255),
  age VARCHAR(3),
  ethnicity VARCHAR(20),
  race VARCHAR(20),
  gender VARCHAR(20),
  income_source VARCHAR(255),
  income_range VARCHAR(255),
  family_status VARCHAR(20),
  housing_status VARCHAR(255),
  chronic_homeless BOOLEAN,
  veteran_status VARCHAR(255),
  urgent BOOLEAN,
  services VARCHAR(255) [],
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
 );

 CREATE TABLE citations(
   id SERIAL PRIMARY KEY,
   citation_number VARCHAR(50),
   court_code VARCHAR(50),
   violation_number VARCHAR(50),
   citation_status VARCHAR(255),
   created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   participant_id INTEGER,
   FOREIGN KEY (participant_id) REFERENCES participants (id)
 );

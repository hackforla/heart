CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(20),
  last_name VARCHAR(20),
  email VARCHAR(50),
  username VARCHAR(50),
  password VARCHAR(100)
);

CREATE TABLE participants(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(20),
  middle_name VARCHAR(20),
  last_name VARCHAR(20),
  aka VARCHAR(20) ARRAY,
  dl VARCHAR(20),
  clinic VARCHAR(50),
  status VARCHAR(20),
  dob DATE,
  phone VARCHAR(10),
  email VARCHAR(50),
  address VARCHAR(50),
  age VARCHAR(3),
  ethnicity VARCHAR(20),
  race VARCHAR(20),
  gender VARCHAR(20),
  income_source VARCHAR(50),
  income_range VARCHAR(20),
  family_status VARCHAR(20),
  housing_status VARCHAR(20),
  chronic_homeless BOOLEAN,
  veteran_status VARCHAR(20),
  urgent BOOLEAN,
  services VARCHAR(20) [],
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
 );

 CREATE TABLE citations(
   id SERIAL PRIMARY KEY,
   citation_number VARCHAR(50),
   court_code VARCHAR(50),
   violations VARCHAR(50) [],
   citation_status VARCHAR(20),
   created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   participant_id INTEGER,
   FOREIGN KEY (participant_id) REFERENCES participants (id)
 );

-- Trigger function to update updated_at timestamp
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- update updated_at on participants table
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON participants
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

-- update updated_at on citations table
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON citations
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

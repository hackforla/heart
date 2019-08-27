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
  clinic_date DATE,
  status VARCHAR(50),
  dob DATE,
  phone VARCHAR(15),
  email VARCHAR(50),
  address VARCHAR(50),
  age VARCHAR(20),
  ethnicity VARCHAR(20),
  race VARCHAR(50),
  gender VARCHAR(50),
  income_source VARCHAR(50),
  income_range VARCHAR(20),
  family_status VARCHAR(20),
  housing_status VARCHAR(50),
  chronic_homeless BOOLEAN,
  veteran_status BOOLEAN,
  urgent BOOLEAN,
  services VARCHAR(20) [],
  notes VARCHAR(250),
  background_check VARCHAR(250) [],
  case_closed_reason VARCHAR(50) [],
  case_closed_other VARCHAR(250),
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


CREATE TABLE agreements_obligations(
  id SERIAL PRIMARY KEY,
  agreement_voluntary BOOLEAN,
  agreement_at_risk BOOLEAN,
  agreement_obligations BOOLEAN,
  agreement_infractions BOOLEAN,
  agreement_warrants BOOLEAN,
  agreement_court_form BOOLEAN,
  agreement_progress BOOLEAN,
  agreement_phone_contact BOOLEAN,
  agreement_email_contact BOOLEAN,
  obligations_hours_complete BOOLEAN,
  obligations_hours SMALLINT,
  obligations_complete BOOLEAN,
  health_mental BOOLEAN,
  health_physical BOOLEAN,
  health_dental BOOLEAN,
  health_substance_abuse BOOLEAN,
  health_vaccination BOOLEAN,
  health_sti_std BOOLEAN,
  health_first_aid BOOLEAN,
  housing_case_management BOOLEAN,
  housing_emergency BOOLEAN,
  housing_safeparkla BOOLEAN,
  housing_veterans BOOLEAN,
  housing_survey BOOLEAN,
  government_fin_assistance BOOLEAN,
  government_calfresh BOOLEAN,
  government_medi_cal BOOLEAN,
  government_dept_consumer BOOLEAN,
  government_voter BOOLEAN,
  government_birth BOOLEAN,
  government_vet_services BOOLEAN,
  government_library BOOLEAN,
  government_dmv BOOLEAN,
  government_capp BOOLEAN,
  hygiene_haircut BOOLEAN,
  hygiene_shower_kit BOOLEAN,
  hygiene_screening BOOLEAN,
  communication_cell BOOLEAN,
  communication_email BOOLEAN,
  legal_public_defender BOOLEAN,
  legal_legal_aid BOOLEAN,
  legal_medication BOOLEAN,
  legal_domestic BOOLEAN,
  legal_child_support BOOLEAN,
  legal_victim BOOLEAN,
  legal_probation BOOLEAN,
  employment_training BOOLEAN,
  family_source_center BOOLEAN,
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

-- update updated_at on agreements_obligations table
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON agreements_obligations
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();



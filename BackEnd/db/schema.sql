DROP DATABASE IF EXISTS data_dev;
CREATE DATABASE data_dev;

\c data_dev

--data for resume

CREATE TABLE resume_data (
    job_id SERIAL PRIMARY KEY,
    job_title VARCHAR,
    date_started DATE,
    data_ended DATE,
    company_name VARCHAR,
    company_name TEXT,
    job_bullet_1 TEXT,
    job_bullet_2 TEXT,
    job_bullet_3 TEXT
);


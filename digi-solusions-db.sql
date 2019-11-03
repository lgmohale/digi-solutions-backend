CREATE TABLE person(
    person_id BIGSERIAL NOT NULL PRIMARY KEY,
    person_name VARCHAR (150) NOT NULL,
    person_surname VARCHAR (150) NOT NULL,
    person_number VARCHAR (150) NOT NULL,
    person_email VARCHAR (150) NOT NULL,
    person_password VARCHAR (150) NOT NULL,
    created_at DATE,
    updated_at DATE
);

CREATE TABLE course(
    course_id BIGSERIAL NOT NULL PRIMARY KEY,
    course_name VARCHAR (150) NOT NULL,
    course_aps VARCHAR (150) NOT NULL,
    course_faculty VARCHAR (150) NOT NULL,
    campus_name VARCHAR (150) NOT NULL,
    university_name VARCHAR (150) NOT NULL,
    university_email VARCHAR (150) NOT NULL,
    university_number VARCHAR (150) NOT NULL,
    university_website VARCHAR (150) NOT NULL,
    created_at DATE,
    updated_at DATE
);

CREATE TABLE superAdmin(
    admin_id BIGSERIAL NOT NULL PRIMARY KEY,
    admin_name VARCHAR (150) NOT NULL,
    admin_password VARCHAR (150) NOT NULL
);
USE `lovelace-2147602-maria-benning`;


CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
    
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
 "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
  
  );
  
  
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
 "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "male"
  
  );

  


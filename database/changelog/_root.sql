--liquibase formatted sql

--changeset feynubrick:1 dbms:postgresql
CREATE TABLE transaction_records (
      id SERIAL PRIMARY KEY,
      transacted_at TIMESTAMP WITH TIME ZONE NOT NULL,
      amount INTEGER,
      comment VARCHAR(100),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP WITH TIME ZONE
);
--rollback DROP TABLE transaction_records;

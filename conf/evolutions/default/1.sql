# --- !Ups
create table users (
  id BIGINT NOT NULL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  mobile BIGINT NOT NULL,
  email TEXT NOT NULL
);

# --- !Downs
drop table users;

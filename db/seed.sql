-- user table
create table personal_user(
id serial primary key,
username varchar (50),
password varchar (300),
email varchar(100),
items_id int
)



--items table
create table items(
items_id serial primary key,
public_id int,
private_id int)


create table private_id(
title text,
content text,
id serial primary key,
username varchar(50),
user_id int
add foreign key (user_id) references personal_user(id)

)

create table public_id(
title text,
content text,
public_id serial primary key,
username varchar(50),
genre varchar(20),
Image text)
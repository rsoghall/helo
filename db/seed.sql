drop table if exists users;
drop table if exists posts;

create table users
(
    user_id serial primary key,
    user_email varchar(64),
    user_hash text
);

insert into users
    (
    user_email,
    user_hash
    )
values
(
        '1',
        $1 --password 1
),
    (
        '2',
        $2 --password 2
);







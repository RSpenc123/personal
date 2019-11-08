insert into personal_user(
    username,
    password
) values(
    ${username},
    ${password}
)

returning *
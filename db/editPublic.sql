update public_id
set title = $2, content = $3
where id = $1;

select * from public_id
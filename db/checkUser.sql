select b.id, b.username, b.password, a.items_id
from personal_user b
full join items a on b.items_id = a.items_id
where b.username = $1
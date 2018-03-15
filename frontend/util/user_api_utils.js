export const fetchUser = (id) =>{
  return(
    $.ajax({
      url:`/api/users/${id}`
    })
  );
};

export const fetchUserShelves = id =>{
  return(
    $.ajax({
      url:`/api/users/${id}/shelves`
    })
  );
};

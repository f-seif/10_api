function UserItem({userProps}) {
  return(
    <div className="card m-2 pt-4" style={{width: "18rem"}}>
      <h5>{userProps.name} {userProps.username}</h5>
      <p>{userProps.email}</p>
      <p>Address: {userProps.address.street}, {userProps.address.suite}, {userProps.address.city}, {userProps.address.zipcode}</p>
      <p>{userProps.phone}</p>
      <p>{userProps.website}</p>
      <p>Company: {userProps.company.name}</p>
    </div>
  );
}

export default UserItem;

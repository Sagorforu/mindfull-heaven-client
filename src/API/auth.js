// save user to database
export const saveUser = (user) => {
  const currentUser = {
    email: user.email,
    name: user.displayName,
    photo: user.photoURL,
  };
  fetch(`https://mindfull-heaven-server.vercel.app/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

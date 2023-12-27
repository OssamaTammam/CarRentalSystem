const isLoggedIn = async () => {
  const res = await fetch("http://localhost:3000/user/isLoggedIn", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // This includes cookies in the request
  });

  console.log(res.status);
  if (res.ok) {
    return true;
  } else {
    return false;
  }
};

export default isLoggedIn;

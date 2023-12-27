const isLoggedIn = async () => {
  const res = await fetch("http://localhost:3000/user/isLoggedIn", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      credentials: "include", // This includes cookies in the request
    },
  });
  if (res.status === 200) {
    return true;
  } else {
    return false;
  }
};

export default isLoggedIn;

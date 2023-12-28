const isLoggedIn = async () => {
  const jwtToken = encodeURIComponent(
    document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*=\s*([^;]*).*$)|^.*$/, "$1")
  );

  const res = await fetch("http://localhost:3000/user/isLoggedIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // This includes cookies in the request
    body: JSON.stringify({ jwt: jwtToken }),
  });

  if (res.ok) {
    return true;
  } else {
    return false;
  }
};

export default isLoggedIn;

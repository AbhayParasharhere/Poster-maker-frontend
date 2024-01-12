function fetchToken({ email, password }) {
  return new Promise((resolve, reject) => {
    const requestData = {
      email,
      password,
    };
    console.log(
      "Fetch token API called and This is the login token data:",
      requestData
    );

    let url = "https://beautyresort.in/api/user/token/";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("An error occurred, please try again");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data); // Resolve with the token response
      })
      .catch((error) => {
        console.log("This is the error", error);
        reject(new Error("Failed to log in"));
      });
  });
}

export default async function fetchToken({ email, password }) {
  let emailLower = email.toLowerCase();
  const requestData = {
    email: emailLower,
    password: password,
  };

  try {
    let url = "https://beautyresort.in/api/user/token/";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      const data = await response.json();
      if (data.email[0]) {
        throw new Error(data.email[0]);
      } else {
        throw new Error("Invalid Credentials, Try again");
      }
    }
    const data = await response.json();
    return data; // Return the token response
  } catch (error) {
    throw new Error(error.message);
  }
}

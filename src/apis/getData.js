export default async function fetchData(token) {
  return {
    textData: await textInfo(token),
    personImage: await personPhoto(token),
    signatureImage: await signaturePhoto(token),
  };
}
async function textInfo(token) {
  const requestData = `Token ${token}`;
  console.log("This is the login token data:", requestData);

  try {
    let url = "https://beautyresort.in/api/user/me/";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: requestData,
      },
    });

    if (!response.ok) {
      throw new Error("Authentication failed");
    }

    const data = await response.json();
    console.log(data);
    return data; // Return the token response
  } catch (error) {
    console.error("Error fetching token:", error);
  }
}
async function personPhoto(token) {
  const requestData = `Token ${token}`;
  console.log("This is the login token data:", requestData);

  try {
    let url = "https://beautyresort.in/api/user/background-image/";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: requestData,
      },
    });

    if (!response.ok) {
      throw new Error("Authentication failed");
    }

    const data = await response.json();
    console.log(data);
    return data; // Return the token response
  } catch (error) {
    console.error("Error fetching token:", error);
  }
}
async function signaturePhoto(token) {
  const requestData = `Token ${token}`;
  console.log("This is the login token data:", requestData);

  try {
    let url = "https://beautyresort.in/api/user/signature-image/";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: requestData,
      },
    });

    if (!response.ok) {
      throw new Error("Authentication failed");
    }

    const data = await response.json();
    console.log(data);
    return data; // Return the token response
  } catch (error) {
    throw new Error("Cannot Reach the Servers");
  }
}

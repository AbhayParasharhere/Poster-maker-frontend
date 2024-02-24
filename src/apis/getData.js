import e from "cors";

export default async function fetchData(token) {
  try {
    const data = {
      textData: await textInfo(token),
      personImage: (await personPhoto(token)) || null,
      // signatureImage: (await signaturePhoto(token)) || null,
    };
    console.log("This is the fetch data apis data ", data);
    return data;
  } catch (error) {
    console.log("main error2: ", error);
  }
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
      throw new Error("Failed to fetch person photo");
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
      throw new Error("Failed to fetch signature photo");
    }

    const data = await response.json();
    console.log(data);
    return data; // Return the token response
  } catch (error) {
    throw new Error("Cannot Reach the Server");
  }
}

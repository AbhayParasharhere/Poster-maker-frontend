export default async function fetchToken({email,password}) {
    const requestData = {
      email,
      password}
      console.log("This is the login token data:",requestData)

    try {   
      
      let url = "http://ec2-34-238-164-129.compute-1.amazonaws.com/api/user/token/";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("An error occured please try again");
      }

      const data = await response.json();
      return data; // Return the token response
    } catch (error) {
      throw new Error("Failed to log in");
    }
  }

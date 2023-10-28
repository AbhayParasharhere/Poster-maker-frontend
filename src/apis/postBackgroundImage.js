export default async function postBackgroundImage(token,backgroundImage)  {
    const uploadData = new FormData();
    uploadData.append("background_image", backgroundImage);
    console.log(backgroundImage)

    try {
      let url = "http://localhost:8000/api/user/background-image/";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Authorization": `Token ${token}`,
        },
        body: uploadData,
      });

      if (!response.ok) {
        throw new Error("Background image upload failed");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error uploading background image:", error);
    }
  };
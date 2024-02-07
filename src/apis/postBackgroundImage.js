export default async function postBackgroundImage(token, backgroundImage) {
  const uploadData = new FormData();
  uploadData.append("background_image", backgroundImage);
  console.log(backgroundImage);


  try {
    let url = "https://beautyresort.in/api/user/background-image/";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
      },
      body: uploadData,
    });

    if (response.ok) {
      const blob = await response.blob();

      // Convert Blob to Base64
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
          const base64data = reader.result;

          // Store Base64 data in local storage
          localStorage.setItem("background_image", base64data);
      };
    }


    if (!response.ok) {
      throw new Error("Background image upload failed");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error uploading background image:", error);
  }
}

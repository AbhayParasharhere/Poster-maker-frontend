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
      // const blob = await response.blob();

      // // Convert Blob to Base64
      // const reader = new FileReader();
      // reader.readAsDataURL(blob);
      // reader.onloadend = () => {
      //     const base64data = reader.result;

          // Store Base64 data in local storage
          async function fetchAndStoreImage(url) {
            try {
                const response = await fetch(url);
                const blob = await response.blob();
                // Generate a unique key for storing the image in local storage
                const key = `image_${Date.now()}`;
                localStorage.setItem(key, JSON.stringify(blob));
                console.log("Image stored successfully in local storage!");
                return key; // Return the key for later retrieval if needed
            } catch (error) {
                console.error("Error fetching and storing image:", error);
            }
        }
        const imageUrl = 'https://beautyresort.in/api/user/background-image/';
        fetchAndStoreImage(imageUrl);
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

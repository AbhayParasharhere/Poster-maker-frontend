export default async function postBackgroundImage(token, backgroundImage) {
  const uploadData = new FormData();
  uploadData.append("background_image", backgroundImage);
  console.log("background image api called", backgroundImage);

  try {
    let url = "https://beautyresort.in/api/user/background-image/";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
      },
      body: uploadData,
    });

    if (!response.ok) {
      throw new Error("Profile image upload failed");
    }

    const data = await response.json();
    const status = response.status;
    console.log(data);
    return status;
  } catch (error) {
    throw new Error(error);
  }
}

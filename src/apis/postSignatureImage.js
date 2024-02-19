export default async function postSignatureImage(token, signaturePhoto) {
  const uploadData = new FormData();
  console.log("Signature image api called");
  uploadData.append("signature_image", signaturePhoto);

  try {
    let url = "https://beautyresort.in/api/user/signature-image/";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
      },
      body: uploadData,
    });

    if (!response.ok) {
      throw new Error("Signature image upload failed");
    }
    const status = response.status;
    const data = await response.json();
    console.log(data);
    return status;
  } catch (error) {
    throw new Error(error);
  }
}

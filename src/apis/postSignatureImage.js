export default  async function postSignatureImage (token,signaturePhoto) {
    const uploadData = new FormData();
    uploadData.append("signature_image",signaturePhoto);

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
        throw  Error("Background image upload failed");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error uploading background image:", error);
    }
  }

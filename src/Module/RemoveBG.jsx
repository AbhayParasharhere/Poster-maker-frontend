import React from 'react'
import imglyRemoveBackground from "@imgly/background-removal";

// removeBackground.js

const RemoveBackground = async (formValues) => {
    const imageSrc = formValues.backgroundImage;
    let removeBGFile;
  
    try {
      
      const blob = await imglyRemoveBackground(imageSrc);
      removeBGFile = new File([blob], "new_image.jpg", { type: "image/jpeg" });
      console.log(removeBGFile);
    } catch (error) {
      console.error("Error loading image:", error);
    }
    // } finally {
    //   setLoading(false);
    // }
  
    return removeBGFile;
  };
  
  export default RemoveBackground;
  

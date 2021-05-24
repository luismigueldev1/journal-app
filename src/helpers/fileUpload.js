export const fileUpload = async (file) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/n3v3rg1v3up/upload";

  const formData = new FormData();

  formData.append("upload_preset", "journal-react-app");
  formData.append("file", file);

  try {
    const response = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      return data.secure_url;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

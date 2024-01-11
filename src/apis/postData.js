export default async function postData(formValues) {
  console.log("post data api called");
  const userData = {
    name: formValues.name,
    password: formValues.password,
    email: formValues.email,
    designation: formValues.designation,
    contact_number: formValues.contactNumber,
    employee_id: formValues.employeeID,
  };
  console.log("data:", userData);
  try {
    let url = "https://beautyresort.in/api/user/sign-up/";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Could not make the user");
    }

    const data = await response.json();
    const status = response.status;
    console.log(status);
    return status;
  } catch (error) {
    throw new Error("Post data not working");
  }
}

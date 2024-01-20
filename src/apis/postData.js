export default async function postData(formValues) {
  console.log("post data api called");
  let emailLower = formValues.email.toLowerCase(); 
  const userData = {
    name: formValues.name,
    password: formValues.password,
    email: emailLower,
    designation: formValues.designation,
    contact_number: formValues.contactNumber,
    employee_id: formValues.employeeID,
  };
  console.log("This is the form data submitted to post data api", userData);
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
    console.log("this is the status console", status);
    return status;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

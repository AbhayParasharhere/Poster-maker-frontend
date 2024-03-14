export default async function patchData(formValues, token) {
  console.log("patch data api called");
  const userData = {
    name: formValues.name,
    password: formValues.newPassword,
    designation: formValues.designation,
    contact_number: formValues.contactNumber,
    employee_id: formValues.employeeID,
  };

  Object.values(userData);
  let filteredDataNoEmptyString = Object.fromEntries(
    Object.entries(userData).filter((entry) => entry[1] !== "")
  );
  console.log(
    "This is the form data submitted to patch data api",
    filteredDataNoEmptyString
  );

  const userToken = `Token ${token}`;
  if (Object.keys(filteredDataNoEmptyString).length === 0) {
    console.log("The filtered data is empty");
    return -1;
  }
  try {
    let url = "https://beautyresort.in/api/user/me/";
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: userToken,
      },
      body: JSON.stringify(filteredDataNoEmptyString),
    });

    if (!response.ok) {
      console.log(response);
      throw new Error("Could not make the user: ", response.message);
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

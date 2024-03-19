import axios from "axios";

export const userRegister = async (fullName, email, password) => {
  const url = "http://localhost:4000/api/v1/register";

  try {
    const response = await axios.post(url, {
      fullName,
      email,
      password,
    });

    return response.data; // Return data from the backend
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to register user");
  }
};

export const userLogin = async (email, password) => {
  const url = "http://localhost:4000/api/v1/login";

  try {
    const response = await axios.post(url, { email, password });
    return response.data.jwtToken; // Return data from the backend
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to login user");
  }
};

export const getAllJobsDB = async () => {
  const url = "http://localhost:4000/api/v1/alljobs";

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error coming:", error);
    throw new Error("#####Failed to get jobs");
  }
};

export const applyJob = async (jobId, userEmail) => {
  const url = `http://localhost:4000/api/v1/job/${jobId}/${userEmail}`;

  try {
    const response = await axios.post(url);
    console.log("*******Reached applyJob", response);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to apply for job");
  }
};

export const getAppliedJobsArray = async (userEmail) => {
  const url = `http://localhost:4000/api/v1/user/${userEmail}`;

  try {
    const response = await axios.get(url);
    console.log("********", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to get applied jobs array");
  }
};

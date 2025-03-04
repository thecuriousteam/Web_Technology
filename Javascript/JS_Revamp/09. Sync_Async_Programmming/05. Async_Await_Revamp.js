const userData = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      console.log("Error in fetching data");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error in fetching data");
  } finally {
    console.log("Code Executed Successfully");
  }
};

userData(1)
  .then((user) => {
    console.log({ message: user });
  })
  .catch((error) => {
    console.log({ message: error });
  });

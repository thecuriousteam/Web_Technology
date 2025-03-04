// creating Promises & handling promises
const userData = (userID) => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .then((response) => {
        if (!response.ok) {
          // console.log("Unable to fetch data");
          reject("Error in fetching data", response.status);
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) =>
        reject("Network Error", {
          message: error.message,
          status: error.status,
        })
      );
  });
};
// creating promise

userData(400)
  .then((user) => {
    console.log("User Data ", user);
  })
  .catch((error) => {
    console.log("Error in fetching", error);
  });

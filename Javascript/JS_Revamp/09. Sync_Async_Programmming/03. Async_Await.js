const fetchData = async () => {
  try {
    const apiResponse = await fetch(
      "https://jsonplaceholder.typicode.com/todos/"
    );

    if (!apiResponse.ok) {
      console.log(`Error: ${apiResponse.status}`);
    }

    const data = await apiResponse.json();
    const completedData = data.filter(
      (compltedTodo) => compltedTodo.completed === true
    );
    // console.log(completedData);

    const titleData = [];
    data.map((titles) => titleData.push(titles.title));
    console.log(titleData.length);
  } catch (error) {
    console.log("Error: Something went wrong");
  } finally {
    console.log("Code Executed");
  }
};

fetchData().then(() => console.log("Data Fetched Successfully"));

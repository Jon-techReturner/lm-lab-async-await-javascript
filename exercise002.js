import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

// const fetchData = (apiEndPoint) => {
//   fetch(apiEndPoint)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));

// };

// fetchData(jsonTypicode);

async function fetchData(){
  try{
  const response = await fetch(jsonTypicode);
  const userData = await response.json();
  console.log(`This is the result: `, userData);
  }catch(userData){
    console.error(userData);
  }
};
fetchData();

console.log("A print statement after the request has been defined");

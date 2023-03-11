import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";
const jsonCats ="https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME";
const fetchData = (apiEndPoint) => {
  fetch(apiEndPoint)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));

};

fetchData(jsonTypicode);

async function fetchApiData(){
  try{
  const response = await fetch(jsonCats);
  const userData = await response.json();
  console.log(`This is the result: `, userData);
  }catch(userData){
    console.error(userData);
  }
};
fetchApiData();

console.log("A print statement after the request has been defined");

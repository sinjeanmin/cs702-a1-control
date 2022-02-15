export default class APIService {

  static submitForm(body) {
    // return fetch(`http://localhost:5000/codingform`, {
    //remember to do EXPORT PORT=3000 back to original for reactjs
    //remember to change package.json back to 5000 also
    return fetch(`http://localhost:1234/codingform`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

}

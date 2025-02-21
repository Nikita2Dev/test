// persist the data in the local storage
let iamge = document.getElementById("img");
let fact = document.getElementById("fact");
getData();

function getData() {
  const p1 = fetch("https://api.thecatapi.com/v1/images/search");
  const p2 = fetch("https://catfact.ninja/fact?max_length=160");

  Promise.all([p1, p2])
    .then((values) => {
      return Promise.all(
        values.map((value) => {
          return value.json();
        })
      );
    })
    .then((finalData) => {
      console.log(finalData);
      
      iamge.src = finalData[0][0].url;
      fact.innerHTML = finalData[1].fact;
    });
}


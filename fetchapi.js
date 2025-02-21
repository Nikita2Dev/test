// fetch api

// fetch api

// fetch api is a modern way to make http requests. It is a promise-based api that is built into the browser. It is not supported in Internet Explorer.

// promises

// promises

// promises are a way to handle asynchronous operations. They can be in one of three states:

// pending: initial state, neither fulfilled nor rejected.

// fulfilled: meaning that the operation completed successfully.

// rejected: meaning that the operation failed.

// console.log("order ghya cake cha");

// const p1 = new Promise((resove, reject) => {
//   setTimeout(() => {
//     resove("cake order success d1");
//   }, 2000);
// });

// p1.then((value) => {
//     return value+"cake orer success d2";
// }).then((value) => {
//    return value+"cake order success d3";
// }).then((value) => {
//     console.log(value);
// });

// fetch api















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


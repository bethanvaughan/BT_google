const searchButton = document.querySelector("#search");
searchButton.addEventListener("click", () => {
  fetch(`http://localhost:3004/results`)
    .then((res) => res.json())
    .then(insertResults);
  window.location.href = "result.html";
});

function insertResult(result) {
  const link = document.createElement("div");
  const space = document.createElement("p");
  link.textContent = `${result.name} `;
  space.textContent = `${result.link}`;
  document.querySelector("#resultsspace").append(link);
  document.querySelector("#resultsspace").append(space);
}

function insertResults(results) {
  results.forEach((result) => insertResult(result));
}

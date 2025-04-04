// script.js
fetch('data.json')
  .then(response => response.json()) 
  .then(data => {
    console.log(data[0].name); 
  })
  .catch(error => console.error("Erreur lors du chargement du JSON :", error));


  let extActive = data
  .filter(item => item.isActive)
  .map(item => item.isActive);
  console.log(extActive);
  
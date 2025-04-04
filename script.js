// script.js

let extensionList;
const extensionGrid = document.getElementById("extension-grid")
/**
 * 
 * @param {{ logo: string, name: String, description: String, isActive: boolean }} extensionData 
 */
const createExtensionArticle = (extensionData) => {
  const newArticle = document.createElement("article")
  newArticle.innerHTML = `
  <div class="description">
    <div class="image-wrapper">
      <img src="${extensionData.logo}" alt="logo ${extensionData.name}">
    </div>
    <div class="text">
      <h2>${extensionData.name}</h2>
      <p>${extensionData.description}</p>
    </div>
  </div>
  <div class="actions">
    <button>remove</button>
    <label class="switch" for="check-devlens">
      <input type="checkbox" name="" id="check-devlens"${extensionData.isActive ? " checked" : ""}>
      <span class="slider"></span>
    </label>
  </div>
  `
  return newArticle
}

/**
 * 
 * @param {Array<{ logo: string, name: String, description: String, isActive: boolean}>} extensionData 
 */
const fillGrid = (data) => {
  extensionGrid.innerHTML = ""
  data.forEach(extension => {
    extensionGrid.appendChild(createExtensionArticle(extension))
  });
}

const fetchJson = async () => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      extensionList = data
      fillGrid(extensionList)
    })
    .catch(error => console.error("Erreur lors du chargement du JSON :", error));
}

fetchJson()
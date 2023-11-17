"use strict"
window.onload = function (_event) {
    const mountainCategory = document.getElementById("mountainSelect")
    mountainCategory.onchange = renderMountainCard
    populateMountainCategory(mountainsArray, mountainCategory)
}

function populateMountainCategory(mountainsArray, mountainSelect) {
    let html = "<option>Select Mountain</option>"
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const mountain = mountainsArray[index]
        html += `<option value = "${mountain.name}"> ${mountain.name}</option>`
    }
    mountainSelect.innerHTML = html
}

function renderMountainCard(event) {
    const mountainTrip = event.target.value
    let html = ""
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const mountain = mountainsArray[index];
        if (mountain.name === mountainTrip) {
            html += `
            <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="/data/images/${mountain.img}" alt="Card image cap">
  <div class="card-body">
  <h5 class = "card-header"> ${mountain.name}</h5>
    <p class="card-text">${mountain.desc}.</p>
    <p class="card-text">${mountain.coords.lat}.</p>
    <p class="card-text">${mountain.coords.lng}.</p>
  </div>
</div>
           `
        }
    }
    const resultDiv = document.getElementById("selectMountain")
    resultDiv.innerHTML = html
}

"use strict";

window.onload = function (_event) {
    const locationCategory = document.getElementById("locationSelect");
    locationCategory.onchange =  renderCard;

    const parkSelect = document.getElementById("parkSelect");
    parkSelect.onchange = renderCard;

    populateLocationCategory(locationsArray, locationCategory);
    
    populateparkType(parkTypesArray, parkSelect);
};

function populateLocationCategory(locationsArray, locationSelect) {
    let html = "<option value=''>Search Park By Location</option>";

    for (let index = 0; index < locationsArray.length; index += 1) {
        const location = locationsArray[index];
        html += `<option value="${location}">${location}</option>`;
    }

    locationSelect.innerHTML = html;
}

function populateparkType(parkTypesArray, parkSelect) {
    let html = "<option value=''>Search Park</option>";

    for (let index = 0; index < parkTypesArray.length; index += 1) {
        const parkType = parkTypesArray[index];
        html += `<option value="${parkType}">${parkType}</option>`;
    }

    parkSelect.innerHTML = html;
}

function renderCard(event) {
    const locationArea = event.target.value;
    const parkType = document.getElementById("parkSelect").value;
    let html = "";
    const resultDiv = document.getElementById("resultDiv");

    for (let index = 0; index < nationalParksArray.length; index += 1) {
        const park = nationalParksArray[index];

        if (locationArea === park.State || park.LocationName.includes(locationArea)) {
            html += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-header">${park.LocationName}</h5>
                    <p class="card-text">Address: ${park.Address} ${park.City}, ${park.State}</p>
                    <p class="card-text">${park.Location.coordinates}</p>
                </div>
            </div>`;

        }
         else if (parkType === "" ){
            html += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-header">${park.LocationName}</h5>
                    <p class="card-text">Address: ${park.Address} ${park.City}, ${park.State}</p>
                    <p class="card-text">${park.Location.coordinates}</p>
                </div>
            </div>`;
    }
         
         else if  (parkType === park.type) {
            html += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-header">${park.LocationName}</h5>
                        <p class="card-text">Address: ${park.Address} ${park.City}, ${park.State}</p>
                        <br>
                     <p class="card-text">${park.Location.coordinates}</p>
                    </div>
                </div>`;
        }
    }

    // Set the resultDiv.innerHTML after the loop
    resultDiv.innerHTML = html;
}

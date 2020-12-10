//Fetch rockets
const rocketsContainer = document.querySelector(".rockets");
const url = "https://api.spacexdata.com/v3/rockets";



async function fetchRockets() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        const rockets = json;

        /* console.log(json); */

        //details.forEach(function (rocket) {

        //})

        rocketsContainer.innerHTML = "";

        for (i = 0; i < rockets.length; i++) {
            if (i === 10) {
                break;
            }

            /*  onerror="this.style.display = 'none'" */

            rocketsContainer.innerHTML += `<a href = "details.html?id=${rockets[i].rocket_id}" class="rocketCard">       
                        <div class ="rocket-image">
                        <img src="${rockets[i].flickr_images[0]}" width="400px" alt="${rockets[i].rocket_id}" /> 
                        </div>
                        <div class = "details">
                            <h4 class = "rocketName">${rockets[i].rocket_name}</h4>
                        </div>
                        <p class="rocket-btn">read more</i>
                <a target="_blank" class="rocket-btn" href="${rockets[i].wikipedia}"></a><p>
                        </a>`;


        }


    } catch (error) {
        console.log("error: occurred when calling the api code");
        rocketsContainer.innerHTML = `<p class="error">An error occurred when calling the API code </p>`;
    }


}



fetchRockets();
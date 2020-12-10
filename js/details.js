const detailContainer = document.querySelector(".rocket-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://api.spacexdata.com/v3/rockets/" + id;

console.log(url);

async function fetchRocket() {

    try {
        const response = await fetch(url);
        const rockets = await response.json();

        console.log(rockets);

        createHtml(rockets);



    } catch (error) {
        console.log("error: occurred when calling the api code");
        detailContainer.innerHTML = `<p class="error">An error occurred when calling the API code </p>`;
    }


}

fetchRocket();

function createHtml(rockets) {
    detailContainer.innerHTML = `<h1>${rockets.rocket_name}</h1>
                                <div class="details-image" 
                                    style="background-image: url('${rockets.flickr_images}')"></div>
                                <div class="details-description">${rockets.description}</div>
                                <time class="details-date">Released: ${rockets.first_flight}</time>`;
}
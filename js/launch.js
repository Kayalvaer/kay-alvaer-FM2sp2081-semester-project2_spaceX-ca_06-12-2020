const launchContainer = document.querySelector(".launches");
const url = "https://api.spacexdata.com/v3/launches/";

console.log(url);

async function fetchLaunches() {


    try {
        const response = await fetch(url);
        const json = await response.json();

        const launches = json;

        /* console.log(json); */

        //details.forEach(function (rocket) {})

        launchContainer.innerHTML = "";


        for (i = 0; i < launches.length; i++) {
            if (launches[i].upcoming === false) {

                launchContainer.innerHTML += `<div class = "launchInfo" >

                    <div class = "launch-section" >
                    <h3 > mission: ${launches[i].mission_name} </h3>     
                    <p> date:${launches[i].launch_date_utc} </p>   
                    </div>
                    <div class = "launch-section">  
                    <p> mission details:${launches[i].details} </p>              
                    <p> cost per launch: ${launches[i].cost_per_launch}</p>   
                    <p> Launch year: ${launches[i].launch_year} </p>   
                    <p> View <i class = "fas fa-rocket" ></i><a target = "_blank" href = "${launches[i].links.wikipedia}"> wikipedia 
                    </a></p>
                    <p><a target = "_blank" href = "${launches[i].links.video_link}"> YouTube Link 
                    </a></p> 
                    </div> 

                    </div>`;
            }
        }

    } catch (error) {
        console.log("error: occurred when calling the api code");
        rocketsContainer.innerHTML = `<p class="error">An error occurred when calling the API code </p>`;
    }


}



fetchLaunches();
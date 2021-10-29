const search =document.querySelector("#search");
const searchPlayer = document.querySelector("#search-player");
const playerInfo = document.querySelector("#player-info");
const age =document.querySelector("#age");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight")
const preferredFoot = document.querySelector("#preferred-foot")
const position =document.querySelector("#position");
const number =document.querySelector("#number")
const workRate = document.querySelector("#work-rate")
const jerseyNumber = document.querySelector("#jersey-number")
const heading = document.querySelector("#heading")
const value = document.querySelector("#value")
const output = document.querySelector("#output")
const clubName = document.querySelector("#club-name")

function hideData(){
    search.style.display = "none";
    searchPlayer.style.display="none";
    output.style.display="block";
}

const getPlayerData =   function (){
    hideData()
    let searchName = searchPlayer.value
     fetch('./player.json')
    .then(response => response.json())
    .then(data =>{
        data.map(player => {
            if(player.Name === searchName){
                console.log(player)
                age.innerText =player.Age
                height.innerText =player.Height
                weight.innerText =player.Weight
                position.innerText =player.Position
                jerseyNumber.innerText =player['Jersey Number']
                preferredFoot.innerText = player['Preferred Foot']
                heading.innerText = player.Name
                workRate.innerText = player['Work Rate']
                value.innerText = player.Value
                clubName.innerText = player.Club










                
            }
        })

    })   
}


search.addEventListener("click",getPlayerData)


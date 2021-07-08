let arrayOfPlayers = []
let numberOfTeams = 0
let targetPlayerNumber = 1
let currentTeam = 1

const getNames = function(){
    let namesInput = document.getElementById('listOfNames').value
    arrayOfPlayers = namesInput.split("\n")
}

const shufflePlayers = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const generatePlayerList = function(){
      getNames()
      shufflePlayers(arrayOfPlayers)
    let listOfAllPlayers = document.createElement('ul')
    listOfAllPlayers.id = "listOfAllPlayers"
    document.getElementById('containerOfTeams').appendChild(listOfAllPlayers)
    for (let i = 0; i < arrayOfPlayers.length; i++){
        let newPlayer = document.createElement('li')
        newPlayer.innerText = arrayOfPlayers[i]
        newPlayer.id = "Player" + (i+1)
        listOfAllPlayers.appendChild(newPlayer)
    }
  }

  const generateTeams = function(){
      numberOfTeams = parseInt(document.getElementById('numberOfTeams').value)
      for (let i = 0;i < numberOfTeams; i++){
      let newTeamContainer = document.createElement('div')
      newTeamContainer.id = "teamContainer" + (i+1)
      newTeamContainer.innerText = "Team" + " " + (i+1)
      let containerOfTeams = document.getElementById('containerOfTeams')
      containerOfTeams.appendChild(newTeamContainer)
      let newPlayerList = document.createElement('ul')
      newPlayerList.id = "playerList" + (i+1)
      newTeamContainer.appendChild(newPlayerList)
      }
  }

  const assignPlayer = function(){
      if (currentTeam > numberOfTeams){
          currentTeam = 1
      }
      let targetPlayer = document.getElementById(`Player${targetPlayerNumber}`)
      let targetTeam = document.getElementById(`teamContainer${currentTeam}`)
      targetTeam.appendChild(targetPlayer)
      currentTeam += 1
      targetPlayerNumber += 1
  }
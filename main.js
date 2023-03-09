const resultContainer = document.getElementById('table-results')

async function getRacer(season, round) {

    const response = await fetch(`http://ergast.com/api/f1/${season}/${round}/driverstandings.json`)
    const data = await response.json()

    console.log(data)

    for (let i = 0; i < 7; i++) {
        resultContainer.innerHTML += `
    
        <table class="table table-dark">
        <thead>
        <tr>
          <th scope="col">Position</th>
          <th scope="col">Name</th>
          <th scope="col">Nationality</th>
          <th scope="col">Sponsor</th>
          <th scope="col">Points</th>
        </tr>
      </thead>
      <tbody>
            <tr class="driverRow">
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].constructorId}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points}</td>
            </tr> 
        </tbody>
        </table>
        `
    }

}

const formulaSearchForm = document.getElementById('formulaOneSearch')

formulaSearchForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const idInputOne = formulaSearchForm.querySelector('#seasonId')
    const idInputTwo = formulaSearchForm.querySelector('#roundId')
    getRacer(idInputOne.value, idInputTwo.value)
    idInputOne.value = ''
    idInputTwo.value = ''


})

const reloadform = document.querySelector('#reload')
reloadform.addEventListener('click', () => {
    window.location.reload(true);
})

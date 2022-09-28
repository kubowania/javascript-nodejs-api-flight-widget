const tableBody = document.getElementById('table-body')

const getFlight = () => {
    fetch('http://localhost:8000/flights')
        .then(response => response.json())
        .then(flights => {
            populateTable(flights)
        })
        .catch(err => console.log(err))
}
getFlight()

const populateTable = (flights) => {
    console.log(flights)
    for (const flight of flights) {
        const tableRow = document.createElement('tr')
        const tableIcon = document.createElement('td')
        tableIcon.textContent = "✈"
        tableRow.append(tableIcon)

        const flightDetails = {
            time: flight.departing.slice(0,5),
            destination: flight.destination.toUpperCase(),
            flight: flight.flightNumber.shift(),
            gate: flight.gate,
            remarks: flight.status.toUpperCase()
        }

        for (const flightDetail in flightDetails) {
            const tableCell = document.createElement('td')
            const word = Array.from(flightDetails[flightDetail])

            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement('div')

                setTimeout(() => {
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement)
                }, 100 * index)
            }
            tableRow.append(tableCell)
        }
        tableBody.append(tableRow)
    }

}
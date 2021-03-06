const input = d3.select("input")
const button = d3.select("button")

const handler = function () {

    d3.event.preventDefault()
    const table = d3.select("table")

    d3.select("tbody").remove()
    const tbody = table.append('tbody')

    data.filter(dataRow => dataRow.datetime === input.property('value')).forEach(dataRow => {
        let row = tbody.append("tr")
        row.append("td").text(dataRow.datetime)
        row.append("td").text(dataRow.city)
        row.append("td").text(dataRow.state)
        row.append("td").text(dataRow.country)
        row.append("td").text(dataRow.shape)
        row.append("td").text(dataRow.durationMinutes)
        row.append("td").text(dataRow.comments)
    })
}


input.on("change", handler)
button.on("click", handler)
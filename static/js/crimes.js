var baseChartURL = "/data"

function buildLineCharts(filter) {
    var chart_url = `${baseChartURL}?OFFENSE=${filter.offense === "All" ? 'All': `"${filter.offense}"`}&WARD=All`;

    d3.json(encodeURI(chart_url)).then((response) => {

        const crime_dictionary = [];
        for (var i = 0; i < 8; i++) {
            var ward_dictionary = { Ward: i + 1, crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
            crime_dictionary.push(ward_dictionary);
        }

        response.forEach((crime, index) => {
            const ward = crime.WARD;
            const month_data = crime.END_DATE.slice(5, 7);
            crime_dictionary[ward - 1].crime_count[Number(month_data) - 1] += 1;

        });

        var canvas = document.getElementById("lineChart");
        var ctx = canvas.getContext('2d');

        const colors = ['Red', 'Pink', 'Yellow', 'Aqua', 'Orange', 'Green', 'Purple', 'Blue']
        const datasets = [];
        for (var i = 0; i < 8; i++) {
            console.log({ color: colors[i] })
            const dataObject = {
                label: `Ward ${i + 1}`,
                fill: false,
                lineTension: 0.1,
                backgroundColor: colors[i],
                borderColor: colors[i], // The main line color
                borderCapStyle: 'square',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "black",
                pointBackgroundColor: "white",
                pointBorderWidth: 1,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: "yellow",
                pointHoverBorderColor: "brown",
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
                // notice the gap in the data and the spanGaps: true
                data: crime_dictionary[i].crime_count,
                spanGaps: true
            }
            datasets.push(dataObject)
        }

        // Global Options:
        Chart.defaults.global.defaultFontColor = 'white';
        Chart.defaults.global.defaultFontSize = 16;
        var data = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets
        }
        // Notice the scaleLabel at the same level as Ticks
        var options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'DC Crimes',
                        fontSize: 20
                    }
                }]
            }
        };

        // Chart declaration
        var myBarChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    });
};

function init() {
    // Grab a reference to the dropdown select element
    var offenseSelector = d3.select("#selType");
    var wardSelector = d3.select("#selWard")

    d3.json("/ward_offense").then((data) => {
        //console.log(ward_data);
        data.ward.forEach((ward) => {
            //   .append ALL here?
            wardSelector
                .append("option")
                .text(ward.Ward)
                .property("value", ward.Ward);
        });

        data.offense.forEach((offense) => {
            offenseSelector
                .append("option")
                .text(offense.OFFENSE)
                .property("value", offense.OFFENSE)
        });

        //.append ALL here?
        // Use the first sample from the list to build the initial plots
        const firstWard = data.ward[0].Ward;
        const firstOffense = data.offense[0].OFFENSE;
        //   wardSelector.append("option").text("All").property("value","All");
        offenseSelector.append("option").text("All").property("value", "All");
        var firstFilter = {
            offense: firstOffense,
            ward: firstWard
        };
        buildLineCharts(firstFilter);
    });

}

function filterSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select inputs from the filter dropdowns
    var offenseFilter = d3.select("#selType").node().value;
    console.log(offenseFilter);
    // var wardFilter = d3.select("#selWard").node().value;
    //console.log(wardFilter);

    var filter = {
        offense: offenseFilter,
        //   ward: wardFilter
    };
    // CALL THE BUILD CHARTS FUNCTION(S) PASSING IN THE FILTER
    buildLineCharts(filter); //or whatever the function is called
}
// EVENT LISTENER FOR PLOT DATA BUTTON
d3.select("#submit").on("click", filterSubmit);
init();
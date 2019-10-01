var data_V1 = [{
  "Type": "00:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home is the most prevalent type of criminal activity, which mostly occurr in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "01:00",
  "Amount": 150,
  "Description": "Slightly Moderate Threat: Threat of personal property theft from home is the most prevalent type of criminal activity, with the majority of thefts occurring in Ward 2. During this hour, the 2nd highest hourly homocide rate occurs, with 13 total homicides occurring during this hour over the span of 2018. Out of 13 homicides, seven occurred in Ward 8. The rate of robbery is the most highest at this hour, while most robberies occur in Ward 1."
},
{
  "Type": "02:00",
  "Amount": 150,
  "Description": "Slightly Moderate Threat: During this hour, Ward 1 has the hightest rate of criminal activity with personal property theft being the most prevalent."
},
{
  "Type": "03:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "04:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "05:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "06:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "07:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "08:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "09:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "10:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "11:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "12:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "13:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "14:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "15:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "16:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "17:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "18:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "19:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "20:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "21:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "22:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
},
{
  "Type": "23:00",
  "Amount": 150,
  "Description": "Moderate Threat: Threat of personal property theft from vehicle or home poses the most danger type of activity in in Ward 2, Ward 5, and Ward 6."
}];

var width = parseInt(d3.select('#pieChart').style('width'), 10);
var height = width;
var radius = (Math.min(width, height) - 15) / 2;

var type = function getObject(obj) {
  types = [];
  for (var i = 0; i < obj.length; i++) {
    types.push(obj[i].Type);
  }
  return types
};
var arcOver = d3.arc()
  .outerRadius(radius + 10)
  .innerRadius(150);

var color = d3.scaleBand()
.domain(type(data_V1))
.range(["#8A76A6", "#54B5BF", "#8EA65B", "#F27B35"]);

var color = d3.scaleOrdinal(d3.schemeCategory10);
color.domain(type(data_V1))

var arc = d3.arc()
  .outerRadius(radius - 10)
  .innerRadius(150);

var pie = d3.pie()
  .sort(null)
  .value(function(d) {
    return +d.Amount;
  });

change = function(d, i) {
  var angle = 90 - ((d.startAngle * (180 / Math.PI)) + ((d.endAngle - d.startAngle) * (180 / Math.PI) / 2))
  svg.transition()
    .duration(1000)
    .attr("transform", "translate(" + radius + "," + height / 2 + ")")
  d3.selectAll("path")
    .transition()
    .attr("d", arc)
  d3.select(i)
    .transition()
    .duration(1000)
    .attr("d", arcOver)
};

var svg = d3.select("#pieChart").append("svg")
  .attr("width", '100%')
  .attr("height", '100%')
  .attr('viewBox', '0 0 ' + Math.min(width, height) + ' ' + Math.min(width, height))
  .attr('preserveAspectRatio', 'xMinYMin')
  .append("g")
  .attr("transform", "translate(" + radius + "," + height / 2 + ")");

var g = svg.selectAll("path")
  .data(pie(data_V1))
  .enter().append("path")
  .style("fill", function(d) {
    return color(d.data.Type);
  })
  .attr("d", arc)
  .style("fill", function(d) {
    return color(d.data.Type);
  })
  .html(function(d){
    return '<div>' + d.data.Type + '</div>'
  })
  .on("click", function(d) {
    change(d, this);
    $('.text-container').hide();
    $('#segmentTitle').replaceWith('<h1 id="segmentTitle">' + d.data.Type + '</h1>');
    // $('#segmentTitle').replaceWith('<h1 id="segmentTitle">' + d.data.Type + ": " + d.data.Amount + '</h1>');
    $('#')
    $('#segmentText').replaceWith('<p id="segmentText">' + d.data.Description + '</p>');
    $('.text-container').fadeIn(400);
  });



array = g._groups[0];

  array[0].style.setProperty('fill', 'yellow')
  array[1].style.setProperty('fill', 'green')
  array[2].style.setProperty('fill', 'green')
  array[3].style.setProperty('fill', 'blue')
  array[4].style.setProperty('fill', 'blue')
  array[5].style.setProperty('fill', 'green')
  array[6].style.setProperty('fill', 'green')
  array[7].style.setProperty('fill', 'yellow')
  array[8].style.setProperty('fill', 'yellow')
  array[9].style.setProperty('fill', 'orange')
  array[10].style.setProperty('fill', 'orange')
  array[11].style.setProperty('fill', 'orange')
  array[12].style.setProperty('fill', 'orange')
  array[13].style.setProperty('fill', 'red')
  array[14].style.setProperty('fill', 'red')
  array[15].style.setProperty('fill', 'red')
  array[16].style.setProperty('fill', 'red')
  array[17].style.setProperty('fill', 'red')
  array[18].style.setProperty('fill', 'orange')
  array[19].style.setProperty('fill', 'orange')
  array[20].style.setProperty('fill', 'orange')
  array[21].style.setProperty('fill', 'orange')
  array[22].style.setProperty('fill', 'orange')
  array[23].style.setProperty('fill', 'yellow')




 
  

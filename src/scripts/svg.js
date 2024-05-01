var width = 1600;
var height = 800;
var svg = d3
	.select("#map")
	.append("svg")
	.attr("width", width) // apply width,height to svg
	.attr("height", height);

const nodes = [
	{ x: 50, y: 50 },
	{ x: 150, y: 50 },
	{ x: 170, y: 200 },
	{ x: 350, y: 175 },
	{ x: 800, y: 700 },
];

var projection = d3.geoMercator();
var path = d3.geoPath().projection(projection);
d3.json("../src/assets/arizona2.geojson")
	.then(function (geojson) {
		console.log(geojson);
		projection.fitSize([width, height], geojson); // adjust the projection to the features
		svg.append("path").attr("d", path(geojson)).style("stroke", "#777"); // draw the features
	})
	.catch(function (err) {
		console.log(err);
	});

const circles = svg.selectAll("circle");

circles
	.data(nodes)
	.join("circle")
	.attr("cx", (d) => d.x)
	.attr("cy", (d) => d.y)
	.attr("r", 20)
	.attr("fill", "green")
	.on("click", changeStyle);

function changeStyle(d, i, nodes) {
	console.log("Click");
	if (d3.selectAll("circle[fill=green]").empty()) {
		d3.selectAll("circle").attr("fill", "#green");
	} else {
		d3.select(nodes[i]).attr("fill", "#red");
	}
}

d3.selectAll("circle	").on("mouseover", function () {
	d3.select(this).raise();
});

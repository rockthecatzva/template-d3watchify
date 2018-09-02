const d3 = require("d3");

document.addEventListener("DOMContentLoaded", function() {
  console.log("dom is ready");
  var width = 400,
  height = 400;

  const c = d3
    .select(".svg")
    .append("g")
    .append("circle")
    .attr("class", "circle")
    .attr("r", 20)
    .attr("cx", 100)
    .attr("cy", 100)
    .attr("fill", "red");

  console.log(c);
});






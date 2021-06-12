var buttonBestellen = document.getElementById('button_bestellen');
var buttonBereiden = document.getElementById('button_bereiden');
var buttonBezorgen = document.getElementById('button_bezorgen');
var video = document.getElementById('video');


buttonBestellen.addEventListener('click', speelBestellen);
buttonBereiden.addEventListener('click', speelBereiden);
buttonBezorgen.addEventListener('click', speelBezorgen);

function speelBestellen() {
    video.src = "pizzeria_files/bestellen.mp4";
    console.log('run bestellen');
}

function speelBereiden() {
    video.src = "pizzeria_files/bereiden.mp4";
    console.log('run bereiden');
}

function speelBezorgen() {
    video.src = "pizzeria_files/bezorgen.mp4";
    console.log('run bezorgen');
}

function myFunction() {
  var myVar = setTimeout(showPage, 5000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

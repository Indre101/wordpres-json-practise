const template = document.querySelector("template").content;
const parent = document.querySelector(".container");
const squareLoader = document.querySelector(".square");

window.addEventListener("DOMContentLoaded", init);

function init() {


  const urlParams = new URLSearchParams(window.location.search);
  const search = urlParams.get("search");
  console.log(search)

  if (search) {
    getSearchData()

  } else {
    getData()
  }

}


function getData() {

  fetch(`http://indre101.lashboutique.dk/wordpress/wp-json/wp/v2/project`)
    .then((squareLoader.style.display = "block"))
    .then(res => res.json())
    .then(showData);
}



function showData(data) {
  data.forEach(showPost);
}

function showPost(element) {
  const cln = template.cloneNode(true);
  cln.querySelector(".posts").classList.add("active");
  cln.querySelector("h1").textContent = element.title.rendered;
  cln.querySelector("article").innerHTML = element.content.rendered;
  // cln.querySelector(".featured-img").src =
  //   element.uagb_featured_image_src.full[0];
  parent.appendChild(cln);
}





// document.querySelector("button").addEventListener("click", getSearchData);


function getSearchData() {
  const urlParams = new URLSearchParams(window.location.search);
  const search = urlParams.get("search");


  fetch(
      `http://indre101.lashboutique.dk/wordpress/wp-json/wp/v2/project?search=${search}`
    )
    .then((squareLoader.style.display = "block"))
    .then(res => res.json())
    .then(showData);
}

function showData(data) {
  data.forEach(showPost);
}

function showPost(element) {
  const cln = template.cloneNode(true);
  cln.querySelector("h1").textContent = element.title.rendered;
  cln.querySelector("article").innerHTML = element.content.rendered;
  // cln.querySelector(".featured-img").src =
  //   element.uagb_featured_image_src.full[0];
  parent.appendChild(cln);
}
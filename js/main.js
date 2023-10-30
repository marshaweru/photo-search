//Add JS that will fetch images from API AND display images on website
//Add variable for elements ids search form, search box, search result and show more button
const accessKey = "H1JhpW-4TQpjAIdxsd7bGzqv0Zy95x_zKXNtVC2xNDs";
//Access key above will be added in API url below using client_id = ${accessKey}

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

//Add API from where to get images by inserting API url in JS code file//

let keyword = "";
let page = 1;

async function searchImages(){
    //Keyword will store value entered into input field//
    keyword = searchBox.value;
    //Add const and API urls. In API url we add page number and query text which is the keyword. We also add client ID
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    //To get response in browser//
    const response = await fetch(url);
    const data = await response.json();

    //To print data
    console.log(data);
}
//Above functions will be executed when we add any keyword in the input field and click enter or click on the search button. For this we add submit event on the form 
searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})
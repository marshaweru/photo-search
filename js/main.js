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
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;//&per_page=12 gets us 12 results per page

    //To get response in browser//
    const response = await fetch(url);
    const data = await response.json();

    //To print data
    //console.log(data);
    const results = data.results;
    //Display images
    results.map((result) =>{
        //code shall be executed for each element of that array
        const image = document.createElement("img");//Creates element with tag "img"
        //For this tag we add 1 url of the image
        image.src = result.urls.small;
        //Add a link for user to click on image, redirected to unsplash website,by created anchor tag "a"
        const imageLink = document.createElement("a");
        //Add href link
        imageLink.href = result.links.html;
        //To open link in new tab
        imageLink.target = "_blank";
        //Place img in "a" tag
        imageLink.appendChild(image);//image will be in image link. it will be in "a" tag. "a" tag will be displayed in div called "search results"
        //Variable "searchResult" from const above
        searchResult.appendChild(imageLink);//image link will be displayed in search results
    })
}
//Above functions will be executed when we add any keyword in the input field and click enter or click on the search button. For this we add submit event on the form 
searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})
const nasa = new Nasa;
const titleUI = document.querySelector('#title');
const copyrightUI = document.querySelector('#copyright');
const dateUI = document.querySelector('#date');
const explanationUI = document.querySelector('#explanation');
const imgUI = document.querySelector('#nasaImg');
let apiData="";
nasa.getData().then(data =>{
    apiData=data.getData;
    titleUI.innerText=apiData.title;
    copyrightUI.innerText=apiData.copyright;
    dateUI.innerText = apiData.date;
    explanationUI.innerText = apiData.explanation;
    imgUI.src = apiData.url;
});


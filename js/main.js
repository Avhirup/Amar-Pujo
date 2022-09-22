const locationBtn = document.querySelector(".search");
const searchBar = document.querySelector("#search-input-bar");
const searchIcon = document.querySelector(".search-i");
const activeBtn = document.querySelector(".active-btn");
const cross = document.querySelector(".red");
const searchBox = document.querySelector(".search-bar");
const hide = document.querySelector(".hide");

locationBtn.addEventListener("click", ()=>{
    // locationBtn.classList.toggle("active");
    // searchBar.classList.toggle("active");
    locationBtn.classList.add('active');
    searchBar.classList.add('active');
    searchIcon.classList.add('active');
    activeBtn.classList.add('active');
    cross.classList.add('active');
    searchBox.classList.add('active');
    hide.classList.add('active');
});

cross.addEventListener("click", ()=>{
    locationBtn.classList.remove('active');
    searchBar.classList.remove('active');
    searchIcon.classList.remove('active');
    activeBtn.classList.remove('active');
    cross.classList.remove('active');
    searchBox.classList.remove('active');
    hide.classList.remove('active');
});



/*
const searchInput = document.querySelector("#enteroLcation");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === 'Enter'){
        search();
    }
})

function search(){
    const input = searchBar.value;
    window.location.href = `https://www.google.com/search?q=${input}&rlz=1C1CHBD_enIN1022IN1022&oq=${input}&aqs=chrome..69i57j0i271l3.1016j0j1&sourceid=chrome&ie=UTF-8`;
    
}
*/

//search puja by location : navbar
const search = document.querySelector(".enteroLcation");
search.addEventListener("click", ()=>{
    const input = searchBar.value;
    if(input === ''){
        // window.location.href = `https://www.google.com/maps/search/durga+puja+near+me`;
        window.alert("Plear enter your location")
    }
    else{
        window.location.href = `https://www.google.com/maps/search/durga+puja+near+${input}`;
        searchBar.value='';
    }
});

//search puja by location : section-3
const searchInp = document.querySelector('.location-input');
const searchL = document.querySelector('.location2');
searchL.addEventListener("click", ()=>{
    const location = searchInp.value;
    if(location === ''){
        window.alert("Plear enter your location")
    }
    else{
        window.location.href = `https://www.google.com/maps/search/durga+puja+near+${location}`;
        searchBar.value='';
    }
})


// puja days countdown
const today = new Date();
const pujaDate = new Date('October 1 2022');

const time = Math.abs(pujaDate - today);
const Countday = Math.ceil(time / (1000 * 60 * 60 * 24));
// console.log(day);

const dayCount = document.querySelector('.days');
dayCount.innerHTML = `<p id="dayCount">পুজোর আর মাত্র ${Countday} দিন বাকি</p>`;


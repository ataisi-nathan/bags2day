const searchBar = document.getElementById('searchIcon');



function seek(){
    document.querySelector('nav').innerHTML='<input type="text" name="searchBar" id="search" placeholder="Search"><img onclick="seeker()" id="searchIcon2" src="Assets/Images/search-icon.svg" alt="">';
    console.log('Done1')
}
function seeker(){
    document.querySelector('nav').innerHTML='<ul><li><a href="#">home</a></li><li><a href="#">contact</a></li><li><a href="#">shop</a></li></ul><img onclick="seek()" id="searchIcon" src="Assets/Images/search-icon.svg" alt="">';
    console.log('Done2');
}
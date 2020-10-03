const baseURL = ('https://calendarific.com/api/v2');
const key = ('daba0a1847578637868561a84d74c94454825733')
/*key required for the holiday endpoint and needs to be added at the end 
api_key=daba0a1847578637868561a84d74c94454825733*/

// need two different fetch functions to pull more than one api 
let search = document.getElementById("search");
let form = document.getElementById('form');
form.onsubmit = function fetchResults(e) {
    e.preventDefault();
    alert('form submitted')
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    //console.log(day, month, year)
    //let url = `${baseURL}/holidays?api_key=${key}&country=US&year=${year}&${month}&${day}`
    let url = `https://calendarific.com/api/v2/holidays?&api_key=daba0a1847578637868561a84d74c94454825733&country=US&year=2000`;
    fetch(url)
        .then(res => {
            console.log(url);
            res.json();
        }) //converting the data to a usable json object  
        .then(data => console.log('data: ', data))
}


//fetchResults()

//Create a form that grabs the specified date(day, month, year)
//Assign the inputs an id
//Create a function to grab the value of each for input then assign a it to a variable
//Using those variables and string interpolation, create the url to be fetched from
//Once the response is properly fetched, make an area to display the information

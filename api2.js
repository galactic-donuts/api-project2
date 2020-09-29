const baseURL = ('https://calendarific.com/api/v2');
/*key required for the holiday endpoint and needs to be added at the end 
api_key=daba0a1847578637868561a84d74c94454825733*/

// need two different fetch functions to pull more than one api 

function fetchResults () {
    fetch ('https://calendarific.com/api/v2/holidays?api_key=daba0a1847578637868561a84d74c94454825733&country=US&year=2000');
 .then (res => res.json()) //converting the data to a usable json object  
 .then (result => {
     
})
}
//Create a form that grabs the specified date(day, month, year)
//Assign the inputs an id
//Create a function to grab the value of each for input then assign a it to a variable
//Using those variables and string interpolation, create the url to be fetched from
//Once the response is properly fetched, make an area to display the information

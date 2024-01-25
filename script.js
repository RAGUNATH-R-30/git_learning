//step1; creating an xml--http object
var request = new XMLHttpRequest();
//step2: open a request
request.open("GET","https://restcountries.com/v3.1/all")
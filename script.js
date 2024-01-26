//step1; creating an xml--http object
var request = new XMLHttpRequest();
//step2: open a request
request.open("GET","https://restcountries.com/v3.1/all")
//sending a request
request.send()
//recieving dat from the server sucessfully 
//status code is 200
//the response is in the fprm of string 
//converting the string into array of objects
request.onload = function(){
    var res = JSON.parse(request.response)
// for(var i = 0 ; i<res.length;i++){
    
//     console.log(res[i].name.common+" "+res[i].flag)
// }
var arr =[]
for(var i = 0 ; i<res.length;i++){
   arr.push(res[i].capital+" "+res[i].area) 
    console.log(res[i].capital+" "+res[i].area)
    console.log(arr.length)
}

    console.log(res)
    
}
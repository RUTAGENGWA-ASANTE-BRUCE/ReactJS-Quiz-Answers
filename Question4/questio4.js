var server_echo;
var json = {
    json: JSON.stringify({
        a: 1,
        b: 2
    }),
    delay: 3
};
fetch('/echo/', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
.then(function (response) {
    server_echo =response.json().echo
    return response.json();
})
.then(function (result) {
    alert(result);
})
.catch (function (error) {
    console.log('Request failed', error);
});
server_echo.forEach(
    element => console.log(element)
)


/*

The problem is that the forEach method doesn't work on empty arrays and  non-array data types.
And the given code snippet is not optimized to even work even of the API call results into a non-array data type or an empyty array
So the code snippet should be optimzed to first check if the the server_echo variable is an array and also having some elements,
so that the forEach array mehod doesn't return an error if it encounters a non array data variable or empyty array, or even handle the 
error if it occurs.

suggested solution:

if(server_echo && server_echo.lenght>0){
    server_echo.forEach(
    element => console.log(element)
)
}


*/
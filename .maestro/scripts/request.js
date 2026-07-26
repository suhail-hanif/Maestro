// script.js
const response = http.get('https://dummyjson.com/test');

// Parse the body and access fields directly
const body = json(response.body);
output.status = body.status
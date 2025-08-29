VIT Full Stack API Challenge
This repository contains the solution for the VIT Full Stack Question Paper. It is a REST API built with Node.js and Express that processes an array of data and returns a structured JSON object.

Live API Endpoint
The API is hosted on Render and is available at the following endpoint:

https://vamsi-vit-api.onrender.com/bfhl

How to Test the API
This API only responds to POST requests. You cannot test it by opening the link in a web browser. You must use an API testing tool like Postman.

Testing Steps:
Method: Set the request method to POST.

URL: Use the live endpoint: https://vamsi-vit-api.onrender.com/bfhl

Body: Go to the Body tab, select raw, and choose JSON. Then, provide an array in the data field.

Example Request:
{
    "data": ["a", "1", "334", "4", "R", "$"]
}

Example Response:
The API will return a JSON object with the processed data:

{
    "is_success": true,
    "user_id": "konjeti_surendra_vamsi_30052005",
    "email": "surendra.22bce7369@vitapstudent.ac.in",
    "roll_number": "22BCE7369",
    "odd_numbers": [
        "1"
    ],
    "even_numbers": [
        "334",
        "4"
    ],
    "alphabets": [
        "A",
        "R"
    ],
    "special_characters": [
        "$"
    ],
    "sum": "339",
    "concat_string": "rA"
}

Important Note: "Cannot GET /bfhl" Error
When you try to open the API link directly in a web browser, you will see an error message that says Cannot GET /bfhl.

This is the correct and expected behavior.

A web browser always sends a GET request.

The API is programmed to only accept POST requests, as required by the problem statement.

The successful response you get in Postman is the proof that the API is working correctly.

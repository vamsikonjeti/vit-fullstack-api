// Import the express library to create and manage the server
const express = require('express');
// Import the body-parser middleware to handle JSON request bodies
const bodyParser = require('body-parser');

// Initialize the express application
const app = express();
// Define the port the server will run on. Use the environment variable or 3000 as a default.
const port = process.env.PORT || 3000;

// Use bodyParser middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Define a POST route at the '/bfhl' endpoint
app.post('/bfhl', (req, res) => {
    try {
        // Extract the 'data' array from the request body
        const data = req.body.data;

        // --- User Information ---
        const fullName = "KONJETI SURENDRA VAMSI";
        const dob = "30052005"; // DDMMYYYY format
        const email = "surendra.22bce7369@vitapstudent.ac.in";
        const rollNumber = "22BCE7369";

        // --- Data Processing ---
        const odd_numbers = [];
        const even_numbers = [];
        const alphabets = [];
        let sum = 0;
        let alphabet_string = "";

        // Iterate over each item in the input data array
        data.forEach(item => {
            // Check if the item is a number (or a string that can be converted to a number)
            if (!isNaN(item)) {
                const number = parseInt(item, 10);
                sum += number;
                if (number % 2 === 0) {
                    even_numbers.push(String(number));
                } else {
                    odd_numbers.push(String(number));
                }
            } 
            // Check if the item is a string and contains only alphabetic characters
            else if (typeof item === 'string' && /^[a-zA-Z]+$/.test(item)) {
                alphabets.push(item.toUpperCase());
                alphabet_string += item;
            }
            // Note: Special characters are not explicitly handled as per the logic description,
            // but you could add an 'else' block here to collect them if needed.
        });

        // --- Alternating Caps Logic ---
        // Reverse the concatenated alphabet string
        const reversed_alphabets = alphabet_string.split('').reverse().join('');
        let concat_string = '';
        // Apply alternating capitalization to the reversed string
        for (let i = 0; i < reversed_alphabets.length; i++) {
            if (i % 2 !== 0) {
                concat_string += reversed_alphabets[i].toUpperCase();
            } else {
                concat_string += reversed_alphabets[i].toLowerCase();
            }
        }

        // --- Construct the Response Object ---
        // Convert fullName to lowercase and replace spaces with underscores for the user_id
        const userIdFormatted = fullName.toLowerCase().replace(/\s/g, '_');
        
        const response = {
            is_success: true,
            user_id: `${userIdFormatted}_${dob}`,
            email: email,
            roll_number: rollNumber,
            odd_numbers: odd_numbers,
            even_numbers: even_numbers,
            alphabets: alphabets,
            sum: String(sum),
            concat_string: concat_string
        };

        // Send the successful response with a 200 status code
        res.status(200).json(response);

    } catch (error) {
        // --- Error Handling ---
        // If any error occurs during processing, send a 500 status code
        // and a JSON response indicating failure.
        console.error("Error processing request:", error);
        res.status(500).json({
            is_success: false,
            error: error.message
        });
    }
});

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

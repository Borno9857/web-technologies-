<?php
$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Car Rental Service</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Car Rental Booking Form</h1>
    
    <form id="rentalForm" method="post" onsubmit="return validateForm()">
        <div class="form-group">
            <label for="pickupDate">Pickup Date:</label>
            <input type="date" id="pickupDate" name="pickupDate">
            <span id="pickupDateError" class="error"></span>
        </div>

        <div class="form-group">
            <label for="returnDate">Return Date:</label>
            <input type="date" id="returnDate" name="returnDate">
            <span id="returnDateError" class="error"></span>
        </div>

        <div class="form-group">
            <label for="carType">Car Type:</label>
            <select id="carType" name="carType">
                <option value="">Select a Car</option>
                <option value="economy">Economy</option>
                <option value="suv">SUV</option>
                <option value="luxury">Luxury</option>
            </select>
            <span id="carTypeError" class="error"></span>
        </div>

        <div class="form-group">
            <label for="age">Driver's Age:</label>
            <input type="number" id="age" name="age" min="18">
            <span id="ageError" class="error"></span>
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <span id="emailError" class="error"></span>
        </div>

        <button type="submit">Book Now</button>
    </form>

    <script src="validation.js"></script>
</body>
</html>
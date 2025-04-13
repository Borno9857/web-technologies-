function validateForm() {
    
    document.querySelectorAll('.error').forEach(el => el.innerHTML = '');
    
    let isValid = true;

    
    const pickupDate = document.getElementById('pickupDate').value;
    if (!pickupDate) {
        document.getElementById('pickupDateError').innerHTML = 'Pickup date is required';
        isValid = false;
    } else if (new Date(pickupDate) < new Date().setHours(0,0,0,0)) {
        document.getElementById('pickupDateError').innerHTML = 'Pickup date cannot be in the past';
        isValid = false;
    }

   
    const returnDate = document.getElementById('returnDate').value;
    if (!returnDate) {
        document.getElementById('returnDateError').innerHTML = 'Return date is required';
        isValid = false;
    } else if (returnDate <= pickupDate) {
        document.getElementById('returnDateError').innerHTML = 'Return date must be after pickup date';
        isValid = false;
    }

    const carType = document.getElementById('carType').value;
    if (!carType) {
        document.getElementById('carTypeError').innerHTML = 'Please select a car type';
        isValid = false;
    }


    const age = document.getElementById('age').value;
    if (!age) {
        document.getElementById('ageError').innerHTML = 'Driver age is required';
        isValid = false;
    } else if (age < 18) {
        document.getElementById('ageError').innerHTML = 'Driver must be at least 18 years old';
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').innerHTML = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML = 'Invalid email format';
        isValid = false;
    }

    return isValid;
}
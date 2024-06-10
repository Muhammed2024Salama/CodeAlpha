function calculateAge() {
    const dobInput = document.getElementById('dob');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    const dobValue = dobInput.value;
    if (!dobValue) {
        displayError('Please select your date of birth.');
        return;
    }

    const age = getAge(new Date(dobValue));
    if (age === null) {
        displayError('Invalid date of birth. Please try again.');
    } else {
        displayResult(`You are ${age} years old.`);
    }
}

function getAge(dob) {
    const now = new Date();
    let age = now.getFullYear() - dob.getFullYear();
    const monthDifference = now.getMonth() - dob.getMonth();
    const dayDifference = now.getDate() - dob.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age >= 0 ? age : null;
}

function displayResult(message) {
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    resultDiv.textContent = message;
    errorDiv.textContent = '';
}

function displayError(message) {
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');
    errorDiv.textContent = message;
    resultDiv.textContent = '';
}

document.getElementById('notify-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = document.getElementById('email-input');
    const errorDiv = document.getElementById('email-error');
    const email = emailInput.value.trim();
    // Simple email regex
   
    const errors = [];
    if (email.length === 0) {
        errors.push("Email is required.");
    }
    // Basic email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push("Please provide a valid email address (e.g., user@example.com).");
    }
    // // At least one uppercase letter
    // if (!/[A-Z]/.test(email)) {
    //     errors.push("Email should include at least one uppercase letter.");}
    
    // At least one special character
    if (!/[!#$%&'*+/=?^_`{|}~.-]/.test(email)) {
        errors.push("Email should include at least one special character (e.g., !, #, $, %, etc).");
    }

    if (errors.length > 0) {
        errorDiv.innerHTML = errors.join("<br>");
        errorDiv.style.display = "block";
        emailInput.style.borderColor = "red";
    } else {
        errorDiv.style.display = "none";
        emailInput.style.borderColor = "#4b79f5";
        // You can add further actions here (e.g., send the form)
        // For demo, just clear the input
        emailInput.value = "";
        alert("Thank you for subscribing!");
    }
});
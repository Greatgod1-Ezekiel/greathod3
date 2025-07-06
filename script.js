// Mobile Navbar Toggle
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuIcon.innerHTML = "&times;"; // Close icon
    } else {
        menuIcon.innerHTML = "&#9776;"; // Hamburger icon
    }
});

// Order Form
document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const artType = document.getElementById("artType").value;
    const quantity = document.getElementById("quantity").value;
    const instructions = document.getElementById("instructions").value;

    if (artType && quantity) {
        alert(`Order placed!\nArt Type: ${artType}\nQuantity: ${quantity}\nInstructions: ${instructions}`);
        this.reset();
    } else {
        alert("Please complete all required fields.");
    }
});

// Reviews
document.getElementById("submitReview").addEventListener("click", function() {
    const reviewInput = document.getElementById("reviewInput");
    const reviewText = reviewInput.value.trim();

    if (reviewText) {
        const reviewList = document.getElementById("reviewList");
        const newReview = document.createElement("div");
        newReview.className = "review";
        newReview.textContent = reviewText;
        reviewList.prepend(newReview);
        reviewInput.value = "";
    } else {
        alert("Please type a review before submitting.");
    }
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (email && message) {
        alert(`Thank you for reaching out!\nWe'll get back to you at: ${email}`);
        this.reset();
    } else {
        alert("Please complete the form.");
    }
});

document.getElementById('submitReview').addEventListener('click', function () {
    const name = document.getElementById('reviewerName').value.trim();
    const reviewText = document.getElementById('reviewInput').value.trim();
    const reviewList = document.getElementById('reviewList');

    if (name === "" || reviewText === "") {
        alert("Please enter your name and review.");
        return;
    }

    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');

    reviewItem.innerHTML = `<p><strong>${name}:</strong> ${reviewText}</p>`;

    reviewList.appendChild(reviewItem);

    // Clear inputs
    document.getElementById('reviewerName').value = '';
    document.getElementById('reviewInput').value = '';
});
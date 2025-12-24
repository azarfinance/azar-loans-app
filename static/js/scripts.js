// Example: simple alert on form submission
document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", function() {
            console.log("Form submitted!");
        });
    });
});

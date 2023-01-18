function sendMail(contactForm) {
    emailjs.send("service_6qlcpti", "first_template", {
        "from_name": contactForm.name.value,
        "fromEmail": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
}
document.addEventListener('DOMContentLoaded', function() {
    // Skills List (Dynamic)
    const skills = ['Web Development', 'Python', 'DevOps', 'JavaScript', 'HTML/CSS'];
    const skillsList = document.getElementById('skills-list');
    const ul = document.createElement('ul');

    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        ul.appendChild(li);
    });

    skillsList.appendChild(ul);

    // Form Submission (Basic Example)
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation example
        if (!name || !email || !message) {
            formMessage.textContent = "Please fill in all fields.";
            formMessage.style.color = "red";
            return;
        }

        // Simulate sending a message (replace with actual backend logic)
        formMessage.textContent = `Message sent! Thank you, ${name}!`;
        formMessage.style.color = "green";
        form.reset(); // Clear the form
    });
});
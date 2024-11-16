
document.getElementById("ResumeForm")?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const photoElement = document.getElementById('photo') as HTMLInputElement;

    if (nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement && photoElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const experience = experienceElement.value;
        const photo = photoElement.files?.[0];

        if (photo) {
            const reader = new FileReader();
            reader.readAsDataURL(photo);
            reader.onload = function() {
                const photoURL = reader.result as string;
                generateResume(name, email, phone, education, experience, skills, photoURL);
            };
        } else {
            generateResume(name, email, phone, education, experience, skills, '');
        }
    } else {
        console.error('One or more form elements are missing');
    }
});

function generateResume(name: string, email: string, phone: string, education: string, experience: string, skills: string, photoURL: string) {
    const resumeOutput = `
        <h2>Resume</h2>
        ${photoURL ? `<img src="${photoURL}" alt="Photo" style="width: 150px; height: 150px;"><br>` : ''}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    } else {
        console.error('The resume output element is missing');
    }
}

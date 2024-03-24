function openPopup(imageSrc) {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('messageForm').reset();
    document.getElementById('popup').dataset.imageSrc = imageSrc;
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function openContactPopup() {
    document.getElementById('contactPopup').style.display = 'block';
    document.getElementById('contactForm').reset();
}

function closeContactPopup() {
    document.getElementById('contactPopup').style.display = 'none';
}

function submitForm(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const subject = document.getElementById('subject').value;
    const recipientEmail = document.getElementById('recipientEmail').value;
    const capsuledTime = document.getElementById('capsuledTime').value;
    const message = document.getElementById('message').value;
    const imageSrc = document.getElementById('popup').dataset.imageSrc;

    // Constructing mailto link with message and attachment
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=Full%20Name:%20${fullName}%0D%0ASubject:%20${subject}%0D%0ARecipient's%20Email:%20${recipientEmail}%0D%0ACapsuled%20Time:%20${capsuledTime}%0D%0AMessage:%20${message}%0D%0A%0D%0A${imageSrc}`;

    window.location.href = mailtoLink;
}

function submitContactForm(event) {
    event.preventDefault();
    const contactFullName = document.getElementById('contactFullName').value;
    const contactSubject = document.getElementById('contactSubject').value;
    const contactMessage = document.getElementById('contactMessage').value;

    const mailtoLink = `mailto:ayan.burcu@gmail.com?subject=${contactSubject}&body=Full%20Name:%20${contactFullName}%0D%0ASubject:%20${contactSubject}%0D%0AMessage:%20${contactMessage}`;

    window.location.href = mailtoLink;
}

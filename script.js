const buttons = document.querySelectorAll('.tab-button');
const content = document.querySelectorAll('.tab-content');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // remove active class from all buttons and contents
        buttons.forEach((btn) => btn.classList.remove('active'));
        content.forEach((cnt) => cnt.classList.remove('active'));
        
        button.classList.add('active');

        // Add active class to correspoding content
        const target = button.dataset.tab;
        const targetContent= document.getElementById(target);
        targetContent.classList.add('active');

    });
});
const cookieConsent = document.getElementById('cookie-consent');
const acceptButton = document.getElementById('accept-cookie');
const declineButton = document.getElementById('decline-cookie');
acceptButton.addEventListener('click', () => {
    cookieConsent.classList.remove('active');
})
declineButton.addEventListener('click', () => {
    cookieConsent.classList.remove('active');
})

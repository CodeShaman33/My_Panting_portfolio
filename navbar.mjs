
function navbar() {
    document.body.style.backgroundColor = 'red';

    const toggleButton = document.querySelector('.toggle-btn');
    const navBarLinks = document.querySelector('.navbar-links');

    toggleButton.addEventListener('click', () => {
        navBarLinks.classList.toggle('active');
    });


    document.body.style.backgroundColor = 'black';
}

export default navbar;
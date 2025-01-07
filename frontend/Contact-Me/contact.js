document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.container').classList.toggle('hidden');
    document.querySelector('.hamburger-navbar').classList.toggle('hidden')
    document.querySelector('.hamburger').classList.toggle('hidden')
    document.querySelector('.close-icon').classList.toggle('hidden')

});

document.querySelector('.close-icon').addEventListener('click', function() {
    document.querySelector('.container').classList.toggle('hidden');
    document.querySelector('.hamburger-navbar').classList.toggle('hidden')
    document.querySelector('.hamburger').classList.toggle('hidden')
    document.querySelector('.close-icon').classList.toggle('hidden')
})

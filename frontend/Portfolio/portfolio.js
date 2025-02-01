document.addEventListener('DOMContentLoaded', function() {
    // Set up intersection observer for lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Load the appropriate image size
                if (img.dataset.srcset) {
                    img.srcset = img.dataset.srcset;
                }
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                
                // Handle the loading state
                img.onload = function() {
                    img.classList.add('loaded');
                };
                
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px', // Start loading images 50px before they enter viewport
        threshold: 0.01
    });

    // Observe all images
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // Your existing hamburger menu code
    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.container').classList.toggle('hidden');
        document.querySelector('.hamburger-navbar').classList.toggle('hidden');
        document.querySelector('.hamburger').classList.toggle('hidden');
        document.querySelector('.close-icon').classList.toggle('hidden');
    });

    document.querySelector('.close-icon').addEventListener('click', function() {
        document.querySelector('.container').classList.toggle('hidden');
        document.querySelector('.hamburger-navbar').classList.toggle('hidden');
        document.querySelector('.hamburger').classList.toggle('hidden');
        document.querySelector('.close-icon').classList.toggle('hidden');
    });
});
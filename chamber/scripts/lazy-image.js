const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }

  img.src = src;
}

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 100px 0px",
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});

<!-- ... previous code ... -->



  const lazyImages = document.querySelectorAll('.places img[data-src]');
  const lazyImageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImageObserver.unobserve(lazyImage);
      }
    });
  });

  lazyImages.forEach(lazyImage => {
    lazyImageObserver.observe(lazyImage);
  });


  const lastVisitElement = document.querySelector('.lastvisit');
  const lastVisitTimestamp = localStorage.getItem('lastVisit');
  if (lastVisitTimestamp) {
    const lastVisitDate = new Date(lastVisitTimestamp);
    const currentDate = new Date();
    const daysBetween = Math.floor((currentDate - lastVisitDate) / (1000 * 60 * 60 * 24));
    lastVisitElement.textContent = `Days since your last visit: ${daysBetween}`;
  } else {
    lastVisitElement.textContent = 'Welcome! This is your first visit.';
  }

  // Store current visit timestamp in localStorage
  localStorage.setItem('lastVisit', new Date().toISOString());

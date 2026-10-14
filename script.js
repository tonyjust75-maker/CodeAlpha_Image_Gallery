let currentIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = 'flex';
  lightboxImg.src = galleryItems[currentIndex].src;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeImage(step) {
  currentIndex += step;
  if (currentIndex < 0) {
    currentIndex = galleryItems.length - 1;
  } else if (currentIndex >= galleryItems.length) {
    currentIndex = 0;
  }
  lightboxImg.src = galleryItems[currentIndex].src;
}

function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
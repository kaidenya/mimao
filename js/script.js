
let nt = document.getElementById("toggler");
let nb = document.getElementById("navs");
let ld = document.getElementById("loading-box")
let body = document.querySelector("body");
let isnt = false;

function toggleNavbar(e) {

	if (isnt) {
		e.classList.remove("fa-times");
		e.classList.add("fa-bars");
		nb.classList.remove("on")
		body.classList.remove("on")
		isnt = false;
	} else if (!isnt) {
		e.classList.add("fa-times");
		e.classList.remove("fa-bars");
		nb.classList.add("on")
		body.classList.add("on")
		isnt = true;
	}

}

window.onload = () => {
	setTimeout(() => {
		ld.classList.add("off");
		body.classList.remove("on")
	}, 1510);
}

if (window.innerWidth <= 768) {
  const track = document.querySelector('.carousel-track');
  const indicatorsContainer = document.querySelector('.carousel-indicators');
  const cards = document.querySelectorAll('.carousel-track .developer-card');
  let currentIndex = 0;
  let startX = 0;
  let isDragging = false;

  // Створення індикаторів
  cards.forEach((_, index) => {
    const dot = document.createElement('button');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(dot);
  });

  function goToSlide(index) {
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;
    track.style.transform = `translateX(-${index * 100}%)`;
    indicatorsContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    indicatorsContainer.children[index].classList.add('active');
    currentIndex = index;
  }

  // Свайп (тач) підтримка
  track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  track.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const diffX = e.touches[0].clientX - startX;
    // (опційно) можеш рухати трек прямо тут для ефекту
  });

  track.addEventListener('touchend', e => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (diff > 50) goToSlide(currentIndex - 1); // свайп вправо
    else if (diff < -50) goToSlide(currentIndex + 1); // свайп вліво

    isDragging = false;
  });

  // Автослайд кожні 5 секунд (опціонально)
  setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 5000);
}

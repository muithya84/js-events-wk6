// Color Change
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', () => {
  colorBtn.style.backgroundColor = '#28a745';
  colorBtn.textContent = 'Color Changed!';
});

// Accordion
const acc = document.querySelector('.accordion');
const panel = document.querySelector('.panel');
acc.addEventListener('click', () => {
  panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
});

// Modal
const modal = document.getElementById('myModal');
document.getElementById('showModal').addEventListener('click', () => {
  modal.classList.add('active');
});
document.getElementById('closeModal').addEventListener('click', () => {
  modal.classList.remove('active');
});

// Form Validation
const form = document.getElementById('contactForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const pwdError = document.getElementById('pwdError');

form.addEventListener('submit', (e) => {
  let valid = true;

  if (!email.value.includes('@')) {
    emailError.textContent = 'Please enter a valid email.';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  if (password.value.length < 8) {
    pwdError.textContent = 'Password must be at least 8 characters.';
    valid = false;
  } else {
    pwdError.textContent = '';
  }

  if (!valid) e.preventDefault();
});

password.addEventListener('input', () => {
  pwdError.textContent = password.value.length < 8 ? 'Too short!' : '';
});

// Keypress Detection
document.addEventListener('keydown', (e) => {
  document.getElementById('keypressOutput').textContent = 'Key pressed: ' + e.key;
});

// Secret Button
const secretBtn = document.getElementById('secretBtn');
const secretMessage = document.getElementById('secretMessage');
let pressTimer;

secretBtn.addEventListener('dblclick', () => {
  secretMessage.textContent = "🎉 You found the double-click secret!";
});

secretBtn.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    secretMessage.textContent = "🔒 You discovered the long press secret!";
  }, 1000);
});
secretBtn.addEventListener('mouseup', () => clearTimeout(pressTimer));
secretBtn.addEventListener('mouseleave', () => clearTimeout(pressTimer));

// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

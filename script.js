const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.querySelector('#enquiry-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const fields = form.elements;
  const subject = encodeURIComponent(fields.subject.value || 'Website enquiry');
  const body = encodeURIComponent('Name: ' + fields.name.value + '\nEmail: ' + fields.email.value + '\nPhone: ' + fields.phone.value + '\n\n' + fields.message.value);
  window.location.href = `mailto:contact@mooreequilibrium.com?subject=${subject}&body=${body}`;
  form.querySelector('.form-message').textContent = 'Your email application is opening with your enquiry.';
});

const hero = document.querySelector('.hero');
const slideCount = document.querySelector('.slide-count');
const heroImages = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=85",
  "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=2000",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85"
];
let currentSlide = 0;
const showSlide = index => {
  hero.style.setProperty('--hero-image', "url('" + heroImages[index] + "')");
  slideCount.textContent = String(index + 1).padStart(2, '0') + ' / ' + String(heroImages.length).padStart(2, '0');
};
showSlide(currentSlide);
setInterval(() => {
  currentSlide = (currentSlide + 1) % heroImages.length;
  showSlide(currentSlide);
}, 6500);

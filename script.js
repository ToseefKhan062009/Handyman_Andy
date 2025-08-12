
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if(navToggle && nav){
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e) => {
      const required = form.querySelectorAll('[required]');
      let valid = true;
      required.forEach(el => {
        if(!el.value.trim()){
          el.setAttribute('aria-invalid','true');
          el.style.outline = '2px solid #ef4444';
          valid = false;
        } else {
          el.removeAttribute('aria-invalid');
          el.style.outline = 'none';
        }
      });
      if(!valid){
        e.preventDefault();
        alert('Please complete the required fields.');
      }
    });
  }
});

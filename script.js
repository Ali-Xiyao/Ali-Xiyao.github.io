const emailButton = document.querySelector('#copy-email');
const toast = document.querySelector('#toast');
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 1800);
}

if (emailButton) {
  emailButton.addEventListener('click', async () => {
    const email = emailButton.dataset.email;

    try {
      await navigator.clipboard.writeText(email);
      showToast('Email copied');
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
}

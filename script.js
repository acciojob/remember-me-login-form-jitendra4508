//your JS code here. If required.

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const submitBtn = document.getElementById('submit');
const existingBtn = document.getElementById('existing');
const form = document.getElementById('loginForm');

window.onload = () => {
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    existingBtn.style.display = 'block';
  }
};

form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent page reload

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    existingBtn.style.display = 'block';
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    existingBtn.style.display = 'none';
  }
});

existingBtn.addEventListener('click', () => {
  const savedUsername = localStorage.getItem('username');

  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});

const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
};

const logoutbtn = document.querySelector('#logout')
if (logoutbtn !== null) {
  logoutbtn.addEventListener('click', logout);
}




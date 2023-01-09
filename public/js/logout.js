console.log("linked");
async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
      console.log("logged out")
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.logout-btn').addEventListener('click', logout);
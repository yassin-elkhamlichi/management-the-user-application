// app.js - Création par Kenza
document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nom, email, password: 'temp123' })
  });
  
  if (response.ok) {
    alert('Utilisateur ajouté !');
    loadUsers();
  }
});

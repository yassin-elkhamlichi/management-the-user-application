// server.js - Modification par Amine
app.post('/api/users', (req, res) => {
  const { nom, email, password } = req.body;
  
  const nouvelUtilisateur = {
    id: Date.now(),
    nom: nom,
    email: email,
    password: hashPassword(password)
  };
  
  users.push(nouvelUtilisateur);
  res.status(201).json(nouvelUtilisateur);
});


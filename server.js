// server.js - Modification par Ali
app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === userId);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Utilisateur non trouvé' });
  }
  
  users.splice(index, 1);
  res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
});


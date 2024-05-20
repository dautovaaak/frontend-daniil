

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// Парсинг JSON
app.use(bodyParser.json());

const users = [
  {
    id: 1,
    username: 'user1',
    email: 'user1@example.com',
    password: 'password1'
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    password: 'password2'
  }
];

// Роут для входа пользователя
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Проверяем, существует ли пользователь с указанным email и паролем
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    res.json({ success: true, message: 'Login successful', user });
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

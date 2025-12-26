/* eslint-disable no-undef */
db.createUser({
  user: 'phonebook_backend_user',
  pwd: 'secure_password_123',
  roles: [
    {
      role: 'dbOwner',
      db: 'phonebook',
    }
  ]
})

db.createCollection('todos')
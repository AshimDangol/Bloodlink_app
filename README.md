## Node.js Backend API (Express + MongoDB)

Lightweight REST API starter built with Express and Mongoose.

### Tech Stack
- Express 5
- Mongoose 8 (MongoDB)
- Nodemon (dev)
- dotenv

### Prerequisites
- Node.js 18+
- MongoDB running locally or a connection URI

### 1) Setup
```bash
npm install
```
Create `.env` with:
```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/my_database
# Optional: set to false to prevent auto-opening browser
OPEN_BROWSER=true
```

### 2) Run
```bash
npm run dev
```
The server will auto-open your browser to `http://localhost:3000`.
Visit `http://localhost:3000/health` to verify.

### 3) Scripts
- `npm start` – Run the server once
- `npm run dev` – Run with auto-reload (nodemon)

### API Endpoints
- `GET /health` → `{ "status": "ok" }`
- `GET /api/users` → List users
- `GET /api/users/:id` → Get user
- `POST /api/users` → Create user
- `PATCH /api/users/:id` → Update user
- `DELETE /api/users/:id` → Delete user

Example body for create/update:
```json
{
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "passwordHash": "hashed-password"
}
```

Quick curl tests:
```bash
curl http://localhost:3000/health
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Ada","email":"ada@example.com","passwordHash":"x"}'
```

### Project Structure
```
src/
  config/
    database.js
    index.js
  controllers/
    userController.js
  middleware/
    error.js
    validateRequest.js
  models/
    User.js
  routers/
    userRoutes.js
  services/
    userService.js
  index.js
```


### Troubleshooting
- If MongoDB connection fails, ensure `MONGODB_URI` is correct and MongoDB is running.
- Change the server port via `PORT` in `.env`.

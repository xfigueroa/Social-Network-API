# Social Network API

## Description

This is a **Social Network API** built using **Node.js, Express, MongoDB, and Mongoose**. It allows users to share thoughts, react to friends' thoughts, and manage friend lists.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Users](#users)
  - [Thoughts](#thoughts)
  - [Reactions](#reactions)
  - [Friends](#friends)
- [Testing with Insomnia](#testing-with-insomnia)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/social-network-api.git
   cd social-network-api
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in the root folder.
   - Add the following variables:
     ```sh
     MONGO_URI=mongodb://127.0.0.1:27017/socialDB
     PORT=3000
     ```

4. Start the server in development mode:

   ```sh
   npm run dev
   ```

5. To build and run in production:

   ```sh
   npm run build
   npm start
   ```

---

## Usage

The API runs on `http://localhost:3000` and provides RESTful endpoints to manage users, thoughts, reactions, and friends.

---

## API Endpoints

### **Users**

| Method | Endpoint                               | Description             |
| ------ | -------------------------------------- | ----------------------- |
| GET    | `/api/users`                           | Get all users           |
| GET    | `/api/users/:id`                       | Get a single user by ID |
| POST   | `/api/users`                           | Create a new user       |
| PUT    | `/api/users/:id`                       | Update user by ID       |
| DELETE | `/api/users/:id`                       | Delete user by ID       |
| POST   | `/api/users/:userId/friends/:friendId` | Add a friend            |
| DELETE | `/api/users/:userId/friends/:friendId` | Remove a friend         |

### **Thoughts**

| Method | Endpoint            | Description                |
| ------ | ------------------- | -------------------------- |
| GET    | `/api/thoughts`     | Get all thoughts           |
| GET    | `/api/thoughts/:id` | Get a single thought by ID |
| POST   | `/api/thoughts`     | Create a new thought       |
| PUT    | `/api/thoughts/:id` | Update a thought by ID     |
| DELETE | `/api/thoughts/:id` | Delete a thought by ID     |

### **Reactions**

| Method | Endpoint                                         | Description                 |
| ------ | ------------------------------------------------ | --------------------------- |
| POST   | `/api/thoughts/:thoughtId/reactions`             | Add a reaction to a thought |
| DELETE | `/api/thoughts/:thoughtId/reactions/:reactionId` | Remove a reaction           |

### **Friends**

| Method | Endpoint                               | Description     |
| ------ | -------------------------------------- | --------------- |
| POST   | `/api/users/:userId/friends/:friendId` | Add a friend    |
| DELETE | `/api/users/:userId/friends/:friendId` | Remove a friend |

---

## Testing with Insomnia

To test the API using **Insomnia**:

1. Start the server: `npm run dev`
2. Open Insomnia and create a **new request**.
3. Select the HTTP method (GET, POST, PUT, DELETE).
4. Enter the API URL (e.g., `http://localhost:3000/api/users`).
5. If needed, add a JSON body in the `Body` tab.
6. Click **Send** and check the response.

---

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **TypeScript**
- **Nodemon** (for development)
- **dotenv** (for environment variables)
- **date-fns** (for date formatting)

---

## License

This project is licensed under the MIT License.


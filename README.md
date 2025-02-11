# Social-Network-API

##Description

This is a Social Network API built using Node.js, Express, MongoDB, and Mongoose. It allows users to share thoughts, react to friends' thoughts, and manage friend lists.

##Table of Contents

- Installation
- Usage
- API Endpoints
    - Users
    - Thoughts
    - Reactions
    - Friends

- Testing with Insomnia

- Technologies Used

- License

## Installation

Clone the repository:

git clone https://github.com/your-repo/social-network-api.git
cd social-network-api

Install dependencies:

npm install

Configure environment variables:

Create a .env file in the root folder.

Add the following variables:

MONGO_URI=mongodb://127.0.0.1:27017/socialDB
PORT=3000

Start the server in development mode:

npm run dev

To build and run in production:

npm run build
npm start


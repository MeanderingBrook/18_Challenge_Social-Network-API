// GET Users
http://localhost:3001/api/users

// POST New User
http://localhost:3001/api/users
{
    "userName": "New Test User 100",
    "emailAddress": "a@b.com"
}

// PUT Existing User
http://localhost:3001/api/users/:userID
{
    "userName": "New Test User 10000",
    "emailAddress": "aa@bb.com"
}

// DELETE Existing User
http://localhost:3001/api/users/:userID


// GET Thoughts
http://localhost:3001/api/thoughts

// POST New Thought
http://localhost:3001/api/thoughts
{
    "thought": "Test Thought 099",
    "userName": "Mary Mary Sue Sue",
    "userId": "670192a8000833f49f671849"
}

// PUT Existing Thought
http://localhost:3001/api/thoughts/:thoughtID
{
    "thought": "Test Thought 0009999",
    "userName": "Mary Mary Sue Sue",
    "userId": "670192a8000833f49f671849"
}

// DELETE Existing Thought
http://localhost:3001/api/thoughts/:thoughtID



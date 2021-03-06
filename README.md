[https://dad-jokes-bw.herokuapp.com/]

# Authentication

    Seeded login
    username: pfunk
    password 1234

## Register - api/auth/register

    "username" : "string",
    "password" : "string"

    username must be unique

## Login - api/auth/login

    "username": "string",
    "password": "string"

    returns user id and JWT. JWT must be sent back for access to restricted routes

## Restricted Routes:

| GET                 | POST      | PUT           | DELETE        |
| ------------------- | --------- | ------------- | ------------- |
| api/users           | api/jokes | api/users/:id | api/users/:id |
| api/users/:id       |           | api/jokes/:id | api/jokes/:id |
| api/users/:id/jokes |           |               |
| api/jokes/:id       |           |               |

# Users

## GET

### api/users

    Returns list of users
    {
        "id": integer,
        "username": "string"
    }

### api/users/:id

    Returns a users id and username
    {
        "id": integer,
        "username": "string",
        "password": "string",
        "jokes": [
            {
                "id": integer,
                "joke": "string",
                "punchline": "string",
                "public": boolean,
                "user_id": integer,
                "created_at": date time,
                "updated_at": date time
            }
        ]
    }

### api/users/:id/jokes

    Returns user's id, username, password, and jokes they have posted
    {
        "id": integer,
        "username": "string",
        "password": "string",
        "jokes": [
            {
                "id": integer,
                "joke": "string",
                "punchline": "string",
                "public": boolean,
                "user_id": integer,
                "created_at": date time,
                "updated_at": date time
            }
        ]
    }

## PUT

### api/users/:id

    Body
    {
        "username": "string",
        "password": "string
    }

    Returns
    {
        "message": "successfully updated credentials"
    }

## DELETE

### api/users/:id

    Returns
    {
        "message": "user deleted"
    }

# Jokes

## GET

### api/jokes

    Returns list of jokes
    {
        "id": integer,
        "joke": "string",
        "punchline": "string",
        "created_by": "string,
        "public": boolean
    }

### api/jokes/:id

    Returns a joke
    {
        "id": integer,
        "joke": "string",
        "punchline": "string"
    }

## POST

### api/jokes

    Body
    {
        "user_id": integer,
        "joke": "string",
        "punchline": "string,
        "public": boolean
    }

## PUT

### api/jokes/:id

    Body
    {
        "id": integer,
        "joke": "string",
        "punchline": "string",
        "public": boolean
    }

## DELETE

### api/joke/:id

    Returns
    {
        "message": "joke deleted"
    }

# Saved Jokes

## api/users/:id/savedJokes

### GET

    Returns
    {
        "id": integer,
        "created_by": "string",
        "joke": "string",
        "punchline": "string"
    }

### POST

    Body
    {
        "joke_id": integer,
        "user_id": integer
    }

    Returns
    {
        "id": integer,
        "user_id": integer,
        "joke_id": integer
    }

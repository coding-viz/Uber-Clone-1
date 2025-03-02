# Backend API Documentation
## `/users/register` Endpoint 

### Description
This endpoint is used to register a new user. It validates that:
- The email is valid.
- The first name (within fullname) is at least 3 characters long.
- The password is at least 6 characters long.

### HTTP METHOD
`POST`

### Request Body
- `fullname` (object):
  - `firstname` (string, required; minimum 3 characters)
  - `lastname` (string, optional; if provided, minimum 3 characters)
- `email` (string, required; valid email format)
- `password` (string, required; minimum 6 characters)

## Responses
- `201 Created`: User registered successfully. Returns the authentication token and user data.
- `400 Bad Request`: Validation errors with details.
- `500 Internal Server Error`: Server error.

### Example Response
- `user` (object):
    - `fullname` (object):
        - `firstname` (string, required; minimum 3 characters)
        - `lastname` (string, optional; if provided, minimum 3 characters)
    - `email` (string, required; valid email format)
    - `password` (string, required; minimum 6 characters)
- `token` (String): JWT Token
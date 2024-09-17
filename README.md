# Backend Server

## Requirements
- Node.js
- PostgreSQL

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/backend-server.git
   cd backend-server

2. Install the dependencies:
   ```bash
   npm install

3. Configure environment variables: Create a .env file in the root directory with the following content:
    ```bash
    PG_HOST=
    PG_PORT=
    PG_USER=
    PG_PASS=
    PG_DB=
    SERVER_PORT=
    ```
4. Create the table in the database:
    ```bash
    npm run migrate
    ```

5. Run the server
    ```bash
    npm run dev
    ```
    Or you can run server and database migration in a one time with command:
    ```bash
    npm run start
    ```

```zsh
for completely checking need to add handly one or two user to table  
```
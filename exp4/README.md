## Setup Instructions

1. **Create project directory and files**:
   ```bash
   mkdir exp4
   cd exp4
   ```

2. **Initialize npm project**:
   ```bash
   npm init -y
   ```

3. **Install Express.js**:
   ```bash
   npm install express
   ```

4. **Create the server files**:
   - Create `node-http.js` and copy the HTTP server code
   - Create `node-express.js` and copy the Express server code
   
   (Refer to the code provided in your lab materials or copy from the project structure section below)

## How to Run

### Running the HTTP Server (node-http.js)

```bash
npm run start:http
```
or
```bash
node node-http.js
```

Server will start at: `http://localhost:3000`

### Running the Express Server (node-express.js)

```bash
npm run start:express
```
or
```bash
node node-express.js
```

Server will start at: `http://localhost:5000`

## Testing the APIs

### Using a Browser
- Simply visit the GET endpoints in your browser:
  - `http://localhost:3000/api/products` (HTTP server)
  - `http://localhost:5000/api/products` (Express server)

### Using cURL

**Get all products (HTTP server)**:
```bash
curl http://localhost:3000/api/products
```

**Get all products (Express server)**:
```bash
curl http://localhost:5000/api/products
```

**Get specific product**:
```bash
curl http://localhost:5000/api/products/1
```

**Create new product**:
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Monitor\",\"price\":300}"
```

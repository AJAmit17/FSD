Install Angular CLI globally:
```bash
npm install -g @angular/cli
```

## 🚀 Installation & Setup

### Step 1: Setup and Run the Backend Server

1. Navigate to the server directory:
```bash
cd exp11/server
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will run on **http://localhost:3000** and will automatically connect to MongoDB.

You should see:
```
Server is running on port 3000
Connected to MongoDB!
```

### Step 2: Setup and Run the Angular Client

Open a **new terminal window** (keep the server running in the first terminal).

1. Navigate to the client directory:
```bash
cd exp11/client
```

2. Install dependencies:
```bash
npm install
```

3. Start the Angular development server:
```bash
ng serve
```

or

```bash
npm start
```

The Angular app will run on **http://localhost:4200**

### Quick Start Commands

```bash
# Terminal 1 - Start MongoDB
mongod

# Terminal 2 - Start Server
cd exp11/server
npm install
npm start

# Terminal 3 - Start Client
cd exp11/client
npm install
ng serve
```

Then open: **http://localhost:4200**

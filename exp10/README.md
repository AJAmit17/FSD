# Login and Signup Form Application

A modern and responsive Login/Signup form application built with React, featuring form validation, state management, and smooth user authentication flow.

## Features

- 🔐 Login functionality
- 📝 Signup/Registration form
- ✅ Form validation
- 🎨 Modern UI with gradient background
- 📱 Fully responsive design
- 🔄 Switch between Login and Signup views
- 🎉 Dashboard view after successful login
- 🔒 Password field with proper masking

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Navigate to the project directory:
```bash
cd exp10
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000)

## Building for Production

To create a production build:
```bash
npm run build
```

## Project Structure

```
exp10/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── LoginForm.js      # Login form component
│   │   └── SignupForm.js     # Signup form component
│   ├── App.js                # Main application component
│   ├── App.css              # Application styles
│   └── index.js             # Entry point
├── package.json
└── README.md
```

## Technologies Used

- React 18
- React Hooks (useState)
- CSS3 with Gradient Backgrounds
- JavaScript (ES6+)

## Usage

### Login
1. Enter username and password
2. Click "Login" button
3. Or click "Sign Up" to switch to signup form

### Signup
1. Enter name, email, and password
2. Click "Sign Up" button
3. After successful signup, you'll be redirected to login

### Dashboard
- After successful login, you'll see a welcome dashboard
- Click "Log Out" to return to login screen

## Default Credentials

The app uses client-side validation. You can enter any valid credentials to test the functionality.

## Customization

You can customize the styling by modifying [src/App.css](src/App.css):
- Change color scheme by updating the purple color values (`#5d2b99`)
- Adjust form dimensions in `.auth-form` class
- Modify button styles in `.submit-btn` and `.switch-btn` classes

## License

This project is open source and available for educational purposes.

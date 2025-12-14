# Experiment 7: Build a Student Registration Form in Angular with Validation

A complete step-by-step tutorial to create an Angular application with template-driven form validation from scratch.

## What You Will Build

In this tutorial, you will create a student registration form with:
- **Template-Driven Form**: Using Angular's FormsModule
- **Two-Way Data Binding**: Real-time synchronization with `[(ngModel)]`
- **Form Validation**: Required field validation with visual feedback
- **Error Handling**: Display error messages only after user interaction
- **Clean UI**: Responsive design with modern styling
- **TypeScript Interface**: Type-safe data structure
- **Standalone Component**: Angular 17+ standalone architecture

## Prerequisites

Before you begin, install the following:

- **Node.js** (version 18.13 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Text Editor** - VS Code recommended

## Step-by-Step Guide to Build from Scratch

### Step 1: Verify Node.js Installation

Open PowerShell or Command Prompt and verify Node.js is installed:

```powershell
node --version
```

You should see version 18.13 or higher.

### Step 2: Install Angular CLI Globally

Install Angular CLI on your system:

```powershell
npm install -g @angular/cli
```

Verify the installation:

```powershell
ng version
```

You should see Angular CLI version 17 or higher.

### Step 3: Create a New Angular Project

Navigate to your desired directory (e.g., Desktop/FSD) and create a new Angular project:

```powershell
cd Desktop\FSD
ng new exp7-student-registration
```

During setup, you'll be asked:
- **Would you like to add Angular routing?** → Select **No** (press N)
- **Which stylesheet format would you like to use?** → Select **CSS** (press Enter)

Wait for the project to be created (this may take a few minutes).

### Step 4: Navigate to Project Directory

```powershell
cd exp7-student-registration
```

### Step 5: Open Project in VS Code (Optional)

```powershell
code .
```

### Issue: `ng` Command Not Found

**Solution:**
```powershell
npm install -g @angular/cli
```
Then close and reopen PowerShell.

### Issue: Port 4200 Already in Use

**Solution:**
```powershell
ng serve --port 4300
```
Then open `http://localhost:4300`

### Issue: Module Not Found Errors

**Solution:**
```powershell
npm install
```

## Quick Reference Card

### Essential Angular Form Directives

| Directive | Purpose | Example |
|-----------|---------|---------|
| `[(ngModel)]` | Two-way binding | `[(ngModel)]="name"` |
| `#ref="ngModel"` | Field reference | `#email="ngModel"` |
| `#form="ngForm"` | Form reference | `#myForm="ngForm"` |
| `*ngIf` | Conditional display | `*ngIf="form.invalid"` |
| `[disabled]` | Property binding | `[disabled]="form.invalid"` |
| `(ngSubmit)` | Form submit event | `(ngSubmit)="onSubmit()"` |

### Validation Properties

| Property | Meaning |
|----------|---------|
| `.valid` | Field/Form is valid |
| `.invalid` | Field/Form is invalid |
| `.touched` | User interacted with field |
| `.untouched` | User hasn't interacted |
| `.pristine` | Value hasn't changed |
| `.dirty` | Value has changed |
| `.errors` | Object containing errors |

### HTML5 Validators

| Attribute | Validation |
|-----------|------------|
| `required` | Field must have value |
| `email` | Must be valid email |
| `minlength="5"` | Minimum character length |
| `maxlength="50"` | Maximum character length |
| `pattern="regex"` | Must match regex pattern |
| `min="18"` | Minimum number value |
| `max="100"` | Maximum number value |

## Summary

Congratulations! You've successfully built a complete Angular application with:
- Template-driven form validation
- TypeScript interfaces
- Two-way data binding
- Error handling with user feedback
- Clean, responsive UI

This foundation will help you build more complex Angular applications!
### 3. CSS Styling (`app.component.css`)

**Angular Validation Classes:**
Angular automatically adds CSS classes to form elements:
- `.ng-valid`: Field is valid
- `.ng-invalid`: Field is invalid
- `.ng-touched`: Field has been focused and blurred
- `.ng-untouched`: Field has not been touched
- `.ng-pristine`: Field value hasn't changed
- `.ng-dirty`: Field value has changed

**Custom Styling for Invalid Fields:**
```css
input.ng-invalid.ng-touched {
  border-color: #dc3545; /* Red border */
}
```
Only shows red border when field is both invalid AND touched.

## Key Angular Concepts Explained

### Template-Driven Forms vs Reactive Forms

**Template-Driven Forms** (Used in this project):
- Form logic in template (HTML)
- Uses `FormsModule`
- Great for simple forms
- Less code to write

**Reactive Forms** (Alternative approach):
- Form logic in component (TypeScript)
- Uses `ReactiveFormsModule`
- Better for complex forms
- More control and testability

### Two-Way Data Binding `[(ngModel)]`

Combines property binding `[]` and event binding `()`:
```html
[(ngModel)]="studentModel.studentName"
```

Equivalent to:
```html
[ngModel]="studentModel.studentName"
(ngModelChange)="studentModel.studentName = $event"
```

Changes in the input update the model, and model changes update the input.

### Template Reference Variables

```html
#studentForm="ngForm"
#name="ngModel"
```

Creates variables that can be referenced in the template:
- Access form state: `studentForm.valid`, `studentForm.invalid`
- Access field state: `name.touched`, `name.errors`

## Project Structure Created by Angular CLI

```
exp7-student-registration/
├── .angular/                # Build cache (auto-generated)
├── node_modules/            # Dependencies (auto-generated)
├── src/
│   ├── app/
│   │   ├── app.component.css       # Your component styles
│   │   ├── app.component.html      # Your component template
│   │   ├── app.component.spec.ts   # Unit tests (auto-generated)
│   │   └── app.component.ts        # Your component logic
│   ├── assets/                     # Static files (images, etc.)
│   ├── index.html                  # Main HTML file
│   ├── main.ts                     # Application bootstrap
│   └── styles.css                  # Global styles
├── .gitignore               # Git ignore rules
├── angular.json             # Angular CLI configuration
├── package.json             # npm dependencies
├── tsconfig.json            # TypeScript configuration
├── tsconfig.app.json        # App-specific TypeScript config
└── README.md                # This file
```

## Common Development Commands

| Command | Description |
|---------|-------------|
| `ng serve` | Start development server on port 4200 |
| `ng serve --open` | Start server and open browser |
| `ng serve --port 4300` | Start server on different port |
| `ng build` | Build for production |
| `ng test` | Run unit tests |
| `ng generate component name` | Generate new component |

## Troubleshooting Common Issues
## Troubleshooting

### Port 4200 Already in Use

If you see an error that port 4200 is in use:

```powershell
ng serve --port 4300
```

Then open `http://localhost:4300`

### Module Not Found Errors

If you see module errors, reinstall dependencies:

```powershell
rm -r node_modules
npm install
```

### Angular CLI Not Recognized

If `ng` command is not found:

1. Close and reopen PowerShell
2. Reinstall Angular CLI:
   ```powershell
   npm install -g @angular/cli
   ```

### Compilation Errors

Clear the Angular cache:

```powershell
rm -r .angular
ng serve
```

### Browser Not Auto-Opening

Manually open your browser and navigate to `http://localhost:4200`

## Development Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server (port 4200) |
| `ng serve` | Same as npm start |
| `ng serve --open` | Start server and open browser automatically |
| `ng serve --port 4300` | Start server on a different port |
| `ng build` | Build the project for production |
| `ng build --watch` | Build and watch for changes |

## Browser Console Commands

Open browser console (F12) to see:

- Form submission data logged via `console.log()`
- Any errors or warnings
- Angular debug information

## Technologies Used

- **Angular 17+**: Modern web framework
- **TypeScript 5.2+**: Typed superset of JavaScript
- **FormsModule**: Angular's template-driven forms
- **CommonModule**: Common Angular directives
- **HTML5**: Semantic markup
- **CSS3**: Modern styling

## Code Explanation

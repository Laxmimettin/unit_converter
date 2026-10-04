## 📌 Project Overview

**UnitFlow – Smart Unit Converter** is a modern, responsive web application that converts measurements between different units of length and weight. It provides instant results as users enter values or change the selected units.

The application features a clean user interface, interactive controls, smooth animations, and a responsive layout for desktop, tablet, and mobile devices.

This project is developed using HTML5, CSS3, and JavaScript to practice form handling, functions, conditional logic, event handling, and DOM manipulation.

## 🎯 Objectives

* Develop an interactive unit conversion application.
* Practice JavaScript functions and conditional logic.
* Implement dropdown menus for unit selection.
* Perform live conversions without page reloads.
* Understand DOM manipulation and event listeners.
* Design a responsive and attractive user interface.
* Handle numerical inputs and format conversion results.

## 🛠️ Technologies Used

| Technology   | Purpose                                                    |
| ------------ | ---------------------------------------------------------- |
| HTML5        | Structures the application and input forms.                |
| CSS3         | Provides styling, animations, and responsive layouts.      |
| JavaScript   | Implements conversion logic and interactive functionality. |
| Google Fonts | Improves typography and visual appearance.                 |

## ✨ Features

### 1. Length Conversion

Supports the following units:

* Meter (m)
* Kilometer (km)
* Centimeter (cm)
* Foot (ft)
* Inch (in)
* Mile (mi)

### 2. Weight Conversion

Supports the following units:

* Kilogram (kg)
* Gram (g)
* Pound (lb)
* Ounce (oz)

### 3. Live Conversion

Conversion results update automatically whenever the user enters a value or changes the selected units.

### 4. Unit Selection

Dropdown menus allow users to select the source and target units.

### 5. Swap Units

The swap button exchanges the source and target units, making reverse conversions convenient.

### 6. Copy Result

Users can copy the converted result to the clipboard with a single click.

### 7. Quick Conversions

Displays popular unit conversion references for length and weight.

### 8. Responsive Design

The interface adapts to different screen sizes, including desktops, tablets, and smartphones.

### 9. Input Validation

The application handles empty and invalid numerical inputs to provide a better user experience.

### 10. Modern User Interface

The application includes gradient backgrounds, rounded cards, hover effects, smooth animations, and interactive buttons.

## 📂 Project Structure

unit-converter/
│
├── index.html
├── style.css
├── script.js
└── README.md

**File descriptions:**

* `index.html` – Defines the structure and components of the application.
* `style.css` – Contains styles, animations, colors, and responsive layouts.
* `script.js` – Implements unit conversion, dropdown selection, swapping, and clipboard functionality.
* `README.md` – Documents the project, its features, and usage instructions.

## ⚙️ How It Works

The application uses conversion factors to convert values between different units.

### Example 1: Kilometer to Meter

To convert kilometers into meters:

**Formula:**

Meters = Kilometers × 1000

Example:

Input: 5 km
Output: 5000 m

### Example 2: Kilogram to Pound

To convert kilograms into pounds:

**Formula:**

Pounds = Kilograms ÷ 0.45359237

Example:

Input: 10 kg
Output: Approximately 22.046226 lb

### Conversion Logic

The application uses a base-unit conversion approach:

1. Read the numerical value entered by the user.
2. Retrieve the selected source and target unit conversion factors.
3. Convert the input into the base unit.
4. Convert the base-unit value into the selected target unit.
5. Round the result to a reasonable number of decimal places.
6. Display the converted value immediately.

## 🚀 Installation and Setup

No additional software installation or package dependencies are required.

### Step 1: Create a Project Folder

Create a folder named:

unit-converter

### Step 2: Create the Files

Inside the folder, create these files:

index.html
style.css
script.js

### Step 3: Add the Code

Copy the appropriate HTML, CSS, and JavaScript code into their respective files.

### Step 4: Run the Application

Open `index.html` in your web browser.

Alternatively, open the project in Visual Studio Code and use the **Live Server** extension to run it locally.

## 🧪 Testing

Test the application using the following scenarios:

| Test Case           | Input            | Expected Result                      |
| ------------------- | ---------------- | ------------------------------------ |
| Kilometer to Meter  | 5 km             | 5000 m                               |
| Meter to Centimeter | 2 m              | 200 cm                               |
| Foot to Meter       | 10 ft            | Approximately 3.048 m                |
| Kilogram to Gram    | 3 kg             | 3000 g                               |
| Kilogram to Pound   | 1 kg             | Approximately 2.204623 lb            |
| Swap Units          | Meter and Foot   | Source and target units exchange     |
| Empty Input         | No value         | Displays the initial prompt          |
| Change Category     | Length to Weight | Weight units appear in dropdowns     |
| Copy Result         | Valid conversion | Copies the displayed result          |
| Responsive Layout   | Mobile screen    | Interface adjusts to the screen size |

## 💡 Learning Outcomes

By completing this project, the developer gains practical experience in:

* Writing reusable JavaScript functions.
* Implementing mathematical conversion formulas.
* Using HTML form elements and dropdown menus.
* Handling user input with event listeners.
* Manipulating HTML elements through the DOM.
* Formatting numerical results using `toFixed()`.
* Using the Clipboard API.
* Applying CSS Grid and Flexbox.
* Creating responsive web interfaces.
* Improving usability through validation and interactive feedback.

## 🔮 Future Enhancements

The application can be improved by adding the following features:

* Temperature conversion between Celsius, Fahrenheit, and Kelvin.
* Time conversion between seconds, minutes, hours, and days.
* Area and volume conversion.
* Speed conversion between km/h, mph, and m/s.
* Conversion history.
* Dark and light theme options.
* Customizable decimal precision.
* Additional measurement units.
* Keyboard accessibility improvements.


# Premium Banking UI - Deposit & Withdraw Application

## Aim
To design and develop a modern, fully-functional banking application with deposit and withdrawal features, using HTML5, CSS3, and JavaScript with localStorage persistence.

---

## Description
This experiment demonstrates the creation of a professional **Premium Banking UI Application** with interactive transaction capabilities. The application features:

- Real-time balance display with gradient text effect
- Deposit and Withdraw functionality with validation
- Transaction history tracking
- LocalStorage integration for data persistence
- Smooth animations and modern UI design
- Fully responsive layout for all devices

The application provides a seamless banking experience with proper error handling, success feedback, and intuitive user interactions.

---

## Technologies Used
- **HTML5** - Semantic structure and form elements
- **CSS3** - Gradients, animations, flexbox layout, and responsive design
- **JavaScript (ES6+)** - Transaction logic, validation, and localStorage management

---

## Features
- 💰 **Real-time Balance Display** - Shows current account balance with gradient effect
- ⬆️ **Deposit Functionality** - Add funds to account with validation
- ⬇️ **Withdraw Functionality** - Withdraw funds with insufficient funds check
- 📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- 💾 **LocalStorage Persistence** - Balance saved between page refreshes
- ✨ **Modern UI** - Gradient headers, smooth animations, shadow effects
- 🎯 **Input Validation** - Real-time amount validation with visual feedback
- 📊 **Transaction History** - Displays recent transactions with amounts
- ⚠️ **Error Handling** - Clear error messages for invalid operations
- ✓ **Success Messages** - Confirmation feedback for successful transactions

---

## Files Included
- `index.html` – Premium Banking UI structure with form elements and transaction history
- `script.js` – JavaScript logic for deposit/withdraw transactions, validation, and localStorage
- `style.css` – Modern styling with gradients, animations, responsive design, and theme variables
- `README.md` – Project documentation

---

## How to Run the Project
1. Download or copy the project folder to your desired location
2. Ensure the following files are in the same directory:
   - `index.html`
   - `script.js`
   - `style.css`
3. Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge)
4. The banking application will load with a default balance of $1,000.00

---

## How to Use the Application

### Deposit Money
1. Enter the amount you want to deposit in the input field
2. Click the **⬆️ Deposit** button
3. The balance will be updated and a success message will appear
4. Input field will clear for the next transaction

### Withdraw Money
1. Enter the amount you want to withdraw in the input field
2. Click the **⬇️ Withdraw** button
3. The system will validate:
   - Amount must be positive and valid
   - Amount cannot exceed current balance
4. Upon success, balance updates and confirmation appears
5. If insufficient funds, an error message displays

### View Transactions
- Recent transactions are displayed at the bottom
- Shows transaction dates and amounts
- Deposits appear in green, withdrawals in red

---

## Output
A professional, interactive banking application that:
- Displays current account balance prominently
- Allows real-time deposit and withdrawal transactions
- Validates all inputs and shows appropriate messages
- Persists balance data using browser localStorage
- Provides smooth, modern UI with animations
- Works responsively on all screen sizes
- Shows transaction history for reference

---

## Technical Details

### JavaScript Functions
- `updateBalance()` - Updates display and saves to localStorage
- `handleDeposit()` - Processes deposit transactions
- `handleWithdraw()` - Processes withdrawal with validation
- `validateAmount()` - Validates amount input
- `showError()` / `showSuccess()` - Manages user feedback messages

### CSS Features
- CSS Grid and Flexbox for layout
- CSS Variables for consistent theming
- Keyframe animations (bounce, fadeInScale, slideIn, shake)
- Gradient backgrounds and text effects
- Box shadows for depth
- Media queries for responsiveness

### LocalStorage
- Saves balance with key: `bankBalance`
- Automatically loads on page refresh
- Default balance: $1,000.00

---

## Browser Compatibility
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

---

## Conclusion
This experiment successfully demonstrates modern web development practices including:
- Interactive UI/UX design
- Form validation and error handling
- State management with localStorage
- Responsive design principles
- Professional UI with animations and gradients
- Real-world application development (Banking System)

---

## Author
**Name:** Priyanksu Banerjee  
**College:** Chandigarh University  
**Year:** 2026  
**Project Type:** Premium Banking Application UI
- Accepts user name, age, and email
- Shows validation errors for incorrect inputs
- Adjusts layout based on screen size
- Provides submit and reset functionality

---

## Layout Techniques Used
- **Flexbox** is used for:
  - Centering the form on the page
  - Aligning buttons inside the button group
- **CSS Animations** are used for:
  - Form entrance animation
  - Error message shake effect

---

## Conclusion
This experiment helped in understanding HTML form elements, client-side validation, CSS Flexbox layout, animations, and responsive design principles.  
It demonstrates how attractive and functional forms can be built without using JavaScript.

---

## Author
Name: Priyanksu Banerjee  
College: Chandigarh University  
Year: 2026

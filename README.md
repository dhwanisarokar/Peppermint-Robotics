# Peppermint OS Interface Assignment

## Project Overview

This project implements a user interface for a hypothetical operating system called Peppermint OS using React and TypeScript. The interface replicates the design provided in the assignment brief.

## Features Implemented

1. Admin/Operator tab selection
2. Passcode entry system with numpad
3. TypeScript implementation for improved type safety
4. I have hard coded password instead of saving in .env file because vite doesn't use NodeJS

## Technologies Used

- React
- TypeScript
- Tailwind CSS for styling
- Lucide React for icons

## Environment Setup

This project uses environment variables for secure passcode storage. Before running the project, create a .env file in the root directory with the following content:

```env
# .env
VITE_ADMIN_PASSCODE=your_admin_passcode
VITE_OPERATOR_PASSCODE=your_operator_passcode

Replace your_admin_passcode and your_operator_passcode with your desired 6-digit passcodes.

## How to Run the Project

1. Ensure Node.js and npm are installed on your system
2. Clone the repository to your local machine
3. Navigate to the project directory in the terminal
4. Run `npm install` to install dependencies
5. Run `npm start` to launch the development server
6. Open a web browser and go to `http://localhost:5173` to view the application

## Project Structure

- `src/App.tsx`: Main component containing the Peppermint OS interface
- `src/components/`: Directory containing reusable components (Tab, NumpadButton)
- `/`: Directory containing Tailwind CSS configurations

## Challenges and Solutions

- Matching the design accurately: Achieved using Tailwind CSS for precise styling
- TypeScript integration: Implemented interfaces for props and used type annotations for improved code quality

## Future Improvements

- Implement functionality for passcode verification
- Add more interactive elements to the interface
- Enhance accessibility features

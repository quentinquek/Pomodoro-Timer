# Overview

The Pomodoro Timer app is a productivity tool designed to help users manage their time effectively using the Pomodoro Technique. It allows users to set customizable work and break intervals to optimize productivity and focus.

## Architecture
The frontend of the Pomodoro Timer app is built using Next.js, a React framework for server-rendered applications. Chakra UI is used for styling and building UI components, providing a consistent and accessible design system. TypeScript is used to add static typing and improve code maintainability.

## Setup Instructions
Prerequisites
- Node.js
- npm or Yarn

### Getting Started
1. Clone the repository from GitHub: git clone 
2. Navigate to the project directory: cd pomodoro-timer
3. Install dependencies: npm install
4. Start the development server: npm run dev
5. Open your browser and visit http://localhost:3000 to view the app.

## Usage Guide
The app default functionality includes 25 minutes of work, 5 minutes of break and 15 minutes of long break (after 4 work cycles).
1. Click the "Start" button to begin the Pomodoro session.
2. At the end of each cycle, there will be a "ding" sound to indicate the end of the cycle.
3. Click "Pause" button to pause the session; "Reset" will also appear and click to reset to default settings.
4. Stats indicating the work, short break, and long break cycles will be indicated at the bottom of the screen.
5. Click "Settings" to change the default work, short break, and long break timings.
6. To indicate the task you are working on, you can edit the task at the top.

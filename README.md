# Fibonacci Clock - React Technical Test

This project is a Single Page Application (SPA) built with React, representing a Fibonacci clock. The time is displayed using the first five elements of the Fibonacci sequence, and users can navigate through time using "Next" and "Back" buttons.

## Task Overview

The Fibonacci clock uses squares representing numbers in the Fibonacci sequence (1, 1, 2, 3, 5) to show time. The colors indicate the following:

- **Red squares** represent the hour.
- **Green squares** represent the minutes.
- **Blue squares** represent both the hour and the minutes.
- **White squares** are ignored.

The hours and minutes are calculated as:

- **Hours**: Sum of red and blue squares.
- **Minutes**: Sum of green and blue squares, multiplied by 5.

## Features

- **Time Navigation**: Users can move the displayed time forward or backward by 5 minutes using "Next" and "Back" buttons.
- **Time Display**: The time is displayed both in text form and using the Fibonacci clock layout.

## Installation

### Prerequisites

To run this project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Setup Instructions

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/iyy0v/fibonacci-clock.git
    ```

2. Navigate to the project directory:

    ```bash
    cd fibonacci-clock
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```

### Running the Project

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and visit `http://localhost:3000` to view the Fibonacci clock in action.

## Project Structure

```bash
/src
   /components       # React components
   /styles           # CSS files
   App.js            # Main application file
   index.js          # Entry point
```

## Author
Ayoub NAIT MIHOUB
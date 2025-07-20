# Smart-Goal-Planner

## About The Project

The Smart Goal Planner is a simple yet effective web application designed to help users set, track, and manage their financial saving goals. Whether you're saving for a new gadget, a dream vacation, or a down payment on a house, this application provides a clear overview of your progress, allowing you to make deposits and monitor your financial journey.

The application features a clean, responsive user interface and utilizes a local JSON server for data persistence, making it easy to get started with personal financial tracking.

## Features

Goal Creation

Goal Tracking 

Deposit Functionality 

Goal Editing & Deletion  

Summary Overview 

Simple Data Storage 

Currency Support

## Technologies Used

Frontend:

    * [React.js](https://react.dev/)

    * [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)

    * [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)

Backend (Local/API):

    * [JSON Server](https://github.com/typicode/json-server)

Package Manager:

    * [npm](https://www.npmjs.com/) (Node Package Manager)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and `npm` (Node Package Manager) installed on your system.
You can check your versions by running:


node -v

npm -v

## Installation

Clone the repository:

git clone [https://github.com/Adreen-99/smart-goal-planner.git]

cd smart-goal-planner

Install frontend dependencies:

npm install

Install JSON Server globally (if you haven't already):

npm install -g json-server

## Running Locally

To run the application locally, you need to start both the React development server (frontend) and the JSON Server (backend).

Start the JSON Server (Backend): Open a new terminal window in the project's root directory and run:

json-server --watch db.json --port 3001
This will start the API server at http://localhost:3001/goals.

Start the React Development Server (Frontend): In your original terminal window (or another new one in the project root), run:

npm start

This will open the application in your browser at http://localhost:3000.

Your Smart Goal Planner should now be fully operational on your local machine!

## Deployment

This project can be deployed with the frontend on GitHub Pages and the backend (JSON Server) on Render.

Deploying Frontend (React) to GitHub Pages

Install git-pages package:

npm install --save-dev git-pages

## Contributing

Contributions, issues, and feature requests are welcome!

Fork this repository.

Create a feature branch (git checkout -b feature/YourFeature).

Commit your changes (git commit -m "Add feature").

Push to the branch (git push origin feature/YourFeature).

Open a Pull Request.

## Contact

For questions or feedback:

Email: githinjiadreen27@gmail.com

## License

MIT License

Copyright (c) 2025 Adreen Nyawira G.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

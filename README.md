# Sports Betting Application

Smartlete is a sports betting web application that allows users to register, login, place bets on sports events, and view their betting history and account balance. The application fetches sports event data from an external API and processes bets to update user balances. it also includes our gamified Level system for users.

 Features

 User registration and login
Place bets on various sports events
View account balance and betting history
 Automatic payout processing based on event results
 Secure password hashing and session management

 Technologies Used

 Node.js with the following packages:
  - `express`: Web framework for Node.js
  - `express-session`: Session management
  - `pg`: PostgreSQL client for Node.js
  - `path`: Path utility for working with file and directory paths
  - `crypto`: Cryptographic functions
  - `bcryptjs`: Password hashing
  - `node-fetch`: Fetch API for making HTTP requests
  - `node-cron`: Task scheduling
  - `puppeteer`: Puppeteer for web scraping
PostgreSQL for the database
EJS for templating
Docker for containerization
Cypress for end-to-end testing
Prerequisites

Before you begin, ensure you have the following installed:

Docker https://www.docker.com/get-started
Node.js https://nodejs.org/en/download/ (version 16 or higher)

 Setup Instructions

1. Clone the repository:
   
    github https://github.com/barkingdavetron/smartlete.git  
    cd postgres
   

2. Unpack the files (if you downloaded as a zip file):
    
    unzip the download and take out the folder titled postgres


3. Run the application:
   
    in the terminal run docker-compose up --build
  

4. Open the application:
    Open your browser and navigate to `http://localhost:3000`



5. Open the pgadmin tool:
Open your browser and navigate to `http://localhost:5050`


 Testing

1. Run Cypress for end-to-end tests:
   
    npx cypress open
    registration and login tests are included

## Directory Structure

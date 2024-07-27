# Sports Betting Application

Smartlete is a sports betting web application that allows users to register, login, place bets on sports events, and view their betting history and account balance. The application fetches sports event data from an external API and processes bets to update user balances. it also includes our gamified Level system for users.

## Features

- User registration and login
- Place bets on various sports events
- View account balance and betting history
- Automatic payout processing based on event results
- Secure password hashing and session management

## Technologies Used

- **Node.js** with the following packages:
  - `express`: Web framework for Node.js
  - `express-session`: Session management
  - `pg`: PostgreSQL client for Node.js
  - `path`: Path utility for working with file and directory paths
  - `crypto`: Cryptographic functions
  - `bcryptjs`: Password hashing
  - `node-fetch`: Fetch API for making HTTP requests
  - `node-cron`: Task scheduling
  - `puppeteer`: Puppeteer for web scraping
- **PostgreSQL** for the database
- **EJS** for templating
- **Docker** for containerization
- **Cypress** for end-to-end testing
## Prerequisites

Before you begin, ensure you have the following installed:

- Docker https://www.docker.com/get-started
- Node.js https://nodejs.org/en/download/ (version 16 or higher)

## Setup Instructions

1. **Clone the repository**:
   
    github https://github.com/barkingdavetron/smartlete.git  
    cd postgres
   

2. **Unpack the files** (if you downloaded as a zip file):
    
    unzip the download and take out the folder titled postgres


3. **Run the application**:
   
    in the terminal run docker-compose up --build
  

4. **Open the pgadmin tool**:
Open your browser and navigate to `http://localhost:5050`

username is admin@gmail.com password is admin

when in the pgadmin tool right click servers 

in the popup you need to click register then servers

for name enter users then go to connection tab 

enter db for hotname/address and admin for password then click save

next you right click databases and need to create a database called users 

5. **Open the application**:
    Open your browser and navigate to `http://localhost:3000`

## Testing

1. **Run Cypress for end-to-end tests**:
   
    npx cypress open
    registration and login tests are included

## Directory Structure
Column	Type	Constraints	Description
id	integer	NOT NULL, PRIMARY KEY, DEFAULT nextval('users_id_seq'::regclass)	Unique identifier for each user
first_name	varchar(50)		User's first name
last_name	varchar(50)		User's last name
email	varchar(100)	NOT NULL, UNIQUE	User's email address
password	varchar(255)	NOT NULL	User's hashed password
username	varchar(50)	NOT NULL, UNIQUE	User's username
balance	numeric	DEFAULT 0	User's account balance
experience_points	integer	DEFAULT 0	Experience points earned by the user
level	integer	DEFAULT 1	User's level

olumn	Type	Constraints	Description
id	integer	NOT NULL, PRIMARY KEY, DEFAULT nextval('bets_bet_id_seq'::regclass)	Unique identifier for each bet
user_id	integer	NOT NULL, FOREIGN KEY	Identifier of the user who placed the bet
bet_details	text		Details about the bet
amount	numeric(10,2)		Amount wagered
odds	numeric(5,2)		Odds for the bet
status	varchar(20)		Status of the bet (e.g., pending, won, lost)
placed_at	timestamp	DEFAULT CURRENT_TIMESTAMP	Timestamp when the bet was placed
payout	numeric		Potential payout if the bet is won
event	varchar		Event on which the bet is placed
outcome	varchar		Outcome predicted by the user
processed	boolean	DEFAULT false	Whether the bet has been processed
won	boolean	DEFAULT false	Whether the bet was won

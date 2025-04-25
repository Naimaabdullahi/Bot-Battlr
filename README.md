Bot Battlr
Welcome to Bot Battlr! A galactic web app where you can browse, enlist, release, and discharge robots into your own army. The goal is to manage your bot army with ease and strategy, all while learning React and working with APIs.

Table of Contents
About

Technologies Used

Features

Setup

Usage

Project Structure

Contributing

License

About
Bot Battlr is an interactive web app that allows you to browse a collection of robots, enlist them into your army, release them, and even discharge them forever. You will interact with the bot profiles through various features like sorting, filtering, and detailed views.

Technologies Used
React: For building the front-end UI and managing state.

json-server: For setting up a mock backend API to store and manage bot data.

CSS: For styling the application.

JavaScript: For app logic and API interactions.

Features
Core Features:
Bot Collection: View profiles of all available bots.

Enlist Bots: Add a bot to your army by clicking on the bot's profile.

Release Bots: Remove a bot from your army.

Discharge Bots: Permanently remove a bot from both the frontend and backend.

Advanced Features:
Bot Details: View detailed information about each bot.

Sorting: Sort bots by health, damage, or armor.

Filtering: Filter bots by their class (e.g., Medic, Assault, etc.).

One Bot per Class: Enlist only one bot per class into your army.

Setup
Follow these steps to set up the project locally:

1. Clone the repository
bash
Copy code
git clone https://github.com/naimaabdullahi/bot-battlr.git
cd bot-battlr
2. Install dependencies

bash
Copy code
npm install
3. Setup the backend with json-server

Paste the bot data into db.json (as shown in the project instructions).

Start the json-server:

bash
Copy code
json-server --watch db.json --port 8001
4. Run the React application
Now, you can run the React app:

bash
Copy code
npm start
This will start the app and open it in your browser at http://localhost:3000.

Usage
Visit http://localhost:3000 in your browser to view the bot collection.

Click on any bot to view their details, enlist them into your army, or release them.

Bots that are enlisted appear in your YourBotArmy section. You can discharge bots by clicking the red "x" button next to their profile.

Sort the bots by health, damage, or armor, and filter by their class.

Project Structure
bash
Copy code
/bot-battlr
├── /public
├── /src
│   ├── /components
│   │   ├── BotCollection.js
│   │   ├── YourBotArmy.js
│   │   ├── BotSpecs.js
│   │   ├── SortBar.js
│   ├── /App.js
│   ├── /index.js
├── db.json
├── package.json
└── README.md
Contributing
Fork the repository.

Create a new branch (git checkout -b feature-name).

Commit your changes (git commit -am 'Add new feature').

Push to the branch (git push origin feature-name).

Open a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.


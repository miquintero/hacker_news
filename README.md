# Hacker News 

To run the app Hacker News follow the instructions below.

### Installation

#### Pre-requisites

Begin by forking this repository, and cloning it to your computer with the following command: 

 ```bash
   git clone https://github.com/miquintero/hacker_news.git
 ```

#### Server
1. To run the server first open three terminal windows and in each enter the app's server folder. In one window enter the following command: 

 ```bash 
  npm i
 ```

2. To start MongoDB run the following two commands. 

In one terminal window run for access to the database:

 ```bash 
  mongo
 ```
In another terminal window connect to the database: 
 ```bash 
  mongod
 ```

3. In the third terminal window run the following command:  
 ```bash 
  npm run dev
  ```

#### Client
1. To run the client first open one terminal windows and enter the app's client folder. In one window enter the following command: 

 ```bash 
  webpack-dev-server
 ```

2. In your browser navigate to `localhost:3001`

### Tech Stack

* Express
* MongoDB 
* React
* Webpack
* Material UI

# Talker Manager
The Talker Management API is a RESTful application built using Node.js and Express.js, designed for creating a platform to manage speakers for events and conferences. With this API, you can effortlessly register, list, search, edit, and delete speakers. The project was developed following a Test-Driven Development (TDD) approach, ensuring reliability, and features token-based authentication for secure routes.

**Summary**
- [Features](#features)
- [Tools and Libraries](#tools-and-libraries)
- [Getting Started](#getting-started)
- [Routes](#routes)

## Features
* Speaker Registration: Easily add new speakers to the platform.
* Speaker Listing: View a list of all registered speakers.
* Search Functionality: Find speakers based on specific criteria or keywords.
* Speaker Editing: Update speaker information as needed.
* Speaker Deletion: Remove speakers from the platform securely.

## Tools and Libraries
* Node.js
* Express.js
* Jest / Mocha / Chai / Sinon
* Docker
* Dotenv
* ESLint
* Nodemon
* Snakeize / Camelize

## Getting Started
### To run the project locally and start managing speakers, follow these steps:
The .env file has been commited to facilitate.


### Clone this repository:
```
git clone https://github.com/joaogabriellyra/talker-manager.git
```
### Install project dependencies: npm install
```
npm install
```
### Run the application:
```
npm start
```
### Access the API at:
```
http://localhost:3001
```

## API Endpoints
### POST /speakers: Register a new speaker.
### GET /speakers: Retrieve a list of all speakers.
### GET /speakers/:id: Get details of a specific speaker by ID.
### GET /speakers/search/:query: Search for speakers based on a query.
### PUT /speakers/:id: Update speaker information.
### DELETE /speakers/:id: Delete a speaker.

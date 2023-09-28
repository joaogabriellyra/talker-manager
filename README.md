# Talker Manager
The Talker Management API is a RESTful application built using Node.js and Express.js, designed for creating a platform to manage speakers for events and conferences. With this API, you can effortlessly register, list, search, edit, and delete speakers. The project was developed following a Test-Driven Development (TDD) approach, ensuring reliability, and features token-based authentication for secure routes.

**Summary**
- [Features](#features)
- [Tools and Libraries](#tools-and-libraries)
- [Getting Started](#getting-started)
- [Routes](#routes)

## Features
* Talker Registration: Easily add new talkers to the platform.
* Talker Listing: View a list of all registered talkers.
* Search Functionality: Find talkers based on specific criteria or keywords.
* Talker Editing: Update talker information as needed.
* Talker Deletion: Remove talkers from the platform securely.

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

## Routes
<details>
<summary><b>/login</b></summary>
<br />

- POST: Retrieve a token for authorization to use the talker route:
```
{
  "email": "jgabriellyra@gmail.com",
  "password": "12345678"
}
```
![login](https://i.ibb.co/Vqbvgjy/Captura-de-tela-de-2023-09-28-02-30-31.png)
</details>
<details>
<summary><b>/talker</b></summary>
<br />

- GET: Retrieve a list of all talkers.:
```
[
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": {
      "watchedAt": "23/10/2020",
      "rate": 5
    }
  },
  {
    "name": "Heloísa Albuquerque",
    "age": 67,
    "id": 2,
    "talk": {
      "watchedAt": "23/10/2020",
      "rate": 5
    }
  },
  {
    "name": "Ricardo Xavier Filho",
    "age": 33,
    "id": 3,
    "talk": {
      "watchedAt": "23/10/2020",
      "rate": 5
    }
  },
  {
    "name": "Marcos Costa",
    "age": 24,
    "id": 4,
    "talk": {
      "watchedAt": "23/10/2020",
      "rate": 5
    }
  }
]
```

- POST: Create a new product.
```
{
  "name": "Quad Blasters"
}
```
![Peter Quill](https://i.ibb.co/XYDwyGd/Captura-de-tela-de-2023-09-25-02-36-11.png)
</details>

<details>
<summary><b>/products/search?q=</b></summary>
<br />

- GET: Searches for products with matching name, passed as a query

```
URL EXAMPLE: /products/search?q=PartOfProductName
```
</details>

<details>
<summary><b>/talker/:id</b></summary>
<br />

- GET: Retrieve a specific talker by ID.
```
{
  "name": "Henrique Albuquerque",
  "age": 62,
  "id": 1,
  "talk": {
    "watchedAt": "23/10/2020",
    "rate": 5
  }
}
```


- PUT: Update an existing talker by ID.
  - It expects a JSON object to be passed to the request and the token.

![New talker](https://i.ibb.co/jHscQv5/Captura-de-tela-de-2023-09-28-02-32-30.png)
![New talker](https://i.ibb.co/DfrdMWN/Captura-de-tela-de-2023-09-28-02-32-15.png)
- DELETE: Delete a talker by ID.
</details>

### Sales:

<details>
<summary><b>/sales</b></summary>
<br />

- GET: Retrieve a list of all sales
```
[
  {
    "saleId": 1,
    "date": "2023-09-25T04:13:16.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2023-09-25T04:13:16.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2023-09-25T04:13:16.000Z",
    "productId": 3,
    "quantity": 15
  }
]
```
- POST: Create a new sale
  - It requires an array of objects to be passed to the request, with the following format:

```
 [
   {
     "productId": 1,
     "quantity": 1
   },
   {
     "productId": 2,
     "quantity": 5
   }
 ]
```
</details>

<details>
<summary><b>/sales/:id</b></summary>
<br />

- GET: Retrieve a specific sale by ID

- PUT: Update an existing sale by ID
  - It requires an array of objects to be passed to the request, with the following format:

```
 [
   {
     "productId": 1,
     "quantity": 1
   },
   {
     "productId": 2,
     "quantity": 5
   }
 ]
```
- DELETE: Remove a sale by ID
</details>

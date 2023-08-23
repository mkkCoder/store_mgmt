# Store Management Project README

Welcome to the Store Management Project! This project aims to provide a comprehensive solution for managing store inventory through a REST API. The project utilizes MongoDB as the database and is containerized using Docker Compose for easy deployment. This README will guide you through the setup, usage, and customization of the project.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- Add, update, and delete products in the store inventory.
- Retrieve information about products and their availability.
- Utilize a user-friendly REST API for interacting with the inventory.
- Store and manage data in a MongoDB database.
- Easy deployment and scaling using Docker Compose.
- Expandable and customizable codebase to suit your specific needs.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (npm)
- mongoose library
- express library
- Docker
- Docker Compose

## Installation

1. Clone this repository to your local machine:

   ```bash
   git@github.com:mkkCoder/store_mgmt.git
   ```

2. Navigate to the project directory:

   ```bash
   cd store_mgmt
   ```

3. Install the project dependencies using npm:

   ```bash
   npm install
   ```

## Configuration

1. Open the `config.js` file in the project's root directory.
2. Adjust the MongoDB connection details if necessary.
3. Customize any other configuration settings as needed.

## Usage

1. Start the project using Docker Compose:

   ```bash
   docker-compose up -d
   ```

   This will build and run the Node.js app and MongoDB containers.

2. Access the API at `http://localhost:3000`.

3. You can use tools like `curl`, Postman, or any other API testing tool to interact with the endpoints (see [API Endpoints](#api-endpoints)).
  I like to use:  (https://reqbin.com/.)
    

5. To stop the project, run:

   ```bash
   docker-compose down
   ```

## API Endpoints

- `GET /items`: Get a list of all items in the inventory.
- `GET /item/:id`: Get detailed information about a specific product by id.
- `POST /items`: Add a new product to the inventory.
- `PUT /items/:id`: Update information about a specific product.
- `DELETE /items/:id`: Delete a product from the inventory.
  And many other functionalities (see the routes/items.js file in the project)

For detailed request and response formats, refer to the API documentation.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Commit your changes with clear commit messages.
5. Push your changes to your fork.
6. Create a pull request describing your changes.
---

Thank you for choosing the Store Management Project. If you have any questions or encounter issues, please don't hesitate to open an issue or reach out to our support team. Happy managing!

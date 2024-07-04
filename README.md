# Overview

This project is a web application for tracking vehicles owned by a user. Built with React and Redux Toolkit, it allows users to add, delete, and search for vehicles, with real-time updates on the total value of the vehicles.

## Features

* **Add Vehicles:** Users can add vehicles by entering the name and value.
* **Delete Vehicles:** Users can remove vehicles from the list.
* **Search Vehicles:** Users can search for vehicles by name, with results updating in real-time.
* **Total Value Calculation:** The total value of visible vehicles is dynamically calculated and displayed.
* **Duplicate Highlighting:** When adding a vehicle with a name similar to an existing one, the input field will highlight the match to inform the user.

## Installation

### Getting Started
1. Fork this repository to your own GitHub account.
2. Clone your fork onto your local device.
3. Install all dependencies using the `npm install` (or `npm i`) command.

### Running the Application
4. Start the development server: `npm start`
5. Open your browser and navigate to `http://localhost:3000`.

## Usage

* **Add a Vehicle:** Fill in the name and value of the vehicle and click "Submit". The vehicle will be added to the list below.
* **Delete a Vehicle:** Click the "Delete" button next to a vehicle to remove it from the list.
* **Search for a Vehicle:** Use the search bar to filter vehicles by name. The total value displayed will update accordingly.
* **Duplicate Highlighting:** If you try to add a vehicle with a name that partially matches an existing vehicle, the name input will be highlighted to alert you.
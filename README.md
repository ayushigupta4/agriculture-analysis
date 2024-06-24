# Agriculture Analysis

This is a React application that performs analytics on the Indian Agriculture dataset (made available by the National Data and Analytics Platform, NITI Aayog) and displays the results in tables using Mantine.

## Features

- Aggregates and analyzes crop data from 1950 to 2020.
- Displays the crop with the maximum and minimum production for each year.
- Calculates and displays the average yield and cultivation area for each crop between 1950 and 2020.
- Uses Mantine v7 for creating tables and displaying data.

## Installation

### Prerequisites

- Node.js (version 14 or later)
- Yarn package manager

### Steps

1. Clone the repository:

   git clone https://github.com/ayushigupta4/agriculture-analysis.git

2. Navigate to the project directory:

    cd agriculture-analysis

3. Install dependencies using Yarn:

    yarn install

4. Start the development server:

    yarn start

This will open the application in your default web browser.

#### Project Structure
- src/
1. App.js: Main component that renders the tables.
2. dataProcessor.js: Module for processing and aggregating the dataset.
3. index.js: Entry point of the application.
4. data/: Directory containing the dataset.


##### Data Processing
The application processes the dataset to extract the following information:

Table 1: Crop Production
- Year
- Crop with Maximum Production
- Crop with Minimum Production

Table 2: Crop Yield and Cultivation Area
- Crop
- Average Yield (1950-2020)
- Average Cultivation Area (1950-2020)


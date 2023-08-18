# Overworld
Overworld - web app using React/TypeScript to display a map and API data!

Welcome to the Overworld repository, a web application designed to display an interactive map and geospatial API data. This README contains information on setting up, using, and documenting the application.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contribution](#contribution)
- [License](#license)
- [Contact](#contact)

## Description
**Overworld** is an application that allows users to display an interactive map with geospatial data. By hovering over a city, department, or region, the application displays API data for that area.

## Features

- **Interactive Map Display**: Display an interactive map with geospatial data.
- **Geospatial API Data**: Hover over an area to display API data for that zone.
- **Geospatial API Data by Country**: Click on different tabs to display different data related to the country.
- **User Profile**: An avatar is displayed in the header, and hovering over it reveals a box with user information (first name, last name, and email).

## Installation
```bash
git clone https://github.com/utilisateur/Overworld.git
```
Go the project :
```bash
cd Overworld
```
Install the dependencies :
```bash
npm install
```
Launch the app in dev mode:
```bash
npm run dev
```
The app should be now available on [http://localhost:3000](http://localhost:3000) in your web browser.


## Configuration
**To use** this application, you will need an API key for a geographic API of your choice.
Create a **.env** file at the root of the project.
Add the API key to your .env file:
**API_KEY=your_api_key**


## Utilisation
**Open** your browser and navigate to **http://localhost:3000.**
You will see an interactive map. Hover over an area to display the API data for that area.
Hover over the avatar in the header to display the user information.


## Technologies Used
**React.js:** JavaScript library for building user interfaces.
**TypeScript:** Superset of JavaScript for static typing.
**Next.js:** Framework for developing React applications.
**Leaflet:** JavaScript library for creating interactive maps.
**Tailwind CSS:** CSS framework for designing user interfaces.


## Code Structure

The application is organized into components and distributed across folders for better readability and code maintenance. Below is a brief explanation of the code structure:

### Components

The application is composed of three main components:
- `Header`: composed of `Title`, `Tabs`, and `Avatar`.
- `Map`: contains a map container (`MapContainer`) and a marker component (`MarkerComp`).
- `Footer`

Each element on the page is separated into explicit components and placed in appropriate folders:

- `Contexts`: Contains API contexts.
- `Components`: Folder for main components.
  - `Buttons`
  - `Footer`
  - `Header`
  - `Map`
  - `Icons`
  - `Tabs`

### Additional Folders
- `functions`: Contains code for business functions (data fetching logic from external API).
- `page`: Contains code for pages (the application is based on Next.js).
- `style`: Contains style files.
- `types`: Contains all custom explicitly defined TypeScript types.
- `utils`: Contains configuration files and reusable functions.

### Logic and Display

The application is coded by separating logic as much as possible into distinct functions and keeping only the display in React components.

### APIs Used

The application is connected to two APIs:
- Geocode: to obtain geographic coordinates of cities.
- OpenWeather: to obtain weather data.

### Constraints

A "limiter" function has been created in the `utils` folder using the "bottleneck" library to manage API call rate limits per second to cope with these APIs' constraints.

### Important Points

The application uses SSR with `getServerSideProps` from Next.js for the initial fetch when a user arrives on the application.

The "cities.config.ts" file in `utils` allows for setting up cities and countries that can be used in the API.


## Areas for Improvement with More Time

1. **Optimization**
   - Enhance performance and responsiveness by reducing API calls and utilizing more efficient algorithms.

2. **User Experience (UX)**
   - Improve the user interface and experience with user-friendly features, animations, and better error handling.

3. **Additional Features**
   - Implement new features like search functionality, saving favorite locations, or integrating additional APIs for more comprehensive data.
   - Add countries available directly in front end or in back end with a admin user

4. **Testing**
   - Implement more comprehensive testing for both the front-end and back-end components of the application.

5. **Code Quality**
   - Spend more time refactoring and cleaning up the code to adhere to best practices and improve readability.

7. **Documentation**
   - Add more detailed and comprehensive documentation to assist others in understanding and contributing to the project.

8. **Security**
   - Enhance security through better error handling, data validation from api with ZOD library by example.


## Difficulties Encountered

1. **API Limitations**
   - Encountered rate limits and quota restrictions on the APIs used, which affected the application's functionality and required implementing a limiter mechanism.

2. **Integration Issues**
   - Experienced challenges in integrating various libraries and tools, such as Leaflet and Tailwind CSS, due to conflicting styles and behaviors.

3. **Data Inconsistencies**
   - Dealt with inconsistent data formats and missing values returned by the APIs, necessitating extensive data validation and cleaning.

4. **State Management**
   - Faced difficulties in managing and synchronizing application state across multiple components, leading to occasional bugs and unpredictable behavior.


## Contribution
**Contributions** to this project are welcome! If you would like to contribute, please send me a message.

## License
This project is licensed under the MIT License.

## Contact
If you have any questions or comments about this project, please feel free to contact me:

**Name**: Bastien Vermot de boisrolin
**Email**: bastien.deboisrolin@gmail.com
**GitHub**: @bastien-vdb



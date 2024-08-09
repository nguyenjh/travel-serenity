# Travel Serenity
MERN Stack Hotel Booking Website

## Description:
Travel Serenity is a comprehensive web application that allows users to search, select, and book hotel rooms. The platform includes user authentication, search functionality by location, date range, number of adults, children, and rooms, and a secure payment system (disclaimer: payment system does not actually work for security reasons). Users can create accounts, log in, and manage their bookings. The application is built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and uses JWT and cookies for secure authentication. State management is handled by the Context API, ensuring a seamless and efficient user experience.

## Time Taken:
1.5 Months

## Technologies Used:

- MongoDB
- Express.js
- React.js
- Node.js
- JWT (JSON Web Tokens)
- Cookies
- Context API
- Yarn (Package Management)
- HTML
- CSS

### Front End:
The front-end is developed in React.js, utilizing the create-react-app boilerplate. The user interface is designed to be responsive and intuitive, ensuring a smooth user experience across different devices.

### Back End:
The back-end is built using Node.js and Express.js, with a MongoDB database to store user, hotel, and room information. The application uses JWT and cookies for secure authentication and state management.

## Design:
### Database:

Collections:
- Users: Stores user information, including username, email, hashed password, and if the user is an admin.
- Hotels: Stores hotel information, including name, type, city, address, distance, photos, what the property is known for, description, rating, rooms, price, and if that property is featured.
- Rooms: Stores room details, including title, price, max amount of people, description, and room numbers along with their unavailable dates.

### Server-Side:

Rest API:

Express server with multiple routes:
- Authentication: Handles user registration, login, and JWT-based authentication.
- Hotel: CRUD operations, including creating hotel, updating hotel, deleting hotel, getting an individual hotel information, getting all hotels, getting hotel count by city, getting count by property type, and getting a hotel's room information.
- Rooms: CRUD operations, including creating room, updating room, updating room's availability, deleting room, getting an individual room information, and getting all rooms.
- Users: CRUD operations, including updating user, getting an individual user's information, and getting all users.

### Front-End:

- The front end fully developed in React.js using the create-react-app boilerplate.
- The home page provides an advanced search interface for users to find hotels.
- The search result page allows users to view available hotels, view a snippet of hotels' information, check hotels' availability to move onto to their individual page, and adjust their desired minimum/maximum prices preferences in the options menu.
- Individual hotel page allows users to view hotel's information in-depth, see close-up hotel photos, view room availability, and are able to select and reserve room(s) to move onto the payment page.
- The payment page comfirms hotel room booking information along with their prices (disclaimer: payment system does not actually work for security reasons).

## Repositories:

- Front End: [GitHub Repository](https://github.com/nguyenjh/travel-serenity-react-ui)
- Back End: [This Current GitHub Repository](https://github.com/nguyenjh/travel-serenity)

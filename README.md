# Valuations App

A comprehensive web and mobile application for managing household content valuations, appointments, and inventory.

## Features

- Order management for brokers, insurers, and private clients
- Appointment scheduling and management
- Surveyor management and assignment
- Inventory item tracking and valuation
- Mobile app for surveyors to capture inventory on-site
- Real-time updates and notifications

## Tech Stack

### Backend
- Node.js with Express
- Azure SQL Database
- RESTful API architecture

### Web Frontend
- React
- Material-UI
- React Router
- Axios for API calls

### Mobile App
- React Native
- Expo
- Offline capabilities

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- Azure SQL Database
- Azure account for hosting

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_SERVER=your_server.database.windows.net
   DB_NAME=valuations_db
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

4. Run the database migrations:
   ```bash
   sqlcmd -S your_server.database.windows.net -d valuations_db -U your_db_user -P your_db_password -i database/schema.sql
   ```

5. Start the server:
   ```bash
   npm start
   ```

### Web Frontend Setup
1. Navigate to the web directory:
   ```bash
   cd web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

### Mobile App Setup
1. Navigate to the mobile directory:
   ```bash
   cd mobile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   npm start
   ```

## Usage

### Web Application
- Access the web application at `http://localhost:3000`
- Login with your surveyor credentials
- Manage orders, appointments, and inventory items
- Generate reports and track valuations

### Mobile Application
- Install the Expo Go app on your mobile device
- Scan the QR code from the Expo development server
- Login with your surveyor credentials
- Capture inventory items during site visits
- Submit completed surveys to the office

## API Documentation

The backend API provides the following endpoints:

### Orders
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get a specific order
- `POST /api/orders` - Create a new order
- `PUT /api/orders/:id` - Update an order

### Appointments
- `GET /api/appointments` - Get all appointments
- `POST /api/appointments` - Create a new appointment
- `PUT /api/appointments/:id/status` - Update appointment status

### Surveyors
- `GET /api/surveyors` - Get all surveyors
- `POST /api/surveyors` - Create a new surveyor
- `POST /api/surveyors/login` - Surveyor login

### Items
- `GET /api/items/order/:orderId` - Get items for an order
- `POST /api/items` - Add a new item
- `PUT /api/items/:id` - Update an item

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
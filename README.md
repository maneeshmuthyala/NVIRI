## Appliance Repair Service Portal

This project is a full-stack application that enables users to find technicians for repairing appliances based on location and type. It also allows technicians to log in and manage their profiles.

---

## **Features**

### **Frontend**
- Location-based dropdown for selecting service areas.
- Search bar with dynamic suggestions for appliance types.
- Carousel showcasing featured technicians.
- Separate login forms for users and technicians.

### **Backend**
- SQLite database to manage users, technicians, and appliance types.
- Secure API endpoints for fetching data and handling user authentication.
- Data validation and error handling to ensure robust performance.

---

## **Setup Instructions**

### **Prerequisites**
- Node.js and npm installed on your system.
- SQLite3 installed or available in your environment.

### **Frontend Setup**
1. Navigate to the `frontend` folder.
2. Run the following commands:
   ```bash
   npx create-react-app frontend
   cd frontend
   npm install react-router-dom axios
   npm start
   ```

### **Backend Setup**
1. Navigate to the `backend` folder.
2. Run the following commands:
   ```bash
   npm init -y
   npm install express sqlite3
   ```
3. Create a SQLite database:
   ```bash
   touch database.db
   ```
4. Initialize the database tables:
   ```sql
   CREATE TABLE technicians (
       technician_id INTEGER PRIMARY KEY,
       name TEXT,
       photo TEXT,
       specialization TEXT,
       rating REAL,
       description TEXT
   );
   
   CREATE TABLE users (
       user_id INTEGER PRIMARY KEY,
       email TEXT,
       password TEXT
   );

   CREATE TABLE appliance_types (
       appliance_id INTEGER PRIMARY KEY,
       type_name TEXT
   );
   ```
5. Start the server:
   ```bash
   node server.js
   ```

---

## **API Endpoints**

### **GET `/locations`**
Fetches available locations for the dropdown.

### **GET `/appliances`**
Provides appliance suggestions based on user input.

### **GET `/featured-technicians`**
Retrieves a list of featured technicians.

### **POST `/login`**
Authenticates user and technician logins.

---

## **Frontend Components**

### **LocationDropdown**
- Fetches and displays available locations.
- Integrated with the `/locations` endpoint.

### **SearchBar**
- Dynamically suggests appliance types as the user types.
- Integrated with the `/appliances` endpoint.

### **TechnicianCarousel**
- Displays featured technicians fetched from the `/featured-technicians` endpoint.

### **Login Pages**
- Two separate login forms for users and technicians.
- Implements client-side validation for email and password.

---

## **Technologies Used**

### **Frontend**
- React, React Router, Axios

### **Backend**
- Node.js, Express, SQLite3

---

## **Contributors**

Maneesh Muthyala -https://github.com/maneeshmuthyala

---

## **License**
This project is licensed under the MIT License.

"# NVIRI-Assessment" 
"# NVIRI-Assessment" 
"# NVIRI_Assessment" 
"# NVIRI_Assessment" 
"# NVIRI_Assessment" 

## Description
A simple microservices-based application for managing products and orders, featuring JWT authentication and MongoDB databases. Built to learn microservices architecture.

## Getting Started

1. **Clone the repository**:
   ```sh
   git clone https://github.com/er-hiba/simple-microservices-app.git
   cd simple-microservices-app
   ```

2. **Install dependencies in each service folder**:
    ```sh
    cd produit-service
    npm install
    cd ../commande-service
    npm install
    cd ../auth-service
    npm install
    ```
    
3. **Set up environment variables**:
   - Copy the .env.example file in each service folder to .env:
    ```sh
    cp products-service/.env.example products-service/.env
    cp orders-service/.env.example orders-service/.env
    cp auth-service/.env.example auth-service/.env
    ```
   - Edit the .env file and fill in the required values.

4. **Start the services**:
    ```sh
     npm start
    ```

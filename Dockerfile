# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the Docker image
COPY package*.json ./

# Install the application's dependencies in the Docker image
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Copy the rest of the application to the Docker image
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Expose port 8080 for the application
EXPOSE 8080

# Define the command to run the application
CMD [ "node", "app.js" ]
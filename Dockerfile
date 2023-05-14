# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents to the container
COPY . .

# Build the production version of the app
RUN npm run build

# Expose port 80 to the host
EXPOSE 80

# Run the command to start the app
CMD [ "npm", "start" ]

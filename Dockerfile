# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Build app
RUN npm run build

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]


# Use the official Node.js LTS image as the base
FROM node:16-alpine

# Set environment variables
ENV LANG C.UTF-8
ENV NODE_ENV production

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy application code
COPY app.js ./

# Expose the necessary port
EXPOSE 9467

# Define the entrypoint
CMD ["node", "app.js"]
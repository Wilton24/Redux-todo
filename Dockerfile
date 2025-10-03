# Use Node as base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and lock file first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Expose Vite's default dev port
EXPOSE 5173

# Run the dev server
CMD ["npm", "run", "dev", "--", "--host"]

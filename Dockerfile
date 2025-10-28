FROM node:20-alpine

WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install all dependencies (including dotenv)
RUN npm install

# Copy the rest of the app
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

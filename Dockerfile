FROM node:18-alpine
COPY index.js .
EXPOSE 8080
CMD ["node", "index.js"]

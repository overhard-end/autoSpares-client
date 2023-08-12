FROM node as builder 
WORKDIR /autoSpares
COPY . .
RUN npm install
RUN npm run build

FROM nginx as production
WORKDIR /usr/share/nginx/html
COPY --from=builder /autoSpares/build .
COPY nginx.conf /etc/nginx/conf.d/defauld.conf
EXPOSE 80 
CMD ["nginx", "-g","daemon off;"]
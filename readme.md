1. npm init -y
2. npm install express sequelize pg pg-hstore cors dotenv
3. npm install nodemon morgan -D
4. /src
   -- /services
   -- /models
   -- /controllers
   -- /routes
   -- /middlewares
   -- /seeders
   -- /utils
   -- /tests
   -- /templates
   -- app.js
   -- server.js
5. scripts
6. create a server
7. configure the conexion to the database
8. authenticate the database into app.js
9. create a user model
10. init models
11. sync the database
12. register users
    -> encript password
    -> bycript
13. authentication with the login
npm WARN config production Use `--omit=dev` instead.
> ecomerce_api@1.0.0 start
> node ./src/server.js
servidor escuchando en el puerto 5988
La documentacion esta disponible en undefined:5988/api/v1/docs

# SETUP

Create your folder e.g `mkdir express-app`
Change into the folder e.g `cd express-app`

1. run `npm init` to create the `package.json`
2. create the following files via the command below:
3. `touch app.js config.js .gitignore`
4. run the following command in the terminal `npm install express mysql nodemon --save`
5. Open up Visual Studio Code.

## app.js.

6. Within the app.js setup the following:

7. import and creation of express instance e.g 
`const express = require('express') const app = express()`

8. setup the application middleware e.g. `app.use(express.json())`

9. setup the `app.listen(3000)` pass it the port you want the app to run on.
Don't forget to pass in a function after the port 3000 to `console.log()` if the app
is running or not.

10. You can then write your routes before the `app.listen()`

## config.js

11. import `mysql`

12. create a variable called `connection` assign it the value of `mysql.createConnection`.

13. configure the `mysql.createConnection` object with all the correct credentials.

14. export the variable `module.exports = connection`

15. import the connection variable into the `app.js` so that the routes created can interact with the database.

16. This can be done by adding the following line into your `app.js`
`const connection = require('./config');`

17. Add the following line in the `app.js` to test the connection to the database
`connection.connect((err) => {
    if (err) throw err;
    console.log('database successfully connected')
})`

18. add the following script to your `package.json`
"start": "nodemon app.js"
19. you can now run your app via `npm start` from the terminal.

## .gitignore
20. add the following line to this file `node_modules` to avoid pushing your node_modules to the repo.


# DEBUG PROCESS

1. Setup the Debugger for Node which will create a launch.json file.

2. Ensure the app is listening on the correct port.

3. Ensure that the connection is made to the database.

4. Ensure that the credentials are being correctly used within the config.js.
If you have a `.env` file ensure that the data is being passed correctly.

5. Ensure that the data being received by the route is correct.

6. Ensure that postman is sending the correct information (HTTP verb, Body, query etc).

7. Ensure that the query being made to the database is correct (test in mysql directly).

8. Ensure the data is being returned back with the correct status code to the client and any data.

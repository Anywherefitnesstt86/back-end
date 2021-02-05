# back-end

Anywhere Fitness API Documentation:

https://docs.google.com/document/d/1bnRq49eFBMVAkZjUQpLE-c45RuNrNlFpTRh5EjX040o/edit

Software Developers

backend: Marissa Shaffer, Kevin Bing
front end: Ramonia Lucius, Josh Senter, Rhiannon Stanford

Back End Work:

Marissa
[] index.js [] server.js [] user.js - model, router, validation [] classes - model, router
[] auth - middleware, router, restrictions, token [] secrets  [] config.js - ran db’s ( fitness, testing) 
[] knexfile.js 

Kevin
[] migration table  - fitness.js  [] seeds - cleanup.js, users.js, classes.js, users_classes.js  
[] testing - classesTests.js

## Dependencies Installed
    Bcryptjs : npm i bcryptjs
    Cors : npm i cors
    Express : npm i express
    Helmet : npm i helmet
    Jsonwebtoken : npm i jsonwebtoken
    Knex : knex - init
    Sqlite3 : npm i sqlite3
## devDependencies Installed
    Dotenv : npm install --save-dev dotenv
    Jest : npm install --save-dev jest 
    Nodemon : npm install --save-dev nodemon
    Supertest : npm  install --save-dev supertest

API link
https://pt-fitness.herokuapp.com/

Routes
*********************************************************************
/auth Endpoints

auth/register
POST
    Requires an object containing the new users information
    Returns a JSON object
    {"message": "User successfully created"}

Parameter        Description

personName:      string
password:        string

auth/login
POST

    Requires an object containing the users information
    Stores a token containing the jwt
    Returns a JSON object including the jwt
    { token:     message: `Welcome ${user.email}!`    }

Parameter        Description

personName:      string
password:        string

********************************************************************
/users Endpoints

/user

GET
    Requires a user to be logged in
    Returns a JSON object containing logged in users information
    Returns a status code 200 {update successful}
    Returns a status code 500 { Can’t get user list }
{
    "id": "1",
    "personName": "Pete",
    "email": "petel@email.com",
    "isOverEighteen": true,
    "password": abc123,
    “isInstructor”: false
}  
**********************

users/id

PUT

    Requires a user to be logged in
    Requires at least one valid parameter to update in request body
    Returns a status code 400 { Missing personName or email }
    Returns a status code 200 {update successful}
    Returns a status code 404 { The user could not be found }
    Returns a status code 504 { Error updating the user }

Parameter        Description
personName:      string
password:        string
**************************

/logout

Logged out
    Requires a user to be logged in
    Returns a status code of 204 if delete user successful { You are logged out }
***************************************************************************


classes Endpoints

/classes

GET

    Requires user to be logged in
    Returns a JSON object containing newly created class

Parameter        Description

className:       string

{
    "id": "1",
    "className": "strong man",
    "classType": "weights",
    "classDate": “Monday”,
    "startTime": 9:00am,
    "duration": 1,
    “intensity”: “high”,
    “location”: “anywhere”,
    “numberOfStudents”: 10,
    “maxClassSize”: 10
}  
****************************************

classes/:id

Update Classes

PUT

updates classes by id
    Requires user to be logged in
    Requires a valid user id for endpoint :id
    Returns a JSON object containing updated classes

Parameter            Description

Id:                  integer
className:           string
classType:           string
startTime:           time
Duration:            integer
Intensity:           text
Location:            string
numberOfStudents:    integer
maxClass:            integer

************************************************

/classes
ADD or Create

Post
    Requires user to be logged in
    Returns a status code of 201 
[
   {
    "id": "1",
    "className": "strong man",
    "classType": "weights",
    "classDate": “Monday”,
    "startTime": 9:00am,
    "duration": 1,
    “intensity”: “high”,
    “location”: “anywhere”,
    “numberOfStudents”: 10,
    “maxClassSize”: 10
}  
]
***********************************************

/classes/id
Update Classes by ID

Put
    Requires user to be logged in
    Requires a date string in the format 2020-08-20
    Returns a JSON object containing classes data 
  {
    "id": "1",
    "className": "oldie but goodie",
    "classType": "jazzersize",
    "classDate": “Monday”,
    "startTime": 9:00am,
    "duration": 1,
    “intensity”: “high”,
    “location”: “anywhere”,
    “numberOfStudents”: 10,
    “maxClassSize”: 10
}  
***************************************************
classes/:id
DELETE
    Requires user to be logged in
    Requires a valid class id for endpoint :id
    Returns a status code of 404 {no class matching that ID existing}
    Returns a status code of 500 {an error has occurred}

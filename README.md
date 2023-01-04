# Technologies used to create the app

Front-end
* React- framework
* JavaScript- programing language

Backend
* Nodejs

Database
mySQL


To run the project needs to have

Environment vars

This project uses the following environment variables:
Name 	Description 	Default Value
CORS 	Cors accepted values 	"*"  
Pre-requisites

    Install Node.js version 18.12.1

Getting started

    Clone the repository

git clone  git@github.com:Ghh84/Web-based-management.git
    Install dependencies

cd Web-based-management
npm install

    Build and run the project

npm start

Project Structure

The folder structure of this app is explained below:

Name 	                 Description
api 	    =>Contains the all the API files and folders for backend 
src 	    => Folder Contains source code of font-end 
api/controllers 	Controllers define functions to serve various express routes.
src/package.json 	Common libraries to be used across your app.
api/middleware 	Express middleware which process the incoming requests before handling them down to the routes

api/routes 	Contain all express routes, separated by module/area of application
api/db.js         database connections
api/server.js     API starter file
src/components 	Models define schemas that will be used in storing and retrieving data from Application database
src/services 	Authentication services 
src/index.ts 	Entry point to express app
package.json 	Contains npm dependencies as well as build scripts





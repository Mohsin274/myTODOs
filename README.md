<h2>myTODOs - TODO App</h2>
This is a simple TODO App made using MERN stack. Users can use this application to sign up, sign in, and add and delete TODOs. MongoDB has been used to store user sign-ups and tasks, and JWT and local storage has been used to save login sessions locally which helps users stay logged in if they leave the app (without logging out).
<br>


<h2>Screenshots</h2>

![Sign up](https://user-images.githubusercontent.com/52622079/191911720-355a71fe-84fb-47ac-83c4-63b3fe83834f.jpg)

![Sign in](https://user-images.githubusercontent.com/52622079/191911790-d4be2dda-08b4-4ea0-b6a1-7fd71ab62e70.jpg)

![Add TODOs](https://user-images.githubusercontent.com/52622079/191911798-ff5c31ac-c994-411d-a960-c5a9c6afe99a.jpg)



<h2>How to set the project locally</h2>

* Open terminal and type 
 ```
 $ git clone <the url of the Github repo>
 ```
*This clones the repo*


* ``cd`` into the new folder then cd into the backend folder and type
```sh
$ npm install
```
* Then, ``cd`` into the frontend folder and repeat the above command

*This installs the required dependencies for both the frontend and backend*


* Add MongoDB connection URL to server.js (inside backend folder)
```
//DB connection
const uri =   ''; //MongoDB URL for database connection goes here
```

    
* To run the backend  
 ```sh
 $ cd backend
 $ node run
 ```
 
* To run the frontend
 ```sh
 $ cd frontend
 $ npm start
 ```

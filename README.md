# Express/Passport with Angular Routing
This version uses Angular to control the login requests and redirection in coordination with client-side routing.

## Setup Directions:
* Run `npm install`,
* Start mongo if not running already by using `mongod`
* Run `npm start` in an open tab of terminal,

1. click register
2. go to registration page
3. enter registration
4. click button to submit.
5. Username and password are sent up using post request to server>register.js
6. The post request is received the username and password are assigned to an object.
7. The object is passed through passport and sent to the server using User.create.
8. A 201 message is sent back for success

1. go to home
2. enter login and submit
3. info travels through login controller, tests are run to make sure fields weren't empty
4. An Http post request authenticate request server>authenticate.js
5. passport.authenticate checks username and password doing salting hashing and what not
6. upon success it is reruouted to /user route, failure to the /failure route
7. Success: /user gets user info from data base using req.user from passport sends it down status 200 sent
Failure: /login failure sends 403 error message.
8. Back to controller http request callback function has if for success and failure testing error messages to decide what it should self.message.




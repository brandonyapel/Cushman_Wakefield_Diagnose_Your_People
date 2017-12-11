# Express/Passport with Angular Routing
This version uses Angular to control the login requests and redirection in coordination with client-side routing.

## Setup Directions:
* Run `npm install`,
* Start mongo if not running already by using `mongod`
* Run `npm start` in an open tab of terminal,

## Login Flow

1. index.html -> client.js -- myApp.config
2. login.controller.js -- line 10 -- self.login
3. authenticate.js -- line 7 -- router.post
4. userStrategy.js -- line 34 -- User.findOne (mongoose)
5. Compare password in models/user.js -- comparePassword
6. userStrategy.js -- line 54 -- all good <-- With correct credentials
7. userStrategy.js -- line 9 -- serialized
8. userStrategy.js -- line 16 -- deserializeUser
9. authenticate.js -- line 10 -- redirect to /user <-- server side routing
10. routes/user.js -- line 7 -- get /user route
11. routes/user.js -- line 17 -- res.send(userInfo);
12. login.controller.js -- login -- success
13. login.controller.js -- line 20 -- $location.path('/user'); <-- client side routing
14. client.js -- line 16 -- resolve
15. UserService.js -- line 11 -- getuser -- $http.get('/user')
16. userStrategy.js -- line 16 -- deserializeUser <-- middleware
17. routes/user.js -- line 7 -- get /user route <-- server side
18. routes/user.js -- line 17 -- res.send(userInfo);
19. UserService.js -- line 14
20. We resolve successfully and are able to access user.html

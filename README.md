# Angular Require Express Bower Karma Seed

Seed for starting a app with [Angular](http://angularjs.org/) powering frontend and [Express](http://expressjs.com/) for backend. 
The project is a skeleton, put together with some awesome libraries. [AngularJS](http://angularjs.org/), [Express](http://expressjs.com/), [RequireJS](http://requirejs.org/), [Bower](https://github.com/bower/bower), [Karma](http://karma-runner.github.io/0.10/index.html) and also [jQuery](http://jquery.com/)!

#About

* Angular     - 1.2.3
* RequireJs   - 2.1.9
* Express     - 3.4.4
* jQuery      - 2.0.3
* Karma       - 0.10.5

## Getting started

First you need [Node](nodejs.org) installed. After that's done, clone this repository and then run 

    npm install
  
on root directory of the project. That will fetch necessary dependencies to start the server.

When that part is done you need to globally install bower. For that run

    npm install -g bower
  
After that we need to get angular dependecies to run our frontend. Use 

    bower install
    
in the project directory.

If all that was successful. We are all done installing seed project!

## Running the app

Running the app is very simple. If you are in the project root directory run this command.

    node server.js
    
That command will start our server on localhost:8080.
  
## Testing

We are using karma/jasmine combo for tests. To run the test you can simply

    karma start
    
in root directory. This will execute our tests with [PhantomJS](https://github.com/Obvious/phantomjs)
  


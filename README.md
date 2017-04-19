# gt-excel-website

To run the site:<br />
1. clone the repo<br />
2. in the project directory, run `npm install`<br />
3. in the project directory, add a folder name 'data' (if not already there)
4. in another terminal, in the same directory, run `mongod --dbpath ./data`<br />
5. in the first terminal again, run `npm start`<br />
6. in a browser, navigate to localhost:8080<br />

-----------STUFF TO DOWNLOAD-------------------------------------------------------------------------------------

Node.js & NPM https://nodejs.org/en/download/

    NPM is what we'll use for dependency tracking. Whenever you pull the repo down, it won't include up-to-date 
    modules, only an updated list of modules required. So calling NPM install will locally install everything the 
    program 'requires' to do its thing. Express and Angular are dependencies that our package manager (NPM) will 
    install for us. Then node is just our interpreter.
------------------------------------------------------------------------------------------------------------------
MongoDB https://www.mongodb.com/download-center?jmp=docs&_ga=1.143336054.2145130091.1484885366#community 

    You'll need to run the mongo server for the site to work. Download the directory. Keep it wherever, they're 
    just binary executables. Add the bin directory to your path if necessary. Then you have to initialize the 
    server to the appropriate directory before running the site every time. To do this, open the terminal, cd to
    the project directory, and run "mongod --dbpath ./data" and that should do it. You can also open another
    terminal and run "mongo" to monitor/manage your databases---any of them, not just the ones running, since the 
    data is persisted.

# gt-excel-website

# Version 1.05 Release Notes: 

## The latest features in this release are:
1. Added map to local resources page
2. Improved Job Posting form functions and reliability
3. Added organization information posting form (allows organization to request space on the site)
4. Added jump to top arrow for each page

## Bug Fixes:
1. Accordion collapse function fixed for federal hiring page

## Known Bugs:
1. Facebook plugin on home page doesn’t load immediately requires page refresh occasionally 

# To run the site: 
1. clone the repo
2. in the project directory, run `npm install`
3. in the project directory, add a folder name 'data' (if not already there)
4. in another terminal, in the same directory, run `mongod --dbpath ./data`
5. in the first terminal again, run `npm start`
6. in a browser, navigate to localhost:8080

# Stuff to Download

## [Node.js & NPM](https://nodejs.org/en/download/)

    NPM is what we'll use for dependency tracking. Whenever you pull the repo down, it won't include up-to-date 
    modules, only an updated list of modules required. So calling NPM install will locally install everything the 
    program 'requires' to do its thing. Express and Angular are dependencies that our package manager (NPM) will 
    install for us. Then node is just our interpreter.
------------------------------------------------------------------------------------------------------------------
## [MongoDB](https://www.mongodb.com/download-center?jmp=docs&_ga=1.143336054.2145130091.1484885366#community)

    You'll need to run the mongo server for the site to work. Download the directory. Keep it wherever, they're 
    just binary executables. Add the bin directory to your path if necessary. Then you have to initialize the 
    server to the appropriate directory before running the site every time. To do this, open the terminal, cd to
    the project directory, and run "mongod --dbpath ./data" and that should do it. You can also open another
    terminal and run "mongo" to monitor/manage your databases---any of them, not just the ones running, since the 
    data is persisted.
    
# Maintenance 
 
## If trying to add a job searching site or edit information on the “finding a job online page”. 

1. Navigate to the html file located in view/jobsearch.html
2. Format the information to look like the following:
	
		<div class=”card”>
    	    "<div class=”card block”>"
			"<h4 class=”card-title”> NAME OF SITE </h4>"
			"<p class=”card-text”> DESCRIPTION OF SITE</p>"
		    "</div>"
		    "<div class=”card-footer”>"
			"<a href= URL OF SITE class=”btn btn-primary”>Check it out</a>"
		    "</div>"
		"</div>"
	    

Add this code to the code for the last website in the html file

## If you need to add another page, take these steps

1. Create a new html page with the desired information
2. Create a button or path for a page to access the new created html page
3. Go to the app.js page and add a new route linking to the html page
4. Set the button to use the route you added in app.js by using (ng-route = #(route))

## If you have problems with this process:
    There are examples on the index page in the nav bar section which has examples of linked routes that can be used as a basis to create     a new route. 


## If you have any information that needs to be changed:
    You need to directly change the information through the corresponding html file. Everything should be already formatted, so all that       needs to be done is changing the text.


## In order to add or change images
1. Put the images you would like to use in the images folder in the view folder of the project. 
2. Add the image files to the folder view/image
3. Add this code to the place you want the image to be
 		<img src="image/(name of picture)> 

If the image is too big or small it needs to be changed manually using Photoshop, Windows Paint, or any program that can change the image size.

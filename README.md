Design and Implement a Micro FrontEnd Web Application
Your assignment is to design and implement a web application consisting of
several sub-applications to be loaded into the main application at runtime.
Each application should be in a separate project and should have its own
package.json, dependencies and a dedicated build process for creating its
bundle file.
Main application description
● Create a single page to cover 100% of the screen dimension and
divide it into 4 equal sections
● Declare configuration variable to have each sub application details in
the following format:
[
{
id: “grid”
url: “http://[SERVER_URL]/[BUNDLE_NAME].js”
},
{
id: “text”
url: “http://[SERVER_URL]/[BUNDLE_NAME].js”
},
{
id: “image”
url: “http://[SERVER_URL]/[BUNDLE_NAME].js”
},
{
id: “list”
url: “http://[SERVER_URL]/[BUNDLE_NAME].js”
}
]
● Load each sub application into its corresponding section
● Make sure each section has its own scroll policy
Sub applications
1. Grid:
Fetch data from https://jsonplaceholder.typicode.com/users and
display in a table with [ID, Name, Username] columns

2. Simple text:
Display a simple long text
3. Image:
Load and show a image expended on the entire application dimension
4. List:
Create a simple unordered list to show values, the values must be
passed down from the main application

Final suggested result

General requirements
● You should choose a JS framework for the Micro FrontEnd sub
applications like Angular, React, jQuery, Vanilla etc.
● You should not use any framework for the managing the Micro
● You can use any additional 3rd party JS tools / libraries to assist you
completing the assignment
● The main application should load the sub applications at runtime, NOT
at compile time
● You should NOT use iframes
● There is no need to deploy the application, everything can work locally
● Do not use Webpack 5 Module Federation
Bonus
● Do not use any framework for the Micro FrontEnd architecture (like
single-spa, or webpack module federation) - huge advantage
● Add versioning support for sub applications, each declaration should be
look like:
{
id: “grid”
version: “1.0.0”
url: “http://[SERVER_URL]/[BUNDLE_NAME].js”
}
Then find a way to build each application so it could be loaded with the
specified
● Figure out a way to manage runtimes for compatibility
● Make each sub application also as a standalone application so it can be
loaded directly into the browser
● We like pretty applications, use CSS and much as you need to make it
more impressive
● Quality is important for us, add some unit to cover the code

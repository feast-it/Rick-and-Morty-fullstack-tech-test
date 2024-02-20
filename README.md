# FullStack Tech Test

### The Challenge
We would like you to build a “mini app” using the https://rickandmortyapi.com/  REST API, (please do not use the JavaScript library available). The app should consist of a “Character Listing” page and a single “Character Information” page. The challenge comes in two parts:

The challenge is split into two parts FE and BE and about we recommend spending 2-3 hours on it, we do not expect everyone to complete both parts of the task, however please try to attempt both parts of the exercise. You can attempt them in any order however we would recommend starting with the BE task first. We would like to see your approach and way of working over the task being "complete". 

The exercise is very open on purpose, we want to see how you tackle building something from scratch yourself and what tech you reach for to accomplish i

We use NextJS, both the BE and FE tasks can be accomplished in the same application boilerplate. We have set up the project to utilise the pages directory however feel free to change this to the new app directory if you wish.

#### Part 1 - BE
Create a custom API to pre-filter all required data needed. The required data includes getting all Alive, Morty characters along with all of their associated data types Origin, Location and Episode data from the Rick and Morty API. https://rickandmortyapi.com/. Please ensure you read the docs thoroughly https://rickandmortyapi.com/documentation. We use GraphQl internally here at Togather. However, you can build the api using REST or GraphQl. The choice is up to you.

#### Part 2
Build a simple UI to list all characters using the basic wireframes provided. There is mock data provided for the character listing page and for the individual character page if the BE Task is not complete. However we would encourage you to use your own BE API if possible.

##### Please ensure your work checks all the points below – it’s what we will be looking out for

- Your chosen method for fetching and aggregating data.
- Chosen folder structure
- The layout should be based on the wireframes provided.
- Final work (whether complete or part complete) should be submitted in a git repository. (ideally we would like to see a commit history of some sort). With a README.md file, so we can run the app locally and test it ourselves.
- **DO NOT use the Rick and Morty JavaScript library**. We want to see how you architect aggregating data server side to pass it to the frontend.
- The site should be built using HTML, CSS and JavaScript (TypeScript), and as far as styling is concerned: SCSS, Pre/Post CSS, CSS Modules, and CSS-in-JS are all encouraged.
- The site should be built using responsive techniques.
- **YOU MUST** use the boilerplate provided.

### Taking things further:
(Not a requirement but if you think it will help us assess your skill level and passion).  If you have the time, here are some suggestions to enhance the app:

- Include Alive Morty characters (it is Rick and Morty at the end of the day - 😆)
- Use path aliases
- Introduce a build pipeline using Github CI / Circle CI or other CI tools.
- Responsive images
- Unit tests
- Performance optimisation (add a cache layer)

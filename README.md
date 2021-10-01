[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Connecting a Front End App to a Back End App


> At this point you should have your API and all of the routing endpoints completed.
>
> Now it is time to connect your API to a Front End React App.
>


### No wires attached: there are no wires that connect your front end to your back end.

- Your two projects(backend & frontend) have no knowledge of one another.

- They only talk through HTTP requests that we make using `fetch()` or `axios()`

- Think of your backend as just some app that hosts your DB (bc it is). It just waits for apps to interact with it via HTTP requests.

- It is the front end's job to use CRUD to interact with the backend and specify which kind of call is being made.

-----

## Back End Instructions
 - Clone down this backend [Ice Cream API](../../../ice-cream-api)
 - Change into the new directory.
 - Run `npm i` to install dependencies
 - Install nodemon if it is not already installed on your machine
 - Create a `.env` file and add a `DATABASE_URL` variable with your connection string
 - Run `node db/seed.js` to seed your database 
 - Run `nodemon index.js` to start your server

 > The backend is already set up with appropriate routes

## Front End Instructions

- Clone this repository.
- Change into the new directory.
- Run `npm i` to install dependencies
- Run `npm start` to start your React server


 ### You will be using CRUD operations to make the appropriate fetch() OR axios() calls to your backend that is up and running on `http://localhost:3111`.

-----

## Let's get some data on the page!
### Try writing the fetch() or axios() calls with the instructions provided before checking out the Solutions!

Start off by examining the files in this project. Look at what each component is returning and piece it together.
If you didn't get any errors after starting the server then you should see a loading screen instead of data.

## C(R)UD - Read

- Inside the `Flavors.js` file there is a useEffect().
- Let's write a fetch() or axios() call to get
some TV Shows from `http://localhost:3111/icecream`
- Next, parse the response into JSON (skip this step if you are using axios())
- Then in a `.then()` use `setFlavors()` to set `flavors` to the response.


```js
axios.get('http://localhost:3111/icecream')
    .then(res => setFlavors(res.data))
```
</br>


<p>We made a GET request to your API in order to retrieve data and populate our app.</p>
<p>After successfully getting data back and updating our flavors state, we should now see a bunch of flavors on our page.</p>
<p>Now we can navigate our app and check out individual flavors by clicking on them.</p>
<p>Notice there are buttons for editing and deleting each flavor. We'll come back to add functionality to these</p>
<hr>
</br>

## (C)RUD - Create

Ok, now that we can see our flavors, let's add functionality to add a new flavor to the database. Click on `Add Flavor` to display the form.

- Find the `handleSubmit` function in `Form.js` and inside you'll see a space to write your POST request to add a new show.

### fetch()
- We want to use the same API endpoint as our GET request: `http://localhost:3111/icecream`
- Remember, since this isn't a GET request we have to add a second argument to our fetch call. 
- Make the second argument an object with the following keys: a `method` that gets a value of `'POST'`, `headers` which gets a value of `{"Content-Type": 'application/json'}`, and `body` which gets a value of our show which has been parsed into JSON: `JSON.stringify(show)`


```js
fetch(`http://localhost:3111/icecream`, {
    method: "POST",
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(show) 
})
```
</br>


### axios()
- Like fetch(), we want to use the same API endpoint as the GET request: `http://localhost:3111/icecream`
- Axios takes two arguments, the first being the API endpoint we are posting to.
- The second argument is the data we are posting
```js

axios.post('http://localhost:3111/icecream', flavor)


```
</br>

Cool! When this is up and running you'll be able to add a new flavor to the database.

<hr>

## CR(U)D - Update

Now that we can Create new flavors and Read all of the flavors in our database, let's update existing flavors by adding a PUT request. 
- Find the `handleSubmit` function in our `FlavorID.js`.
- Add a fetch() or axios() call inside the `handleSubmit`

### fetch()
- This time, we want to target another endpoint to update a specific show: `http://localhost:3111/icecream/${flavor._id}`
- For this request, we are using the `flavor` we have saved to state in this file, specifically the `_id` that it is linked to in MongoDB.
- We use this endpoint to tell MongoDB which document in the collection we are targetting.
- Make `http://localhost:3111/icecream/${flavor._id}` the first argument in the fetch() call.
- Add a second argument like we did for POST, with the same keys: `method` with a value of `'PUT'`, `headers` with a value of `{'Content-Type': 'application/json; charset=UTF-8'}`, and `body` with a value of `JSON.stringify(show)`


```js
fetch(`http://localhost:3111/icecream/${flavor._id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(flavor)
})

```
</br>


### axios()
- Like fetch(), we want to target a specific flavor's endpoint in the API: `http://localhost:3111/icecream/${flavor._id}`
- Axios takes two arguments, the first being the flavor's endpoint in the API.
- The second is the updated flavor that we are submitting to the database to overwrite
the existing flavor

```js
axios.put(`http://localhost:3111/icecream/${flavor._id}`, flavor)

```

</br>

<p>Awesome! Now go try updating an existing flavor by clicking on the Edit button. It'll bring up a form that has values that represent info about each flavor.</p>
<p>When we update a field and click submit, It will redirect us to the home page. Go ahead and click on the show that you updated and you should see the updated changes! Woo!</p>
<hr>

## CRU(D) - Delete

Lastly, let's give our app the ability to delete shows by adding a DELETE request. 
- Find the `handleDelete` function in our `FlavorID.js`.
- Add a fetch() or axios() call inside the `handleDelete`

### fetch()
- To delete a document in the db, we want to target an endpoint to update a specific show: `http://localhost:3111/icecream/${flavor._id}`
- For this request, we are using the `flavor` we have saved to state in this file, specifically the `_id` that it is linked to in MongoDB.
- We use this endpoint to tell MongoDB which document in the collection we are targeting.
- Make `http://localhost:3111/icecream/${flavor._id}` the first argument in the fetch() call.
- Add a second argument like we did for POST, and PUT, but this time with only one key: `method` with a value of `'DELETE'`.

```js
fetch(`http://localhost:3111/icecream/${flavor._id}`, {
    method: 'DELETE'
})
```
</br>


### axios()
- Like fetch(), we want to target a specific show's endpoint in the API: `http://localhost:3111/icecream/${flavor._id}`
- Axios takes one argument - the flavor's API endpoint
- Here we are not sending any data. Just telling the backend to find a specific
flavor and delete it

```js

axios.delete(`http://localhost:3111/icecream/${flavor._id}`)

```
</br>

### And that's it! Try deleting one of the entries and see if it works. When it does, that means you're finished! You've successfully connected a React front end app to a backend API. :tada:

<p align="center">
<img src="https://media.giphy.com/media/xNBcChLQt7s9a/giphy.gif"/>
</p>

























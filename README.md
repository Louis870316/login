# Login design

![图片描述](https://img.onl/5Xjbyq)
![图片描述](https://img.onl/UlAASz)

A Login design web application for users that can use this website to log in the user interface demo
about the parties of front-end which refer to "Youns" (https://codepen.io/Youns_ezy54/pen/JjbdwZb) 
## Features
- Users can create his/her account 

### Technology
- template engine -> Using template engine to covert files from html-like to html for browser
- router -> Using http GET POST etc.. to do route
- MONGODB -> Using mongoose  help app.js connect to database

### RESTful 
This version use the RESTful design pattern to reconstruction routes of app.js

## **install and running steps**

> After downldad or clone this URL of github
１.Use terminal in the project

```properties
cd 'file name'
```

２.install node modules

```properties
npm install
```

３.Set up MongoDB

```js
mongoose.connect('database_URI')
```
４.Run the project
> node
```properties
npm run start
```
> nodemon( if you need)
```properties
npm run dev
```

５.Browse the project on the browser

```
http://localhost:3000
```

If project is running , terminal will output
```
Listening on http://localhost:3000
```
If mongoDB is connecting , terminal will output 
```
mongodb connected
```

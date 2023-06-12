
# MindFull Heaven
Live Link: https://toy-car-galaxy.web.app/

## Features
- This site made by react route (SPA) and used authentication and MongoDb.
- This site main focused on "CRUD" operations.
- There is navbar. In navbar I added 3 things like Logo text, ul list for page route and user profile and login/logout button conditionally.
- One Header Section like. it just added on home page at the top. In header I have one title one description and button and an background gradient color.
- Then added  Gallery section, It has few toy images.
- Next section our best toy collection, here I added few card about the toy card. Card will be filter by category. At first it will show all cards but when click category button then we can see cards by category.
- I have added two extra section also.
- Footer section added.
### Page Registration
- In this page added a registration form
- Also added google sign up method (Firebase)
### Page Login
- In this page added a login form
- Here you need email and password
- Email and password validation also here, you can't login when email or password field empty.
### All toy page
- This is a private route. Only logged user can see this route on navbar.  
- There is all data in table which is show all toys data posted by admin. All data can see user. Table has a Details button. Which is redirect to single toy details page.
- This is important for CRUD operation. this is for "GET(find)". And filter by email.
### My toy page
- This is a private route. Only logged user can see this route on navbar.  
- There is all data in table which is added by user own.
- This is important for CRUD operation. this is for "GET". And filter by email.
### Add toy page
- This is a private route. Only logged user can see this route on navbar.  
- Here is all input field which is need to set data on mongodb.
- This is important for CRUD operation. this is for "POST".
### Update toy page
- This route came from my toys edit icon button. 
- Here is all 3 field which is need to update data on mongodb data.
- This is important for CRUD operation. this is for "PUT".
### Single toy view details page
- If you click on chef card view details button then it will redirect single toy information page, in this page each toy has details. 
- Details has image, toy name, ratings and description.
- This is private page only logged user can visit and see in this page.
- If user can't log in then this page will redirects login page.
### Blog page
- Blog page has few questions and answers
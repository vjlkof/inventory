## Using express-template-typescript

# Task

## Your Inventory app should have categories and items,

- [DONE] Before you begin, take a moment to write down all of the models you’ll need and the fields that should go in them. It might help to grab a pencil and some paper and literally draw a diagram like you saw in the MDN tutorial on databases.
- [DONE] Items should at least have: a name, description, category, price, number-in-stock and URL, though you should feel free to add more fields if it seems relevant to the type of business you’ve chosen.
- [DONE] We’re going to follow the basic path that was demonstrated by the MDN tutorial to set up and flesh out your app, so first choose a templating language and generate the boilerplate skeleton with express-generator.
- [] In the Library tutorial you populated your database with some sample data that was provided in a populatedb.js file. Actually understanding how that worked was over your head at the time, but now that you’ve finished that tutorial you’ll be able to understand how it works. Download the populatedb.js file and edit it, or re-write it using the specifics of your models and then run it to populate your database!
- [] Set up the routes and controllers you’re going to need.
- [] Create all of the ‘READ’ views (i.e. view category, and view item)
- [] Create all the forms and build out the controllers you need for the rest of the CRUD actions.
- [] Categories should at least have a name, a description and a URL.
- [] So when the user goes to the home-page they can choose a category to view, and then get a list of every item in that category.
- [] You should include all of the CRUD methods for categories, so anybody that’s visiting the site can Create, Read, Update or Delete Category.
- [] You should include all of the CRUD methods for both items, so anybody that’s visiting the site can Create, Read, Update or Delete any Item.
- [] Create a new Mongo Collection using the web-interface as demonstrated in the tutorial and then set up your database schemas and models.
- [] Deploy it and show off what you’ve done!

## Extra credit

- [] Try to figure out how to add and upload images for each item. Use the multer middleware which was created by the Express team. The documentation in the README there should be enough to get you going.
- [] While you can store the image buffer data as binary directly in MongoDB, this can be quite a performance hit the more images you have to handle and the larger they are. You may wish to look into using a service such as Cloudinary where you can upload images to, then store the images’ URLs in MongoDB instead.

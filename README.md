# What-to-pack List 🎒
A website where it's possible to add/remove/update items in a list, so you don't forget what to put in your backpack before traveling.

You need to fill in the form with the item's name and quantity and click on "Save". The item will then be added to a list that appears to the right of the screen. If you try to insert an item that is already on the list, the item will be updated in the list with the new quantity. 

Every item in the list has a red button. When clicked, the item will be removed from the list.

The list will still be available even if you close your browser.

## View online!
This project is hosted on Vercel and can be checked here: https://what-to-pack-list.vercel.app

![Screenshot of the project, showing a backpack to the left, with a form to add an item and its quantity, and to the right a list of items, with quantity, item name and a close button](https://user-images.githubusercontent.com/19349339/188967673-4a9972c4-f14b-4fdf-935b-7f6cdfa1f25d.png)

# Credits

This project was developed in a course from [Alura](https://www.alura.com.br) called "JavaScript na Web: armazenando dados no navegador" (JavaScript on the Web: storing data in your browser), where we learn how to use Local Storage to persist data in the browser.

HTML and CSS content were already created prior to the beginning of the course. We developed the JavaScript file and made some modifications to HTML and CSS when needed.

The picture for the backpack was created by [Tricia Katz](https://codepen.io/triciaakatz/details/LbWVPj) using only CSS. Amazing work! 

Instructor: [Pedro Marins](https://github.com/pedromarins).

# What we learned
We use local storage to persist data in the browser:

```javascript
    localStorage.setItem(key, value) //add JSON data to Local Storage
    localStorage.getItem(key) //get JSON data from Local Storage
``` 
Whenever the page is loaded, we get data from local storage or create an empty array if no data is available. This array will hold every item in the "what-to-pack list" and is used to interact with data and the local storage, by using methods such as `JSON.parse()`, `JSON.stringify()`, `find()`, `findIndex()`, `push()` and `splice()`.

We also manipulate the DOM to add/remove/update items on screen, by using methods such as `querySelector()`, `createElement()`, `appendChild()` and `remove()`.

## Additional feature: responsiveness
As an additional feature, I added specific styles for screens up to 940px (tablet) and up to 425px (mobile), using media queries.
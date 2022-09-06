# Travel backpack reminder 🎒
A website where it's possible to add/remove/update items in a list, so you don't forget what to put in your backpack before traveling.

You need to fill in the form with the item's name and quantity and click on "Save". The item will then be added to a list that appears to the left of the screen. If you try to insert an item that is already on the list, the item will be updated in the list with the new quantity.

# Credits

This project was developed in a course from [Alura](https://www.alura.com.br) called "JavaScript na Web: armazenando dados no navegador" (JavaScript on the Web: storing data in your browser), where we learn how to use LocalStorage to persist data.

HTML and CSS content were already created prior to the beginning of the course. We developed the JavaScript file and made some modifications to HTML and CSS when needed.

Instructor: [Pedro Marins](https://github.com/pedromarins)

# How it works
## Adding/Updating items
We use local storage to persist data in the  browser:
    
    localStorage.setItem(key, value)

Whenever the page is loaded, we load data from local storage or create an empty array if no data is available. This array will hold every item in the backpack and is used to add/update the local storage.

We also manipulate the DOM to show the new item on screen, by using methods `createElement` and `appendChild()`.
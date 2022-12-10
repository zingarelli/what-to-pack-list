# What-to-pack List 🎒

[Veja esta página em português](#detalhes-do-projeto)

A website in which is possible to add/remove/update items in a list, so you don't forget what to put in your backpack before traveling.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **What-to-pack List**
| :label: Tecnologias | html, css, javascript
| :rocket: URL         | https://what-to-pack-list.vercel.app
| :fire: Course     | https://www.alura.com.br/curso-online-javascript-web-armazenando-dados-navegador

![](https://user-images.githubusercontent.com/19349339/206853655-3d36f09b-61fe-4c6e-8b34-8792fdf6448d.png)

## Project details

You need to fill in the form with the item's name and quantity and click on "Save". The item will then be added to a list that appears to the right of the screen (or below the backpack, if you're viewing the website in your phone). If you try to insert an item that is already on the list, the item will be updated in the list with the new quantity. 

Every item in the list has a red button. When clicked, the item will be removed from the list.

The list will still be available even if you close your browser.

![gif of adding and removing items in the backpack](https://user-images.githubusercontent.com/19349339/206853444-d19991d0-3207-49dc-a596-7658db7d6c64.gif)

HTML and CSS content were already created prior to the beginning of the course. We developed the JavaScript file and made some modifications to HTML and CSS when needed.

## Credits

This project was developed in a course from [Alura](https://www.alura.com.br) called "JavaScript na Web: armazenando dados no navegador" (JavaScript on the Web: storing data in your browser), where we learn how to use Local Storage to persist data in the browser.

The picture for the backpack was created by [Tricia Katz](https://codepen.io/triciaakatz/details/LbWVPj) using only CSS. Amazing work! 

Instructor: [Pedro Marins](https://github.com/pedromarins).

## What we learned
We use local storage to persist data in the browser:

```javascript
    localStorage.setItem(key, value) //add JSON data to Local Storage
    localStorage.getItem(key) //get JSON data from Local Storage
``` 
Whenever the page is loaded, we get data from local storage or create an empty array if no data is available. This array will hold every item in the "what-to-pack list" and is used to interact with data and the local storage, by using methods such as `JSON.parse()`, `JSON.stringify()`, `find()`, `findIndex()`, `push()` and `splice()`.

We also manipulate the DOM to add/remove/update items on screen, by using methods such as `querySelector()`, `createElement()`, `appendChild()` and `remove()`.

## Additional feature: responsiveness
As an additional feature, I added specific styles for screens up to 940px (tablet) and up to 425px (mobile), using media queries.

---

## Detalhes do projeto

Um site em que é possível adicionar, remover e atualizar itens em uma lista (estilizada como uma mochila), para que você não se esqueça do que precisa levar para uma viagem.

Há um formulário com dois campos a serem preenchidos: o nome e a quantidade de um item. Após clicar em "Save", o item será adicionado a uma lista que irá aparecer no lado direito da tela (ou abaixo, caso esteja vendo o site em uma tela de celular). Ao tentar inserir um item que já esteja na lista, ele será atualizado com a nova quantidade informada.

Todos os itens na lista possuem um botão vermelho que, quando clicado, remove este item da lista.

Os dados da lista são salvos localmente, então eles continuarão aparecendo em seu navegador mesmo ao fechá-lo.

![gif mostrando adição e remoção de itens da mochila](https://user-images.githubusercontent.com/19349339/206853444-d19991d0-3207-49dc-a596-7658db7d6c64.gif)

Os conteúdos em HTML e CSS foram disponibilizados pelo curso, mas fiz algumas modificações necessárias para adicionar novas funcionalidades e tornar a página responsiva para diferentes tamanhos de tela. O foco do curso foi desenvolver a parte de JavaScript.

## Créditos

Este projeto foi desenvolvido em um curso de JavaScript da  [**Alura**](https://www.alura.com.br) chamado "JavaScript na Web: armazenando dados no navegador", em que aprendia a utilizar o "Local Storage" do navegador para persistir dados.

A imagem da mochila foi criada pela [**Tricia Katz**](https://codepen.io/triciaakatz/details/LbWVPj) usando apenas CSS. Ficou incrível!

**Instrutor do curso**: [**Pedro Marins**](https://github.com/pedromarins).

## O que aprendemos

Nós utilizamos o objeto "localStorage" para persistir dados no navegador: 

```javascript
    localStorage.setItem(key, value) //add JSON data to Local Storage
    localStorage.getItem(key) //get JSON data from Local Storage
``` 

Toda vez que a página é carregada, obtemos dados do local storage ou, caso não haja dados, criamos um array vazio. O array irá armazenar todos os itens da lista e será o meio de transitar os dados no local storage, utilizando métodos como `JSON.parse()`, `JSON.stringify()`, `find()`, `findIndex()`, `push()` e `splice()`.

Também manipulamos o DOM para adicionar, remover e atualizar os itens na tela, usando métodos como `querySelector()`, `createElement()`, `appendChild()` e `remove()`.

## Funcionalidade adicional: responsividade

Como funcionalidade adicional, eu também criei estilos de CSS específicos para telas até 940px (tablet) e até 425px (celular), utilizando media queries.
function addListValue () {
    
let input = document.getElementById("first-name");

let textarea = document.getElementById("message");

let newItemList = document.createElement("li");

let newItemListContent = document.createTextNode(input.value);

newItemList.appendChild (newItemListContent);

textarea.appendChild (newItemList); }






/*
//Création d'une balise section 
let section = document.createElement("section"); 

//Création d'une balise h1 
let titre = document.createElement("h1"); 

//Création d'un texte 
let titreTexte = document.createTextNode('Nouveau titre'); 

//Ajout du texte à la balise h1 précédement créé 
titre.appendChild(titreTexte); 

//Création d'une balise h1 
let paragraphe = document.createElement("p"); 

//Création d'un texte 
let paragrapheTexte = document.createTextNode('Nouveau paragraphe'); 

//Ajout du texte à la balise p précédement créé 
paragraphe.appendChild(paragrapheTexte); 

//Ajout de la balise h1 à la section 
section.appendChild(titre); 

//Ajout de la balise p à la section 
section.appendChild(paragraphe); 

//Ajout de la classe CSS 
paragraphe.classList.add("styleP") 

//Création d'une balise section 
let main = document.querySelector("main"); 

main.appendChild(section);





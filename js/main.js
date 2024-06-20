
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
const flexCont = document.getElementById("img_big");
const thumb = document.getElementById("thumb");


// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.   Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
const immagini = [
    {   image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.' 
    },
    {   image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
    },
    {   image: 'img/03.webp',
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
    },
    {   image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
    },
    {   image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.' 
    } 
];


    // ciclo per generare gli elementi
for (let index = 0; index < immagini.length; index++) {
    let element = immagini[index];
    // console.log(immagini);
    // console.log(element.image);

    if(index === 0){
        flexCont.innerHTML += `                
                <div class="cont">
                    <img src="${element.image}" alt="${element.title}">
                    <div id="text">
                        <h2>${element.title}</h2>
                        <p>${element.text}</p>
                    </div>
                </div>
            `;
    
        thumb.innerHTML += 
        `
                <div class="row border">
                    <img src="${element.image}" alt="${element.title}">
                </div>
        `;

    }else{
        flexCont.innerHTML += `
                <div class="cont none">
                    <img src="${element.image}" alt="${element.title}">
                    <div id="text">
                        <h2>${element.title}</h2>
                        <p>${element.text}</p>
                    </div>
                </div>
            `;
    
        thumb.innerHTML += `
                <div class="row ">
                    <img src="${element.image}" alt="${element.title}">
                </div>
            `;
    }       
}

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra


//variabili click 
const btnUp = document.getElementById("btn_up");
const btnDown = document.getElementById("btn_down");
const items = document.getElementsByClassName("cont");
const itemsThumb = document.getElementsByClassName("row");

console.log(items);

//click down
let contaClick = 0 ;
btnDown.addEventListener("click",setInterval (clickDown,3000)
    
);


//click up

btnUp.addEventListener("click",
    function(){
        console.log(contaClick);
        if(contaClick === 0 ){
            items[contaClick].classList.add("none");
            itemsThumb[contaClick].classList.remove("border");
            items[items.length-1].classList.remove("none");
            itemsThumb[items.length-1].classList.add("border");
            contaClick = items.length-1;
            console.log(contaClick);
        } else if(contaClick <= items.length){


            
            items[contaClick].classList.add("none");
            itemsThumb[contaClick].classList.remove("border");
            items[contaClick-1].classList.remove("none");
            itemsThumb[contaClick-1].classList.add("border");
            contaClick--;
        }
    }

)

// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.



// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.



// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.


////////FUNZIONI

// TIMER
function clickDown(){
    
        if(contaClick < items.length -1){
            items[contaClick].classList.add("none");
            itemsThumb[contaClick].classList.remove("border"); 
            items[contaClick+1].classList.remove("none");
            itemsThumb[contaClick+1].classList.add("border");


            contaClick++;
        }   else{
            items[contaClick].classList.add("none");
            itemsThumb[contaClick].classList.remove("border");
            items[0].classList.remove("none");
            itemsThumb[0].classList.add("border");
            contaClick = 0;
        }
        
        console.log(contaClick);
    

}
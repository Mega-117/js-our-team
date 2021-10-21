//aggiungere card all html con js
//richimo il div contenitore delle card in una variabile
let cardContainer = document.querySelector(".team-container");
console.log(cardContainer);

//creo array con oggetto ogni membro del team coi loro dati (chiavi[nome ruolo e src foto])
let arrUtenti = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        urlImg: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        urlImg: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        urlImg: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        urlImg: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        urlImg: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        urlImg: "barbara-ramos-graphic-designer.jpg",
    },

];
console.log(arrUtenti);
//faccio una funz per fare ciclere gli utenti
//faccio ciclare gli ut
// e salvo il nome il ruolo e img in 3 variabili
cardGenerator();


function cardGenerator() {
    for (i = 0; i < arrUtenti.length; i++) {
        let Utente1 = arrUtenti[i];

        //console.log(Utente1);
        Utente1.nome;
        //console.log(Utente1.nome);
        Utente1.ruolo;
        //console.log(Utente1.ruolo);
        Utente1.urlImg;
        //console.log(Utente1.urlImg);

        //creo la variabile della carta dove inserire il codice html
        //  -sosttituisco i dati della cella con i dati per ogni utente.
        //inserico tutto nel html

        let card = `<div class="team-card">
        <div class="card-image">
        <img src="img/${Utente1.urlImg}" alt="Wayne Barnett" />
        </div>
        <div class="card-text">
        <h3>${Utente1.nome}</h3>
        <p>${Utente1.ruolo}</p>
        </div>
        </div>`;
        //console.log(card);

        cardContainer.innerHTML += card;
    }
}

//mettere in ascolto il btn
let btnAdd = document.getElementById("addMemberButton");
console.log(btnAdd);
btnAdd.addEventListener("click", function () {

    //selezionare i vari box del form
    //ricavare il testo
    //salvare il testo in una costante
    let nomeNewUt = document.getElementById("name");
    let ruoloNewUt = document.getElementById("role");
    let imgNewUt = document.getElementById("image");
    nomeNewUt.value;
    ruoloNewUt.value;
    imgNewUt.value;
    //
    console.log(nomeNewUt.value);
    console.log(ruoloNewUt.value);
    console.log(imgNewUt.value);
    let newUtente = {
        nome: nomeNewUt.value,
        ruolo: ruoloNewUt.value,
        urlImg: imgNewUt.value,
    };
    arrUtenti.push(newUtente);
    console.log(arrUtenti);
    //invoco la funz per generare il nuovo utente
    cardContainer.innerHTML = "";
    cardGenerator();
});
//aggiungere le 3 variabili nel array facendo così si genererà in modo automatico con la funz cardGenerator
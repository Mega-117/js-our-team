//aggiungere card all html con js
//richimo il div contenitore delle card in una variabile
const cardContainer = document.querySelector(".team-container");
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
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        urlImg: "angela-caroll-chief-editor.jpg",
    }
];

//faccio una funz per fare ciclere gli utenti
//faccio ciclare gli ut
// e salvo il nome il ruolo e img in 3 variabili

for (i = 0; i < arrUtenti.length; i++) {
    let Utente1 = arrUtenti[i];
    console.log(Utente1);
    Utente1.nome;
    console.log(Utente1.nome);
    Utente1.ruolo;
    console.log(Utente1.ruolo);
    Utente1.urlImg;
    console.log(Utente1.urlImg);

    //creo la variabile della carta dove inserire il codice html
    let card = `<div class="team-card">
    <div class="card-image">
      <img src="img/${Utente1.urlImg}" alt="Wayne Barnett" />
    </div>
    <div class="card-text">
      <h3>${Utente1.nome}</h3>
      <p>${Utente1.ruolo}</p>
    </div>
  </div>`;
    console.log(card);

    cardContainer.innerHTML += card;
}
//  -sosttituisco i dati della cella con i dati per ogni utente.
//inserico tutto nel html
/* Mail
Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. Non è consentito usare nessun metodo proprio degli array(come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. 
Nota: Non è necessario provvedere alla validazione delle email
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte ? Se dobbiamo confrontare qualcosa che "cosa" ci serve ? */

// Creiamo una variabile per memorizzare un array che conterrà la lista degli invitati.
let invitati = [
    "giulia.rossi92@example.com",
    "marco_bianchi@testmail.net",
    "lucia.verdi.fake@fakemail.org",
    "andrea.neri123@demoemail.com",
    "chiara.lombardi@emailtest.co",
    "fabrizio.conti@placeholder.net",
    "laura.galli.sim@fakemailbox.io",
    "davide_ferri@tempmail.xyz",
    "francesca.romano@notarealmail.com",
    "matteo.greco@nomail.example"
];

// Creiamo una variabile per memorizzare l'email inserita dall'utente.
const userEmail = String(prompt("Inserisci la tua email:")).toLowerCase();
// Creiamo una variabile booleana per memorizzare il risultato.
let isInvited = null;

// Creiamo un ciclo per poter scorrere la lista degli invitati.
for (let i = 0; i < invitati.length; i++) {
    // Creiamo una variabile locale per memorizzare l'invitato corrente e convertiamo la stringa in minuscolo in modo da rendere uguali le stringhe per il confronto.
    invitatoCorrente = invitati[i].toLowerCase();

    // Confrontiamo la stringa digerita dall'utente con la stringa corrente contenuta nell'array.
    if (userEmail === invitatoCorrente) {
        // Se la condizione è vera assegnamo true alla variabile isInvited.
        isInvited = true;
        break;
    } else {
        // Altrimenti assegniamo false.
        isInvited = false;
    }
}

// Creiamo un condizione che restituisca un messaggio in output in base al valore di isInvited.
if (isInvited) {
    console.log("Sei nella lista degli invitati!");
} else {
    console.log("Purtroppo non sei nella lista degli invitati");
}

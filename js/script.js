/* TRAMITE PROMPT RICHIEDE
NOME 
COGNOME 
ETA 
CITTA 
EMAIL 

SOTTO INFO UTENTE IN H1
TUTTI QUESTI DATI IN P STRONG 
IN VIDEO 

IN CONSOLE CON DOCUMENT WRITE E ANCHE IN UN UNICO ALERT 
IN UNICA RIGA: NOME+COGNOME+ETA+CITTA+(EMAIL)
 */

/*  var nome = window.prompt('scrivi il tuo nome');
console.log(nome); 

var cognome = window.prompt('scrivi il tuo cognome');
console.log(cognome); 

var eta = window.prompt('scrivi la tua età');
console.log(eta); 

var citta = window.prompt('scrivi la tua città');
console.log(citta); 

var email = window.prompt('scrivi la tua email');
console.log(email); 
 */


var nome = "Mario";
var cognome = "Rossi";
var eta = "55";
var citta = "Roma";
var email = "mariorossi@gmail.com";



document.getElementById('nome').innerHTML = nome;
document.getElementById('cognome').innerHTML = cognome;
document.getElementById('eta').innerHTML = eta;
document.getElementById('citta').innerHTML = citta;
document.getElementById('email').innerHTML = email;


var nome = "Mario";
console.log(typeof nome);
var cognome = "Rossi";
console.log(typeof cognome);
var eta = "55";
console.log(typeof eta);
var citta = "Roma";
console.log(typeof citta);
var email = "mariorossi@gmail.com";
console.log(typeof email);


window.alert(nome + ' ' + cognome + ' ' + eta + ' ' + citta + ' ' + email)

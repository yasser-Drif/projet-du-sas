var prompt=require('prompt-sync')();
function menu(){


let choix="";

 while(choix !== "0") // pour quittez le programme quand tapez 0.
 {
console.log("===========================================");
console.log("             RAILWAY MANAGER               ");
console.log("===========================================");

console.log("1. Afficher les trajets: ");
console.log("2. Acheter un ticket: ")
console.log("3. Afficher les tickets: ")
console.log("4. Annuler un ticket: ")
console.log("5. Rechercher un ticket: ")
console.log("6. Filtrer les trajets: ")
console.log("7. Trier les trajets:")
console.log("0. Quitter: ")

choix= prompt("choisi entre (0 et 7): ")



switch(choix){
    case "1" :
        affichertrajet();
        break;
    case "2" :
        achetezticket();
        break;
    case "3" :
        affichertickets();
        break;
    case "4" :
        annulerTicket();
        break;
    case "5" :
        rechercherTicket();
        break;
    case "6" :
        filtrertrajets();
        break;
    case "7" :
        console.log("Trier les trajets: ")
        break;
    case "0" :
        console.log("Tu avais quittez! Bon journée! ");
        break;
    default:
    console.log("------------------------------------------------------")    
    console.log("                 Choix invalide")
    console.log("------------------------------------------------------")
    } 
  }
}
  const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
function affichertrajet() {
    console.log("================= Trajets disponibles ==================")
    for( let trip of trips ){
        console.log("ID: ", trip.id);
        console.log("Départue: ", trip.departure);
        console.log("Destination: ", trip.destination);
        console.log("L'heure du départ: ", trip.departureTime);
        console.log("L'heure du arivée: ", trip.arrivalTime);
        console.log("Prix: ", trip.price);
        console.log("Place disponible: ", trip.availableSeats)
        
    }
}
const tickets = [];
let nextTicketId = 1; 
menu();

function achetezticket(){
    let nomcomplet=prompt("Entrez votre nom complet: ");
    let idtrejet=Number(prompt("Entrez le ID du trajet: "));
    let trajet = trips.find(function(trip){  
        return trip.id === idtrejet;
    })

    if(!trajet){
    console.log("====================================================")
    console.log("Trajet introuvable. Essaye un autre.")
    console.log("====================================================")

        return;
    }
    if(trajet.availableSeats<=0){
    console.log("====================================================")
    console.log("Malheuresement, le train est complet.")
    console.log("====================================================")

        return;
    }
   let placesOccupees = tickets
    .filter(function(ticket){  
        return ticket.tripId === trajet.id;
    })
    .map(ticket => ticket.seatNumber);

let numeroPlace = 1;

while(placesOccupees.includes(numeroPlace)){
    numeroPlace++;
}

let ticket={
    id: nextTicketId++,
    passengerName: nomcomplet,
    tripId: trajet.id,
    seatNumber: numeroPlace,
    price: trajet.price,

    }
    trajet.availableSeats--;
    tickets.push(ticket);
    console.log("====================================================")
    console.log("Ticket acheté avec succès.");
    console.log("Ticket: " + ticket.id);
    console.log("Passager: ", ticket.passengerName);
    console.log("Departure: ", trajet.departure);
    console.log("Destination: ", trajet.destination);
    console.log("Place: ", ticket.seatNumber);
    console.log("Prix: ", ticket.price);
    console.log("====================================================")
}
function affichertickets(){
    console.log("=================== =TICKETS ======================");

    if(tickets.length === 0){
    console.log("====================================================")
    console.log("Aucun tickets enregistré.");
    console.log("====================================================")
        return;
    }

    tickets.forEach(ticket => {  
        let trajet = trips.find(function(trip){ 
            return trip.id === ticket.tripId;
        });

        console.log("------------------------------------------------");
        console.log("| TICKET: " + ticket.id);
        console.log("| passager: ", ticket.passengerName);
        console.log("| Le depart: ", trajet.departure);
        console.log("| Vers: ", trajet.destination);
        console.log("| Place: ", ticket.seatNumber);
        console.log("| Prix: ", ticket.price + "DH");
        console.log("-------------------------------------------------");
    });
}
function annulerTicket(){ 
    let idticket = Number(prompt("Identifiant du ticket : ")); 
 
    let ticket = tickets.find(function(ticket){
        return ticket.id === idticket;
    }); 
 
    if(!ticket){ 
        console.log("====================================================")

        console.log("Ticket introuvable."); 
        console.log("====================================================")

        return; 
    } 
 
    let trajet = trips.find(trip => trip.id === ticket.tripId);   // =(function(trip{
    // return treip.id === ticket.tripId}))
 
    let index = tickets.indexOf(ticket); 
    tickets.splice(index, 1); 
 
    trajet.availableSeats++; 
 
    console.log("----------------------------------------------------------") 
    console.log("Ticket annulé avec succès."); 
    console.log("La place " + ticket.seatNumber + " est maintenant disponible."); 
    console.log("----------------------------------------------------------") 
}
function rechercherTicket(){
    
    let nom = prompt("Nom du passager : ");

    let resultats = tickets.filter(function(ticket){ 
        return ticket.passengerName.toLowerCase() === nom.toLowerCase();
});

    if(resultats.length === 0){
        console.log("========================================================")
        console.log("Aucun ticket trouvé pour ce passager.");
        console.log("========================================================")
        return;
    }

    resultats.forEach(function(ticket)  {
        let trajet = trips.find(function(trip){
        return trip.id === ticket.tripId;
        });

        console.log("---------------------------------------------------------");
        console.log("Ticket: " + ticket.id);
        console.log("Passager: " + ticket.passengerName);
        console.log("Trajet: " + trajet.departure + " → " + trajet.destination);
        console.log("Place: " + ticket.seatNumber);
        console.log("Prix: " + ticket.price + " DH");
        console.log("--------------------------------------------------------");

    });
}
function filtrertrajets(){
    
    
    
    let ville = prompt("Ville de départ : ");

    let resultat = trips.filter(function(trip){
        return trip.departure === ville;
    });

    if(resultat.length === 0){
        console.log("=========================================================")
        console.log("Aucun trajet trouvé.");
        console.log("=========================================================")
        return;
    }

    console.log("============================================================");

    resultat.forEach(trip => {  //resultat.forEach(function(trip)
        console.log(trip.departure + " → " + trip.destination + " : " + trip.price + " DH");
    });

    console.log("============================================================");
}

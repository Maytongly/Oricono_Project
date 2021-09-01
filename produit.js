fetch("http://localhost:3000/api/teddies")

.then(function(response){
    if(response.ok){
        return response.json();
    }
})
//récupère les données du serveur
.then(function(teddies){
})
.catch(function(err){
    console.log("erreur :" + err)
    let mainElement = document.getElementById('main')
    mainElement.innerHTML += '<h1 class="titre">impossible d\'accéder au serveur. Lancer JWDP5 dans VScode ou Powershell avec npm start</h1>'  
})

const queryString = window.location.search;
console.log (queryString);

const urlParams = new URLSearchParams (queryString);

const product = urlParams .get ('produit')
console.log (produit);

const color = urlParams.get ('color')
console.log (couleur);

const newUser = urlParams.get ('newuser')
console.log (newUser);
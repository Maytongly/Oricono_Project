fetch("http://localhost:3000/api/teddies")
//le premier .then nous permet de récupérer le résultat au format json
.then(function(response){
    if(response.ok){
        return response.json();
    }
})
//récupère les données du serveur
.then(function(teddies){
    let mainElement = document.getElementById('main')
    let HeaderElt = document.getElementById('header')

    HeaderElt.innerHTML = '<div class="bg-light"><div class="text-center"><h1>Oricono</h1></div></div>'


     teddies.forEach(teddy => {
        mainElement.innerHTML += `<div class="card mb-3 mx-3 shadow"><div class="card-body"><h2 class="card-title"> ${teddy.name} </h2>
        <img src ="${teddy.imageUrl}" class="card-img">
        <p class="card-text">Price: ${teddy.price}<br/>
        <span style="text-decoration: underline">Description:</span><br/>${teddy.description}</p></div></div>`
    });

    console.log(teddies);
})
.catch(function(err){
    console.log("erreur :" + err)
    let mainElement = document.getElementById('main')
    mainElement.innerHTML += '<h1 class="titre">impossible d\'accéder au serveur. Lancer JWDP5 dans VScode ou Powershell avec npm start</h1>'  
})


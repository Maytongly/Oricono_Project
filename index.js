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
    let asideElt = document.getElementById('aside')

    asideElt.innerHTML = '<div class="text-center"><h2>Présentation de nos produit:</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Quaerat quasi deserunt autem maiores.<br/> Libero nesciunt, illum veniam harum doloremque quas vero qui reprehenderit labore nemo est quibusdam alias consequuntur necessitatibus.</p></div>'
    

     teddies.forEach(teddy => {
        mainElement.innerHTML +=
        `<div class="container">
            <div class="row mb-4 ">
                <div class="col-12 col-lg-0">
                    <a href="produit.html">
                    <div class="card mb-4 mb-lg-0 shadow">
                        <div class="card-body" style="background-image: url(image/plume_beige.jpg);">
                            <img src ="${teddy.imageUrl}" class="card-img">
                            <h3 class="card-title" style="font-family: 'Architects Daughter', cursive;"> ${teddy.name} </h3>
                            <p class="card-text">Price: ${(teddy.price/100) .toFixed(2) +"€"}</p>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </div>`
    });

    console.log(teddies);
})
.catch(function(err){
    console.log("erreur :" + err)
    let mainElement = document.getElementById('main')
    mainElement.innerHTML += '<h1 class="titre">impossible d\'accéder au serveur. Lancer JWDP5 dans VScode ou Powershell avec npm start</h1>'  
})


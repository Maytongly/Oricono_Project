const urlSearch = window.location.search

const urlParams = new URLSearchParams (urlSearch)

const productId = urlParams.get('id')


fetch(`http://localhost:3000/api/teddies/${productId}`)
//fetch('http://localhost:3000/api/teddies/' + productId)
.then(function(response){
    if(response.ok){
        return response.json();
    }
})

.then(function(data){
    console.log(data);
    let mainElement = document.getElementById('main')
     
    //autre syntaxe : mainElement.innerHTML = '<div><h2>' + product.name + '</h2></div>'
    mainElement.innerHTML = displayColorsProduct (data)
   

    let btnElement = document.getElementById('btn')//on vise l'ID btn dans le DOM
    btnElement.addEventListener('click',function(event){
        let elt = document.querySelector('select')//permet de récupérer les données de la balise select
        //alert (elt.value)
        let  product = data
        product.selectedColor = elt.value;
        console.log(product)

        let cart = [];//création d'un tableau cart
        if(localStorage.getItem('panier')){
            console.log('un truc dans le panier')
            cart = [...JSON.parse(localStorage.getItem('panier'))]
            //[...] permet d'ajouter au tableau les données qui se trouvent dans le localstorage.getItem('panier')
        }

        cart.push(product)//ajoute dans le panier le produit sélectionné
        console.log(cart)

        localStorage.setItem('panier', JSON.stringify(cart))//localStorage ne comprend que les chaines de caractère, c'est pour cela que l'on va utiliser Json.stringify pour transformer la chaine de caratère en OBJET.
    })
})

function displayColorsProduct(product){
    return  `<div class=" row my-4 mx-auto container">
    <div class="col-lg-6 m-auto py-4 card" style="background-image: url(image/plume_beige.jpg);">
        <div class="card-body" >
            <h2 class="card-title" style="background-color: rgb(192, 181, 154);font-family: 'Architects Daughter', cursive;">${product.name}</h2>
            <img class="card-img" src= ${product.imageUrl}>
            <p class="card-text" style="background-color: rgb(192, 181, 154);">Price:<br/>${(product.price/100) .toFixed(2) + "€"}</p>
            <p class="card-text">Description:<br/> ${product.description}</p>
            <div id="choice">
            <select>
                ${displayColors(product.colors)}
            </select>
            <button type="button" class="btn btn-primary" id="btn">Ajouter à Panier</button>
            </div>        
        </div>
    </div>
    </div>`
}

function displayColors (colors){
    /*let options = ""
    colors.forEach(element => { 
        options += `<option>${element}</option>`
        
    });
    return options*/
    /*
    let options = colors.map(color =>`<option>${color}</option>`  );
    console.log("map", options);
    let stringOptions =  options.join("");
    console.log("join", stringOptions);
    return stringOptions;
    */
    return colors.map(color =>`<option>${color}</option>`).join("")
}

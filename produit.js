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

.then(function(product){
    console.log(product);
    let mainElement = document.getElementById('main')
     

    //mainElement.innerHTML = '<div><h2>' + product.name + '</h2></div>'
    mainElement.innerHTML = displayColorsProduct (product)


})

function displayColorsProduct(product){

    return  `<div class=" row my-4 mx-auto container">
    <div class="col-lg-6 m-auto py-4 card">
        <div class="card-body" style="background-image: url(image/plume_beige.jpg);">
            <h2 class="card-title">${product.name}</h2>
            <img class="card-img" src= ${product.imageUrl}>
            <p class="card-text">Price:<br/>${(product.price/100) .toFixed(2) + "€"}</p>
            <p class="card-text">Description:<br/> ${product.description}</p>
            <div id="choice">
            <select>
                <option>${product.colors}</option>
            </select>
            <button type="button" class="btn btn-primary" id="btn">Ajouter à Panier</button>
            </div>        
        </div>
    </div>

    </div>`
}




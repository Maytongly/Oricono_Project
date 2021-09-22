let cart = [...JSON.parse(localStorage.getItem('panier'))]
console.log(cart);

let mainElement = document.getElementById('main')
mainElement.innerHTML += `
<div id="tableau">
    <h2>Mon Panier </h2>
    <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>couleur</th> 
                <th class="tableprix">prix</th>
                <th></th>
            </tr>
        </thead>
        <tbody>${displayCartItems(cart)}
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td>Total</td>
                <td></td>
        </tfoot>
    </table>
</div>`

function displayCartItems (cart){
    return cart.map(product => `
    <tr>
        <td>${product.name}</td>
        <td>${product.selectedColor}</td>
        <td class="tableprix">${(product.price/100) .toFixed(2) + "€"}</td>
        <td><button type="button" class="btn" id="btnPanier">
        <img src="./image/trash.svg">
        </button></td>
    </tr>`).join('')}

// mainElement.innerHTML = mainElement.innerHTML + `<p> Merci pour votre commande</p>`

//total prix du panier:?
let totalPrice = document.getElementsByClassName('tableprix')
let sum = 0
for (let i =0; i < totalPrice.length; i ++){

}

//supprimer un élément du local storage???
let btnDelete = document.getElementById('btnPanier')
btnDelete.addEventListener('onclick',function(event){
    cart.removeItem(product)
    
})
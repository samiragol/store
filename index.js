let products;
let dropDown = document.querySelector("select");
let container = document.querySelector(".container");
let selectedFilter = "";

fetch('products.json')
.then(response => (response.json())
.then(json => {
       products = json;
       initialize(products)
  })).catch(function(err) {
    console.log('Fetch problem: ' + err.message);
  });

  dropDown.onchange = function(event) {
    selectedFilter = event.target.value;

    while(container.firstElementChild) {
        container.removeChild(container.firstElementChild)
    }

    const filtered = products
        .filter( prod => prod.type === selectedFilter.toLocaleLowerCase());
        initialize(filtered);
}

function initialize(prods) {
    prods.forEach(product => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const imgUrl = `./images/${product.image}`;
        
        img.setAttribute("src", imgUrl)
        img.setAttribute("width", 200);
        img.setAttribute("height", 200);
        div.setAttribute("class", "cell") 
        div.textContent = product.name;
        
        //if(product.type === selectedFilter) {
            container.appendChild(div)
            div.appendChild(img)
        //}
    
    })
}

function removeBoxes() {

}






let products;
let typingTimer;        
let typeInterval = 500; // Half a second
let dropDown = document.querySelector("select");
let container = document.querySelector(".container");
let input = document.querySelector("input");
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

        container.appendChild(div)
        div.appendChild(img)
    })
}

function liveSearch() {
    let query = document.getElementsByTagName("input")[0].value;
    console.log(query, ">>>>>")
    let items = document.querySelectorAll('.cell');
   
    items.forEach(item => {
       // console.log(item, "???????????????")
        console.log(item, "::::::")
        if(item.textContent.includes(query)) {
            item.hidden = false
        } else {
            item.hidden = true
        }
    })
}

input.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
  });





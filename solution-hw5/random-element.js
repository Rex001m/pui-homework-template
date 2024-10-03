
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// Update the tilte
const detailName = document.querySelector(".title");
detailName.innerText = rollType + ' Cinnamon Roll';


// Update the image
const detailImage = document.querySelector(".galleryimageD");
detailImage.src =  '../assets/products/'+ rolls[rollType].imageFile;

// Update the Price
const detailPrice = document.querySelector("#display");
detailPrice.innerText = "$" +rolls[rollType].basePrice;



//Replace selection box
const glazingOptionsJava = ['Keep original', 'Sugar milk', 'Vanilla milk', 'Double chocolate'];
const packSizeOptionsJava = ['1','3','6','12'];

function populate(){
const glazingSelect = document.querySelector('#glazingOptions');

for (let i = 0; i < glazingOptionsJava.length; i=i+1) {
    const option = document.createElement('option');
    option.textContent = glazingOptionsJava[i];
    glazingSelect.add(option);
}

const sizeSelect = document.querySelector('#packSizeOptions');
for (let i = 0; i < packSizeOptionsJava.length; i=i+1) {
    const option = document.createElement('option');
    option.textContent = packSizeOptionsJava[i];
    sizeSelect.add(option);
}
}

populate();


// Price adaptations for glazing options
const glazing= { 
   'Keep original': 0.00,
   'Sugar milk': 0.00 ,
   'Vanilla milk':0.50 ,
   'Double chocolate': 1.50 };

// Price adaptations for pack size options
const packSize= {
    1: 1.00,
    3: 3.00,
    6: 5.00,
    12: 10.00};

let glazingDropd = document.querySelector('#glazingOptions');
let packSizeDropd = document.querySelector('#packSizeOptions');
let price = document.querySelector('#display');
let selectedGlaze = glazingDropd.value;
let selectedQuantity = packSizeDropd.value;

function onDropDownChange(){
    selectedGlaze=glazingDropd.value;
    selectedQuantity=packSizeDropd.value;
    calculatePrice();
}

function calculatePrice (){
    const glazingPrice = glazing[selectedGlaze];
    const packPrice =packSize[selectedQuantity];
    const basePrice = Number (rolls[rollType].basePrice);
    finalPrice=(basePrice + glazingPrice)*packPrice
    display.textContent = `$${finalPrice.toFixed(2)}`;
}

glazingDropd.addEventListener("change",onDropDownChange);
packSizeDropd.addEventListener("change", onDropDownChange)
calculatePrice();


//hw4
    const cart= []


      class Roll {
    constructor(rollImageURL, rollType, rollGlazing, packSize, basePrice) {
        this.image=rollImageURL; 
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

        this.element =null
       
     }

    //  updateElement() {     // change and update
    //     const cartItemImage = this.element.querySelector('.Cartimage');
    //     const cartItemType = this.element.querySelector('.productin productName');
    //     const cartItemGlaze= this.element.querySelector('.productin glaz');
    //     const cartItemSize = this.element.querySelector('.productin siz');
    //     const cartItemPrice = this.element.querySelector('.pricer');
  
    //     noteImageElement.src = this.noteImageURL;
    //     noteTitleElement.innerText = this.noteTitle;
    //     noteBodyElement.innerText = this.noteBody;
    //     noteFooterElement.innerText = this.noteFooter;
    //   }
    }

    document.querySelector("#addtocartbutton").addEventListener('click',function(){
    let roll =new Roll(rollType,selectedGlaze,selectedQuantity,rolls[rollType].basePrice)
    cart.push(roll)
    console.log(cart)
    })
    
    const finalCheckoutCart = new Set(); 


    function addNewItem(rollImageURL, rollType, rollGlazing, packSize, basePrice) {
        const Item = new Roll(rollImageURL, rollType, rollGlazing, packSize, basePrice);
        finalCheckoutCart.add(Item);
      
        return itemSet;
      }

      function createElement(roll) {
        const template = document.querySelector('#cartTemplate');
        const clone = template.content.cloneNode(true);
        
        roll.element = clone.querySelector('.cartItem'); 
      
        const btnDelete = itemSet.element.querySelector('.removel');
        console.log(btnDelete);
        btnDelete.addEventListener('click', () => {
          deleteNote(roll);
        });
        const itemSetFinalElement = document.querySelector('#itemSet-list');
        itemSetFinalElement.prepend(itemSet.element);

        updateElement(itemSet);
      }
    
    //   const detailName = document.querySelector(".title");
    //   detailName.innerText = rollType + ' Cinnamon Roll';
      
      
    //   // Update the image
    //   const detailImage = document.querySelector(".galleryimageD");
    //   detailImage.src =  '../assets/products/'+ rolls[rollType].imageFile;
      
    //   // Update the Price
    //   const detailPrice = document.querySelector("#display");
    //   detailPrice.innerText = "$" +rolls[rollType].basePrice;
      

      function updateElement(item) {
        const cartImageElement = item.element.querySelector('.Cartimage');
        const cartTitleElement = item.element.querySelector('.productName');
        const cartGlazeElement = item.element.querySelector('.glaz');
        const cartSizeElement = item.element.querySelector('.siz');
        const cartPriceElement = item.element.querySelector('.pricer');

        // copy our notecard content over to the corresponding HTML elements
        cartImageElement.src = item.image;
        cartTitleElement.innerText = item.type;
        cartGlazeElement.innerText = item.glazing;
        cartSizeElement.innerText = item.size;
        cartPriceElement.innerText = calculatePrice(item)
      }
      

      function deleteNote(item) {
        // remove the notecard DOM object from the UI
        item.element.remove();
        // remove the actual Notecard object from our set of notecards
        finalCheckoutCart.delete(item);
      }


    const cartItemOne = addNewItem(
        "./assets/products/original-cinnamon-roll.jpg",
        "Original Cinnamon Row"
        "Sugar Milk",
        "pack Size: 1"
        "baseprice"
      );

     const cartItemTwo = addNewItem(
        "./assets/products/walnut-cinnamon-roll.jpg",
        "Walnut Cinnamon Row"
        "Vanilla Milk",
        "pack Size: 12"
        "baseprice"
      );



      for (const roll of finalCheckoutCart) {
        createElement(roll);
      }
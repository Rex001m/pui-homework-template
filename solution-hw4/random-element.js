//hw4 starts

const cart= []

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// //try figuring out the extract info from the data base
// //method 1
// class Newpage {

//     constructor(name,price,imagePath) {
//       this.pageName = name;
//       this.pagePrice = price;
//       this.pageImagePath = imagePath;
//     }

// }
// //method 2
// function getCurrentRollInfo() {
//     const currentRollName = rollNames[currentRollIndex]; // Get the current roll's name
//     const currentRollData = rolls[currentRollName]; // Access the roll data using the name
    
//     // Extract name, price, and image path
//     const name = currentRollName;
//     const price = currentRollData.basePrice;
//     const imagePath = currentRollData.imageFile;
// }

//hw4 end
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
    const basePrice = 2.49;
    finalPrice=(basePrice + glazingPrice)*packPrice
    display.textContent = `$${finalPrice.toFixed(2)} `;
}

glazingDropd.addEventListener("change",onDropDownChange);
packSizeDropd.addEventListener("change", onDropDownChange)
calculatePrice();


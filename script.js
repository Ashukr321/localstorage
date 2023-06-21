// add items to the local storage

// localStorage.setItem('theam','dark');
// localStorage.setItem('font','bold');

// // remove items

// localStorage.removeItem('font')
// localStorage.clear();
//  const theam = localStorage.getItem('theam');
//  console.log(theam);

// here we create the object

// const userSettings = {
//     theme: 'light',
//     font:'regular',
//     score :'100',
//     age:'20'

// }

// here we convert the object into the string
// bec localstorage only take a sting data formate

// const STRING=  JSON.stringify(userSettings);

// setItems

// localStorage.setItem('data',STRING);

// const obj =JSON.parse(localStorage.getItem('data'));

// console.log(typeof d);// string
// to access the data
// we have to first convert into the string to object ]

//  console.log(obj.theme);
//  console.log(obj.font);
//  console.log(obj.score);
//  console.log(obj.age);

// usecase of localstorage in the real life
// cart
//

// theams switcher in the js
// by the help of the localstorage in the js

const themeSelector = document.querySelector("#themeSelector");

themeSelector.addEventListener("change", (e) => {
  localStorage.setItem("theme", e.target.value);
  changeTheme(e.target.value);
});


function changeTheme(theme) {
  if (theme == "dark") {
    document.body.style.backgroundColor = "#000";
  } else if (theme == "light") {
    document.body.style.backgroundColor = "#e5e5e5";
  } else {
    document.body.style.backgroundColor = "#fff";
  }
}


// localstorage event 

window.addEventListener('storage',(e)=>{
    if (e.key ==='theme'){
        changeTheme(e.newValue);
        themeSelector.value = e.newValue;
    }
   
})
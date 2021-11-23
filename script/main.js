const toggle = document.querySelector('#toggle');
const showToggle = document.querySelector('#showToggle');
const closeToggle = document.querySelector('#closeToggle');

const width = window.innerWidth;
console.log(width)
function openNav() {
     showToggle.style.width = "40%";
}
function closeNav() {
     showToggle.style.width = "0";
}

function openNavPhone() {
     showToggle.style.width = "70%"
} 

toggle.addEventListener('click', () => {
     if(width > 400) {
          return openNav();
     }
     else{
          return openNavPhone();
     }
});

closeToggle.addEventListener('click', () => {
     return closeNav();
})
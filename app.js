let maill = document.getElementById('email');
const submit = document.querySelector('.fa-arrow-right');
const place = document.querySelector('#placehoder');
const done = document.querySelector('.done');
const invalid = document.querySelector('.invalid');
const mailing = document.querySelector('.mailing');

submit.addEventListener('click',function validateEmail(){
  var mail = document.querySelector("#email").value;
  var regx = /^([a-zA-Z0-9\._]+)@([a-z0-9])+[.]([a-z]+)(.[a-z]+)?$/;
  
  
  if(regx.test(mail)){
    done.style.display = 'block';
    mailing.style.display = 'none';
    place.style.display = 'none';
    invalid.style.display = 'none';
    return true;
  }
  else{
    invalid.style.display = 'block';
    place.innerText = 'Invalid email input';
    place.style.display = 'block';
    maill.value = '';
    maill.addEventListener('focus',()=>{
      place.style.display = 'none';
    })
  // document.getElementById('email').blur();
  //   return false;
  }
   
}
);

// function focus(){
//      place.style.display = 'none';
// }

document.querySelector('.subbtn').addEventListener('click', () => {
  subbtn.classList.toggle('stop');
})
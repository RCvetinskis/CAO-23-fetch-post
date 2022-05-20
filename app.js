"use strict"

// / 2.
// Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem inputais - brand ir model; šie paduotų su post'u informaciją į base url (formatas: objektas su dviem properties: brand ir model).
// 3.Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus patvirtinimą, turi virš formos rašyti, kad duomenys sėkmingai išsaugoti; o jei blogai - išmesti errorą.
const form = document.querySelector("form")
const inputBrand = document.getElementById("brand")
const  inputModel = document.getElementById("model")
const text = document.getElementById("text")
const URL = "https://olive-bead-glazer.glitch.me"




   form.addEventListener("submit", function(e){
    e.preventDefault()
    let car ={
        brand: inputBrand.value,
        model: inputModel.value
     
    }
    sendData(car)


   })



   function sendData(car){
    fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
      })
      
       .then(res => res.json())
       .then(results =>
        text.innerText = results.msg)
       .catch(e=> text.innerText = e)

   } 
"use strict"

// / 2.
// Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem inputais - brand ir model; šie paduotų su post'u informaciją į base url (formatas: objektas su dviem properties: brand ir model).
// 3.Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus patvirtinimą, turi virš formos rašyti, kad duomenys sėkmingai išsaugoti; o jei blogai - išmesti errorą.
const form = document.querySelector("form")
let inputBrand = document.getElementById("brand")
let  inputModel = document.getElementById("model")
const text = document.getElementById("text")
const URL = "https://olive-bead-glazer.glitch.me"




   form.addEventListener("submit", function(e){
    let car ={
        brand: "audi",
        model: "a4"
     
    }
    e.preventDefault()
    if(car["brand"] = inputBrand.value ){
        car["brand"] = inputBrand.value
        if (car["model"] = inputModel.value){
            car["model"] = inputModel.value
        }
        console.log(car)
    }
     form.value = ""

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
      

  
   })



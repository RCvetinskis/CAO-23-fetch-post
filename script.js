"use strict"
// BASE URL = https://olive-bead-glazer.glitch.me
// 1.Sukurkite puslapį, index.html, kurį užkrovus atsiranda lentelė su visais automobiliais iš base URL.

// 2.
// Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem inputais - brand ir model; šie paduotų su post'u informaciją į base url (formatas: objektas su dviem properties: brand ir model).

// 3.Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus patvirtinimą, turi virš formos rašyti, kad duomenys sėkmingai išsaugoti; o jei blogai - išmesti errorą.
// 4. Sukurkite navigaciją, kad galėtumėte tarp puslapių vaikščioti
const dataPlace = document.getElementById("dataPlace")

fetch("https://olive-bead-glazer.glitch.me")
 .then(respone=> respone.json())
 .then(data =>{
    console.log(data)
     for(let i =0; i< data.length; i++){

 
     let tr = document.createElement("tr")
     tr.innerHTML =
     `
     <td>${data[i].brand}</td>
     <td>${data[i].model}</td>
     
     
     
     `
     dataPlace.append(tr)
 
    }
 })
 .catch(e => console.log(e.message))
alert("Cliquez pour demarrer")

let startTime = new Date()

let magicNumber = Math.floor((Math.random() * 100) + 1)

let tryValues = []

console.log(magicNumber);

const RESULT = document.getElementById("result")

let userNumber;

do {

    userNumber = parseInt(prompt("Devinez le nombre : "))

    tryValues.push(userNumber)

    if (userNumber > magicNumber) {
        alert("Le nombre recherché est plus petit.")
    }
    else if(userNumber < magicNumber){
        alert("Le nombre recherché est plus grand.")
    }
    
} while (magicNumber !== parseInt(userNumber));

let endTime = new Date()

let interval = endTime - startTime

interval /= 1000

console.log(interval);

for (const element of tryValues) {
    
    const NEW_DIV = document.createElement("div")
    NEW_DIV.classList.add("flexClass")
    if (element > magicNumber) {
        NEW_DIV.classList.add("superior")
    }
    else if(element < magicNumber){
        NEW_DIV.classList.add("inferior")
    }
    else{
        NEW_DIV.classList.add("succeed")
    }

    const NEW_P_SCORE = document.createElement("p")
    NEW_P_SCORE.innerText = element

    const NEW_P_SYMBOL = document.createElement("p")
    NEW_P_SYMBOL.innerText = element > magicNumber ? "⬇️" : element < magicNumber ? "⬆️" : "✅"

    NEW_DIV.insertAdjacentElement("beforeend", NEW_P_SCORE);
    NEW_DIV.insertAdjacentElement("beforeend", NEW_P_SYMBOL);

    RESULT.insertAdjacentElement("beforeend", NEW_DIV)
}

const NEW_DIV_TIME = document.createElement("div")
NEW_DIV_TIME.classList.add("flexClass")

const NEW_P_TIME = document.createElement("p")
NEW_P_TIME.innerText = `Temps de résolution : ${interval} sec.`

NEW_DIV_TIME.insertAdjacentElement("beforeend", NEW_P_TIME)

RESULT.insertAdjacentElement("beforeend", NEW_DIV_TIME)

const NEW_DIV_SCORE = document.createElement("div")
NEW_DIV_SCORE.classList.add("flexClass")

const NEW_P_SCORE = document.createElement("p")
NEW_P_SCORE.innerText = `SCORE : ${(interval * 1000) * tryValues.length} pts.`

NEW_DIV_SCORE.insertAdjacentElement("beforeend", NEW_P_SCORE)

RESULT.insertAdjacentElement("beforeend", NEW_DIV_SCORE)
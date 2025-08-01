const IMG_INP = document.getElementById("imgInput");

const NAME_INP = document.getElementById("nameInput");

const PRICE_INP = document.getElementById("priceInput");

const SUBMIT_BUTT = document.getElementById("submitButton")

const PRODUCT_LIST = document.getElementById("list")

SUBMIT_BUTT.addEventListener('click', () => {
    const IMG_VALUE = IMG_INP.value
    const NAME_VALUE = NAME_INP.value
    const PRICE_VALUE = PRICE_INP.value
    
    const NEW_LI = document.createElement("li")
    NEW_LI.classList.add("listItem")

    const NEW_IMG = document.createElement("img")
    NEW_IMG.src = IMG_VALUE
    NEW_IMG.classList.add('imgSize')

    const NEW_P = document.createElement("p")
    NEW_P.innerText = `${NAME_VALUE} - ${PRICE_VALUE} €`

    const NEW_DEL_BUTT = document.createElement("button")
    NEW_DEL_BUTT.innerText = "Supprimer"
    NEW_DEL_BUTT.addEventListener('click', () => {
        NEW_LI.remove()
    })

    
    NEW_LI.insertAdjacentElement("beforeend", NEW_IMG)
    NEW_LI.insertAdjacentElement("beforeend", NEW_P)
    NEW_LI.insertAdjacentElement("beforeend", NEW_DEL_BUTT)

    PRODUCT_LIST.insertAdjacentElement('beforeend', NEW_LI)

    console.log(NEW_LI);
    
})


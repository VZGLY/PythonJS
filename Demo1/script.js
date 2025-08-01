const IMG_INP = document.getElementById("imgInput");

const NAME_INP = document.getElementById("nameInput");

const PRICE_INP = document.getElementById("priceInput");

const SUBMIT_BUTT = document.getElementById("submitButton")

const PRODUCT_LIST = document.getElementById("list")

let productListItems = []

SUBMIT_BUTT.addEventListener("click", () => {
    const IMG_VALUE = IMG_INP.value
    const NAME_VALUE = NAME_INP.value
    const PRICE_VALUE = PRICE_INP.value

    productListItems.push(
        {
            url : IMG_VALUE,
            name : NAME_VALUE,
            price : PRICE_VALUE
        }
    )

    IMG_INP.value = ""
    NAME_INP.value = ""
    PRICE_INP.value = ""

    refresh()

})

function removeProduct(index){
    productListItems.splice(index, 1)
    refresh()
}


function refresh(){
    PRODUCT_LIST.innerHTML = ""

    for (const [index, element] of productListItems.entries()) {
        const NEW_LI = document.createElement("li")
        NEW_LI.classList.add("listItem")

        const NEW_IMG = document.createElement("img")
        NEW_IMG.src = element.url
        NEW_IMG.classList.add('imgSize')

        const NEW_P = document.createElement("p")
        NEW_P.innerText = `${element.name} - ${element.price} €`

        const NEW_DEL_BUTT = document.createElement("button")
        NEW_DEL_BUTT.innerText = "Supprimer"
        NEW_DEL_BUTT.addEventListener("click", () => {
            removeProduct(index)
        })
        
        NEW_LI.insertAdjacentElement("beforeend", NEW_IMG)
        NEW_LI.insertAdjacentElement("beforeend", NEW_P)
        NEW_LI.insertAdjacentElement("beforeend", NEW_DEL_BUTT)

        PRODUCT_LIST.insertAdjacentElement('beforeend', NEW_LI)
    }

    console.log(productListItems);
}


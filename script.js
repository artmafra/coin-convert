const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulating the "amount" input to receive just numbers.
amount.addEventListener("input", function(){
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Getting the "submit" form event.
form.onsubmit = function(event){
    event.preventDefault()

    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Function to coin convert.
function convertCurrency(amount, price, symbol){
    try {
        if(currency.value == "USD"){
            const convert = (amount * price)
            description.textContent = String(`${symbol} 1 = R$ ${price}`).replace(".", ",")
            result.textContent = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(convert)
            

        }
        else if(currency.value == "EUR"){
            const convert = (amount * price)
            description.textContent = String(`${symbol} 1 = R$ ${price}`).replace(".", ",")
            result.textContent = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(convert)

        }
        else if(currency.value == "GBP"){
            const convert = (amount * price)
            description.textContent = String(`${symbol} 1 = R$ ${price}`).replace(".", ",")
            result.textContent = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(convert)
        }
        footer.classList.add("show-result")

    } catch (error){
        footer.classList.remove("show-result")
        alert("Não foi possível fazer a conversão. Tente novamente mais tarde.")
    }
    
    }

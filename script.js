

let colorForm = document.getElementById('color-form')

let color1 = document.getElementById('color-1')
let color2 = document.getElementById('color-2')
let color3 = document.getElementById('color-3')
let color4 = document.getElementById('color-4')
let color5 = document.getElementById('color-5')

let colorOneText = document.getElementById('color-one-text')
let colorTwoText = document.getElementById('color-two-text')
let colorThreeText = document.getElementById('color-three-text')
let colorFourText = document.getElementById('color-four-text')
let colorFiveText = document.getElementById('color-five-text')

colorForm.addEventListener('submit', (e) => {
    let color = document.getElementById('color').value
    color = color.slice(1)
    let colorMode = document.getElementById('colorMode').value

    e.preventDefault()

    let colorUrl = `https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=${colorMode}&count=6`
    console.log(colorUrl)
    fetch(colorUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        color1.style.backgroundColor = data.colors[0].hex.value
        color2.style.backgroundColor = data.colors[1].hex.value
        color3.style.backgroundColor = data.colors[2].hex.value
        color4.style.backgroundColor = data.colors[3].hex.value
        color5.style.backgroundColor = data.colors[4].hex.value

        colorOneText.textContent = data.colors[0].hex.value
        colorTwoText.textContent = data.colors[1].hex.value
        colorThreeText.textContent = data.colors[2].hex.value
        colorFourText.textContent = data.colors[3].hex.value
        colorFiveText.textContent = data.colors[4].hex.value
    })
})


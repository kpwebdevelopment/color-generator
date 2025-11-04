

let colorForm = document.getElementById('color-form')

let colors = document.querySelectorAll('.colors');
let colorTexts = document.querySelectorAll('.color-text');

let colorUrl = 'https://www.thecolorapi.com/scheme?hex=0047AB&format=json&mode=analogic&count=5'

fetch(colorUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        colors.forEach((color, i) => {
            color.style.backgroundColor = data.colors[i].hex.value;

        });

        colorTexts.forEach((colorText, i) => {
            colorText.textContent = data.colors[i].hex.value;
        })
    })



colorForm.addEventListener('submit', (e) => {
    let color = document.getElementById('color').value
    color = color.slice(1)
    let colorMode = document.getElementById('colorMode').value

    e.preventDefault()

    colorUrl = `https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=${colorMode}&count=5`
    console.log(colorUrl)
    fetch(colorUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            colors.forEach((color, i) => {
                color.style.backgroundColor = data.colors[i].hex.value;
            });

            colorTexts.forEach((colorText, i) => {
            colorText.textContent = data.colors[i].hex.value;
            })
        })
})


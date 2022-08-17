let naam = document.querySelector("#naam")

document.querySelector("#go").addEventListener('click', () => {

    localStorage.setItem("Name", naam.value)
})


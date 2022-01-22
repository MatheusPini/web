const caixas = document.querySelectorAll('.caixa')
const dropZone = document.querySelector('[dropzone]')
caixas.forEach(caixaEl => {
    caixaEl.addEventListener('dragstart', e => {
        e.dataTransfer.setData('Text', e.target.id)
        console.log(e.target.id)
    })
})
dropZone.addEventListener('dragover', e => {
    e.preventDefault()
    console.log("dragoveeeer")
})
dropZone.addEventListener('drop', e => {
    const id = e.dataTransfer.getData('Text')
    const element = document.getElementById(id)
    e.target.appendChild(element)
})
async function gerarPuzzle(){
    const mainList = document.querySelector('.main')

    const puzzleDoDia = await getPuzzles()

    function createElement() {
        let li = document.createElement('li')
        let title = document.createElement('h2')
        let img = document.createElement('img')
        let link = document.createElement('a')
       
        link.setAttribute('href',puzzleDoDia.url)
        link.setAttribute('target','_blank')
        link.innerHTML = 'Teste seu conhecimento com o puzzle do dia' 
        title.innerText = puzzleDoDia.title
        img.src = puzzleDoDia.image
    
        mainList.append(li)
        li.append(link,title,img)
    }
    createElement()
}


gerarPuzzle()
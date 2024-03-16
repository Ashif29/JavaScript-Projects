const panels = document.querySelectorAll('.panel');

panels.forEach((panel, index) =>{
  panel.addEventListener('click', () => {
    

    if(index >= 4 && index < panels.length - 1){
      panels[index - 4].classList.add('invisible');
      panels[index + 1].classList.remove('invisible');
    }
    if(index == panels.length - 1){
      panels[index].classList.add('invisible');
      panels[index - 1].classList.add('invisible');
      panels[index - 2].classList.add('invisible');
      panels[index - 3].classList.add('invisible');
      panels[0].classList.remove('invisible');
      panels[1].classList.remove('invisible');
      panels[2].classList.remove('invisible');
      panels[3].classList.remove('invisible');
      panels[4].classList.remove('invisible');
      removeActiveClasses()
      panels[0].classList.add('active')
    }
    else{
      removeActiveClasses()
      panel.classList.add('active')
    }
  })
})



function removeActiveClasses(){
  panels.forEach(panel =>{
    panel.classList.remove('active')
  })
}

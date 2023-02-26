const note1 = document.querySelector('.note1') ;
const noteSquare = document.querySelector('.addNotesSquare')
const addNote = document.querySelector('.addNotes')
const container = document.querySelector('.gridContainer')

noteSquare.addEventListener('mouseover' , function(){
  note1.style.backgroundColor = 'black'
  note1.style.opacity = '0.7'
  addNote.style.transform = 'translateX(15%)'
  noteSquare.style.width ='70%'
  noteSquare.style.animationName ='addNoteHover'
  noteSquare.style.animationDuration ='.8s'
})
noteSquare.addEventListener('mouseout' , function(){
  note1.style.backgroundColor = 'rgb(241, 249, 249)'
  note1.style.opacity = '1'
  addNote.style.transition = '.4s'
  addNote.style.transform = 'translateX(-5%)'
  noteSquare.style.width ='50%'
  noteSquare.style.animationName ='addNoteOut'
  noteSquare.style.animationDuration = '.4s'
})

noteSquare.addEventListener('click' , function(){
  const newNotes = document.createElement('div')
  newNotes.classList.add('note1')
  container.append(newNotes)
  newNotes.style.animationName = 'newNoteAnimation'
  newNotes.style.animationDuration = '.4s'

  const color = document.createElement('input')
  color.type = 'text'
  color.placeholder ='Note Color'
  color.classList.add('color')
  newNotes.append(color)

  const colorBtn = document.createElement('button')
  colorBtn.innerText = '>';
  colorBtn.classList.add('colorBtn')
  newNotes.append(colorBtn)

  colorBtn.addEventListener('click' , function(){
    newNotes.style.backgroundColor = `${color.value}`
    newNotes.style.transition ='.4s'
  })
  
  const textBox = document.createElement('textarea')
  textBox.placeholder ='Insert Your Text... '
  textBox.classList.add('textBox')
  newNotes.append(textBox)

  const xButton = document.createElement('div')
  xButton.innerText = 'X';
  xButton.classList.add('xButton');
  newNotes.append(xButton);

  xButton.addEventListener('click', function(){
    newNotes.remove();
    newNotes.style.animationName ='delleteNoteAnimation'
    newNotes.style.animationDuration = '.4s'
  })
})
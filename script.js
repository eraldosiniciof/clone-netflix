document.querySelector('.questions').addEventListener('click', event => {
  const nameClass = event.target.classList.value

  if (nameClass === 'box-question') {
    const element = event.target.nextSibling.nextSibling
    element.classList.value === 'answer hide'
      ? element.setAttribute('class', 'answer')
      : element.setAttribute('class', 'answer hide')
  }
})

const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

const getStr = () => {
  let newStr = ''
    if($('#numbers').is(':checked')) newStr += str.match(/[0-9]+/)[0]
    if($('#upper').is(':checked')) newStr += str.match(/[A-Z]+/)[0]
    if($('#lower').is(':checked')) newStr += str.match(/[a-z]+/)[0]
  return newStr  
}
const getRandom = (str) => {
  return str.charAt(Math.floor(Math.random() * str.length))
}
const generator = () => {
  const str = getStr()
  let result = ''
  const characters = $('#lengthId').val()
  if (str) {
    $('.out').css('color', 'green')
    for (let i = 0; i < characters; i++) {
      result += getRandom(str)
    }
    $('.massage').text('')
  } else {
    $('.massage').css('color', 'red')
    $('.massage').text(`I'm sorry, but you did not select a generation option`)
  }
  $('.out').val(result)
}
$('.btnGeneration').click(generator)

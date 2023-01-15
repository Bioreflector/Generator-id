const getStr = () => {
  if (
    $('#numbers').is(':checked') &&
    $('#upper').is(':checked') &&
    $('#lower').is(':checked')
  ) {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  } else if ($('#numbers').is(':checked') && $('#upper').is(':checked')) {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  } else if ($('#numbers').is(':checked') && $('#lower').is(':checked')) {
    return 'abcdefghijklmnopqrstuvwxyz0123456789'
  } else if ($('#upper').is(':checked') && $('#lower').is(':checked')) {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  } else if ($('#lower').is(':checked')) {
    return 'abcdefghijklmnopqrstuvwxyz'
  } else if ($('#upper').is(':checked')) {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  } else if ($('#numbers').is(':checked')) {
    return '0123456789'
  }
}
const isCheckedAny = () => {
  return (
    $('#numbers').is(':checked') ||
    $('#upper').is(':checked') ||
    $('#lower').is(':checked')
  )
}
const getRandom = (str) => {
  return str.charAt(Math.floor(Math.random() * str.length))
}
const generator = () => {
  const str = getStr()
  let result = ''
  const characters = $('#lengthId').val()
  if (isCheckedAny()) {
    $('.out').css('color', 'green')
    for (let i = 0; i < characters; i++) {
      result += getRandom(str)
      $('.massage').text('')
    }
  } else {
    $('.massage').css('color', 'red')
    $('.massage').text(`I'm sorry, but you did not select a generation option`)
  }
  $('.out').val(result)
}
$('.btnGeneration').click(generator)

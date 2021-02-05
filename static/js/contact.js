let submitButton = document.getElementById('subBtn')
let sendMes      = document.getElementById('sendingMessage')
let userLang     = navigator.language.substr(0,2)

let igs = [
  // Email
  [
    'novalumo.llc@novalumo.llc',
    'contact@novalumo.llc',
  ],
  // Body
  [
    'DOMAIN SERVICES EXPIRATION NOTICE',
    'Domain Services Expiration Notice',
    'CLICK HERE',
  ]
]

function error() {

  let mes = 'An error has occurred.'

  switch (userLang) {
    case 'ja':
      mes = 'エラーが発生しました。'
      break;
    default:
      break
  }

  alert(mes)
}

submitButton.onclick = function() {

  // Check Email
  for (let i = 0; i < igs[0].length; i++) {

    if ($('#formEmailData').val() == igs[0][i]) {
      error()
      return false
    }
  }

  // Check Body
  for (let i = 0; i < igs[1].length; i++) {
    
    if ($('#formBodyData').val().match(igs[1][i])) {
      error()
      return false
    }
  }

  $('#formNameData').attr('readonly',true)
  $('#formCompanyData').attr('readonly',true)
  $('#formAddressData').attr('readonly',true)
  $('#formEmailData').attr('readonly',true)
  $('#formPhoneNumberData').attr('readonly',true)
  $('#formTitleData').attr('readonly',true)
  $('#formBodyData').attr('readonly',true)
  submitButton.style['display'] = 'none'
  sendMes.style['opacity']      = '1'

}
let submitButton = document.getElementById('subBtn');
let sendMes      = document.getElementById('sendingMessage');

submitButton.onclick = function() {
  $('#formNameData').attr('readonly',true);
  $('#formCompanyData').attr('readonly',true);
  $('#formAddressData').attr('readonly',true);
  $('#formEmailData').attr('readonly',true);
  $('#formPhoneNumberData').attr('readonly',true);
  $('#formTitleData').attr('readonly',true);
  $('#formBodyData').attr('readonly',true);
  submitButton.style['display'] = 'none';
  sendMes.style['opacity']      = '1';
}
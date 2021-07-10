<template>
    <div>
        <div class="title">
          <div class="title-body">
            <h1>Contact</h1>
            <p>お問い合わせ</p>
          </div>
        </div>

        <div class="info" v-if="stop">
          <p><i class="fas fa-fw fa-exclamation-circle"></i> 新規制作依頼の受付を一時停止しております。お問い合わせ頂いたものに関しては確認次第ご連絡させていただきます。</p>
        </div>

        <div class="container my-5">
          <div class="row mx-2">
            <div class="col contact">
              <p style="font-weight: bold;"><span style="color: #a00; font-size: 1.2em;">*</span>{{ $t('contact.required') }}</p>

              <form onsubmit="return false" @submit.prevent>
                <label for="formNameData">{{ $t('contact.name') }}<span>*</span></label>
                <input type="text" name="name" class="formInput" id="formNameData" autocomplete="name" required>
                <label for="formCompanyData">{{ $t('contact.company') }}</label>
                <input type="text" name="company" class="formInput" id="formCompanyData" autocomplete="organization">
                <label for="formAddressData">{{ $t('contact.address') }}</label>
                <input type="text" name="address" class="formInput" id="formAddressData">
                <label for="formEmailData">{{ $t('contact.email') }}<span>*</span></label>
                <input type="email" name="email" class="formInput" id="formEmailData" autocomplete="email" required>
                <label for="formPhoneNumberData">{{ $t('contact.phone') }}</label>
                <input type="tel" name="phone" class="formInput" id="formPhoneNumberData" autocomplete="off">
                <label for="formTitleData">{{ $t('contact.inquiry_title') }}<span>*</span></label>
                <input type="text" name="title" class="formInput" id="formTitleData" autocomplete="off" required>
                <label for="formBodyData">{{ $t('contact.body') }}<span>*</span></label>
                <textarea name="body" class="formInput" id="formBodyData" rows="4" required></textarea>
                <div class="col-12">
                  <div class="chkbox">
                    <input type="checkbox" id="agree" v-model="agree">
                    <label for="agree">{{ $t('contact.agree.1') }}<nuxt-link :to="localePath('/privacy/')">{{ $t('contact.agree.2') }}</nuxt-link>{{ $t('contact.agree.3') }}</label>
                  </div>
                  <!-- <div class="g-recaptcha" data-sitekey="6Lf33C0bAAAAAFCEQdx0Mk2wlGEbMEx1JJOgg3Gx" data-callback="onloadCallback"></div> -->
                </div>
                <div class="col-12">
                  <div class="submit">
                    <button id="submitButton" class="btn" v-bind:class="{disabled:!agree}" v-bind="{disabled:!agree}" @click="postInquiry()">{{ $t('contact.send_button') }} <i class="fas fa-fw fa-angle-right"></i></button>
                  </div>
                </div>
              </form>
              <div class="sending">
                <p id="message">{{ $t('contact.sending_message') }}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
  head() {
    return {
      title: this.$t('contact.title'),
      meta: [
        // { hid: 'description', name: 'description', content: this.$t('contact.description') },
        { hid: 'robots', name: 'robots', content: 'nofollow' },
      ],
      script: [
        // { src: '/js/recaptcha.js' },
        // { src: 'https://www.google.com/recaptcha/api.js', async: '', defer: '' }
      ]
    }
  },
  data() {
    return {
      stop: false,
      agree: false
    }
  },
  methods: {
    postInquiry() {

      let name    = $('input[name="name"]').val()
      let company = $('input[name="company"]').val()
      let address = $('input[name="address"]').val()
      let email   = $('input[name="email"]').val()
      let phone   = $('input[name="phone"]').val()
      let title   = $('input[name="title"]').val()
      let body    = $('textarea[name="body"]').val()

      if (name == '' || email == '' || title == '' || body == '') {
          name  = '' ? false : true 
          email = '' ? false : true
          title = '' ? false : true
          body  = '' ? false : true
      } else {
          submitButton.style.display = 'none'
          message.style.opacity = '1'
          let input = document.getElementsByClassName('formInput')
          for(let i = 0; i < input.length; i++) {
            input[i].disabled = true
          }

          let data = {
            name: name,
            company: company,
            address: address,
            email: email,
            phone: phone,
            title: title,
            body: body,
          }
      
          $.ajax({
              url: 'https://script.google.com/macros/s/AKfycbxcrVjKUQ5HJ1Fxpje4QI3sYGC4l6RkKnICH_YALhPETXU4WDWAucwC8q3t6vKTKudrfg/exec',
              type: 'POST',
              data: data
          }).done(function(res){
              if(res.response != 'success') {
                  console.log(JSON.stringify(res.error))
                  alert('送信に失敗しました')
                  location.reload()
                  return
              }
              location.href = './contact/result'
          }).fail(function(){
              alert('送信に失敗しました')
          }).always(function() {
              console.log('送信処理終了')
          })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.btn {
  background: #333;
  color: #fff;
  margin: 10px 0 0 0;

  &.disabled {
    visibility: hidden;
    background: #ccc;
  }

  &:hover {
    opacity: .95;
  }
}
.info {
  padding: 1px 14px;
  background: #dc3545;
  color: #fff;
  font-weight: bold;
  user-select: none;
  cursor: default;
}

form {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -ms-flex-align: center;
  align-items: center;

  button {
    outline: none;
  }
}

label {
  display: inline-block;
  margin-bottom: .5rem;

  span {
    color: #a00;
    font-size: 1.2em;
  }
}

input, textarea {
  background: transparent;
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  margin-bottom: .7rem;
  font-size: 1.3rem;
  line-height: 1.5;
  color: #495057;
  background-clip: padding-box;
  border: none;
  border-bottom: 1px solid #ced4da;
  border-radius: .1rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  &:read-only {
    background: rgba(100, 100, 100, .15);
  }
}

input:focus, textarea:focus {
  color: #495057;
  border-bottom: solid 1px #272727;
  outline: 0;
}

input[readonly], textarea[readonly] {
  background: #e9ecef;
  opacity: 1;
}

.chkbox {
  margin: 10px 0;
  // text-align: center;

  label {
    padding-left: 38px;
    line-height: 21px;
    display: inline-block;
    cursor: pointer;
    position: relative;
    user-select: none;

    a {
      text-decoration: none;
    }

    &:before {
      content: '';
      width: 24px;
      height:	24px;
      display: inline-block;
      position: absolute;
      left:	0;
      background: transparent;
      border: solid 2px #ccc;
      border-radius: 2px;
    }

  }

  input[type=checkbox] {
    display: none;

    &:checked + label:before {
      content: '\2713';
      color: #333;
      font-size: 20px;
      text-align: center;
    }
  }
}

#submitButton {
  i {
    transition: .3s;
  }
  &:hover {
    i {
      transform: translateX(3px);
    }
  }
}

.sending {
  text-align: center;

  #message {
    background: #eee;
    color: #333;
    display: inline-block;
    margin: 8px 0;
    padding: 10px 20px;
    cursor: default;
    user-select: none;
    opacity: 0;
    transition: .2s;
  }
}

.contact {
  max-width: 740px;
  margin: 0 auto;
}
</style>

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
              <p style="font-weight: bold;"><span style="color: #a00; font-size: 1.2em;">*</span>印がついたものは必須です。</p>
              <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf57U5V7adWmUbIrFIOoNzk90Ex5lOPIJ85ufPnJD7Yq8GdLA/formResponse" method="post" target="hidden_iframe" onsubmit="submitted=true;">
                  <label for="formNameData">お名前 / Name<span>*</span></label>
                  <input type="text" name="entry.596453701" id="formNameData" required>
                  <label for="formCompanyData">会社名・所属 / Company Name & Position</label>
                  <input type="text" name="entry.219182896" id="formCompanyData">
                  <label for="formAddressData">住所 / Address</label>
                  <input type="text" name="entry.1622218293" id="formAddressData">
                  <label for="formEmailData">メールアドレス / Email<span>*</span></label>
                  <input type="email" name="entry.1862351476" id="formEmailData" required>
                  <label for="formPhoneNumberData">電話番号 / Phone Number</label>
                  <input type="tel" name="entry.1806945523" id="formPhoneNumberData">
                  <label for="formTitleData">タイトル / Title<span>*</span></label>
                  <input type="text" name="entry.1858330016" id="formTitleData" required>
                  <label for="formBodyData">本文 / Body<span>*</span></label>
                  <textarea name="entry.2117780832" id="formBodyData" cols="30" rows="10" required></textarea>
                  <div class="mx-auto">
                    <button class="btn btn-secondary" id="subBtn">送信する</button>
                  </div>
              </form>
              <p class="p-2 lbg-info text-info rounded text-center" id="sendingMessage">送信しています...</p>
              <script type="text/javascript">let submitted = false;</script>
              <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted){window.location='/contact/result';}"></iframe>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'お問い合わせ | Novalumo',
      script: [
        {
          src: '/js/contact.js',
          body: true
        },
      ]
    }
  },
  data() {
    return {
      stop: false
    }
  }
}
</script>

<style lang="scss">
.title {
  background: url(/img/backgrounds/bg_company.jpg);
  background-size: cover;
  background-position: center;
  height: auto;
  position: relative;

  .title-body {
    color: #eee;
    text-shadow: 1px 1px 50px #ccc;
    cursor: default;
    padding: 6.4rem 3.7rem;
    position: relative;
    z-index: 1;

    h1 {
      font-size: 2.8rem;
      margin: 0;
    }

    p {
      font-size: 1.5rem;
      margin: 0;
    }
  }

  &::after {
    background: url(/img/mask.png) left top repeat;
    background-size: 2px auto;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
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

/* Form Style */
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
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    margin-bottom: .7rem;
    font-size: 1.3rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .1rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

input:focus, textarea:focus {
    color: #495057;
    background-color: #fff;
    border: solid 1px #80bdff;
    outline: 0;
}

input[readonly], textarea[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}

#sendingMessage {
  opacity: 0;
  transition: .2s;
}

.contact {
  max-width: 740px;
  margin: 0 auto;
}
</style>

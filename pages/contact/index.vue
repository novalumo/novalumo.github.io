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
              <p style="font-weight: bold;"><span style="color: #a00; font-size: 1.2em;">*</span>必須 / Required</p>
              <!-- old -->
              <!--
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
                    <button class="btn" id="subBtn">送信する</button>
                  </div>
              </form>
              -->

              <form onsubmit="return false">
                  <label for="formNameData">お名前 / Name<span>*</span></label>
                  <input type="text" name="name" class="formInput" id="formNameData" autocomplete="name" required>
                  <label for="formCompanyData">会社名・所属 / Company Name & Position</label>
                  <input type="text" name="company" class="formInput" id="formCompanyData" autocomplete="organization">
                  <label for="formAddressData">住所 / Address</label>
                  <input type="text" name="address" class="formInput" id="formAddressData">
                  <label for="formEmailData">メールアドレス / Email<span>*</span></label>
                  <input type="email" name="email" class="formInput" id="formEmailData" autocomplete="email" required>
                  <label for="formPhoneNumberData">電話番号 / Phone Number</label>
                  <input type="tel" name="phone" class="formInput" id="formPhoneNumberData" autocomplete="off">
                  <label for="formTitleData">タイトル / Title<span>*</span></label>
                  <input type="text" name="title" class="formInput" id="formTitleData" autocomplete="off" required>
                  <label for="formBodyData">本文 / Body<span>*</span></label>
                  <textarea name="body" class="formInput" id="formBodyData" rows="4" required></textarea>
                  <div class="mx-auto">
                    <button id="submitButton" class="btn" onclick="postInquiry()">送信する</button>
                  </div>
              </form>
              <div class="sending">
                <p id="message">送信しています...</p>
              </div>
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
.btn {
  background: #333;
  color: #fff;
  &:hover {
    opacity: .75;
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
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    margin-bottom: .7rem;
    font-size: 1.3rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: none;
    border-bottom: 1px solid #ced4da;
    border-radius: .1rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &:read-only {
      background: rgba(100, 100, 100, .15);
    }
}

input:focus, textarea:focus {
    color: #495057;
    background-color: #fff;
    border-bottom: solid 1px #272727;
    outline: 0;
}

input[readonly], textarea[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}

.sending {
  text-align: center;

  #message {
    background: #cfe2ff;
    color: #084298;
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

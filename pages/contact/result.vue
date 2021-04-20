<template>
    <div>
        <div class="title">
          <div class="title-body">
            <h1>Contact</h1>
            <p>お問い合わせ</p>
          </div>
        </div>

        <div class="container my-5">
          <div class="row">
            <div class="col py-3">
              <h2>
              送信完了しました<br>
              <small>Submitted</small>
              </h2>
              <p>
              確認次第、早急に対応させて頂きます。<br>
              <small>We'll Check Your Message And Response It Soon.</small>
              </p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'お問い合わせ - 送信完了 | Novalumo',
        }
    }
}
</script>

<style>
form {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    align-items: center;
}

label {
    display: inline-block;
    margin-bottom: .5rem;
}

label span {
  color: #a00;
  font-size: 1.2em;
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

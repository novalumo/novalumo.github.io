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
              <h2 class="text-center">
              送信完了しました<br>
              <small>Submitted</small>
              </h2>
              <p class="h4 text-center">
              確認次第、早急に対応させて頂きます。<br>
              <small>We'll Check Your Message And Response It Soon.</small>
              </p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
/* --- Page Title --- */
.title {
  background: url(/img/backgrounds/bg_company.jpg);
  background-size: cover;
  background-position: center;
  height: auto;
  position: relative;
}
.title .title-body {
  color: #eee;
  text-shadow: 1px 1px 50px #ccc;
  cursor: default;
  padding: 6.4rem 3.7rem;
  position: relative;
  z-index: 1;
}
.title .title-body h1 {
  font-size: 2.8rem;
  margin: 0;
}
.title .title-body p {
  font-size: 1.5rem;
  margin: 0;
}
.title::after {
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

/* Form Style */
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

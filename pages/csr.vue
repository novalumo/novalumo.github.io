<template>
    <div>
        <div class="title">
          <div class="title-body">
            <h1>CSR</h1>
            <p>Novalumoと社会</p>
          </div>
        </div>

        <div class="container my-3">
          <div class="row mx-2">
            <div class="col">
              <h1 class="heading">協力団体</h1>

              <article class="support">
                <h2>Espeyulo</h2>
                <p>在日外国人への医療提供・法律相談活動への協力</p>
                <a href="https://www.espeyulo.com/" target="_blank"><i class="fas fa-link"></i> www.espeyulo.com/</a>
              </article>

            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Novalumoと社会 | Novalumo',
        }
    }
}
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
/* --- Table --- */
table {
  width: 100%;
  border-collapse: collapse;
}
tr {
  border-bottom: solid 1px #ddd;
}
th, td {
  text-align: left;
  vertical-align: middle;
  padding: 20px 0;
}
th span, td span {
  display: inline-block;
}
/* Profile */
.ceo-name {
  font-family: serif;
}
article {
  font-weight: lighter;
  line-height: 200%;
  letter-spacing: 1px;
}
a {
  text-decoration: none;
  color: #007bff;
}

.support {
  padding: 0 0 0 18px;
  margin: 1rem 0;
  /*border-left: solid 2.5px #ccc;*/
}
</style>

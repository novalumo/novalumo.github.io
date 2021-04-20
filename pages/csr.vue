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

<template>
    <div>
        <div class="title">
          <div class="title-body">
            <h1>Recruit</h1>
            <p>採用情報</p>
          </div>
        </div>

        <div class="container my-3">
          <div class="row mx-2">
            <div class="col">
              <h2 class="heading">Coming soon</h2>

            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '採用情報 | Novalumo',
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

article {
  font-weight: lighter;
  line-height: 200%;
  letter-spacing: 1px;
}
a {
  text-decoration: none;
  color: #007bff;
}
</style>

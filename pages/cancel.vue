<template>
    <div>
        <div class="title">
          <div class="title-body">
            <h1>Cancel Policy</h1>
            <p>キャンセルポリシー</p>
          </div>
        </div>

        <div class="container mt-2 mb-5">
          <div class="row">
            <div class="col">
              <article>
              <h3>第1条（概要）</h3>
              <p>
                当社では適切かつ効率的に事業を行うことを目的として、キャンセルポリシーを設定させていただいております。このキャンセルポリシーが適用される範囲は当社の製品に限ります。
              </p>

              <h3>第2条（対象）</h3>
              <p>
                お客様都合によるキャンセルは、キャンセル料をご負担いただきますのでご了承ください。 また、ご相談・見積もり後1週間以内に何らかのご連絡がない場合にも、お客様都合によるキャンセルとみなすこととします。 なお、メールや電話での簡易的なご相談後のキャンセルの場合は料金は発生しません。
              </p>

              <h3>第3条（割合）</h3>
              <p>ケース別のキャンセル料の割合は以下の通りです。</p>
              <table width="100%">
        <tbody><tr>
          <th class="case">ケース</th>
          <th class="per">割合</th>
          <th class="ext"></th>
        </tr>
        <tr>
          <td rowspan="2">制作開始後</td>
          <td><span>進捗が</span><span>5割以下 …</span></td>
          <td>見積金額の50%</td>
        </tr>
        <tr>
          <td><span>進捗が</span><span>5割以上 …</span></td>
          <td>見積金額の75%</td>
        </tr>
        <tr>
          <td><span>納品前</span> <span>最終確認段階</span></td>
          <td>請求予定額の9割</td>
          <td></td>
        </tr>
        </tbody></table>
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
            title: 'キャンセルポリシー | Novalumo',
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

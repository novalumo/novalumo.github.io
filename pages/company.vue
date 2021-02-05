<template>
    <div>
      
        <div class="title">
          <div class="title-body">
            <h1>Company</h1>
            <p>会社情報</p>
          </div>
        </div>

        <div class="container my-3"><!-- container -->
          <div class="row mx-2"><!-- row -->
            <div class="col"><!-- col -->

              <!-- mission -->
              <h1 class="heading">ミッション</h1>
              <article>
                <p>
                  “Novalumo”（ノバルーモ） は、国際補助語である<a href="https://ja.wikipedia.org/wiki/%E3%82%A8%E3%82%B9%E3%83%9A%E3%83%A9%E3%83%B3%E3%83%88" target="_blank">エスペラント</a>で「新しい（Nova）光（Lumo）」という意味があります。
                  この言葉には、「世界に光を与えたい」→「世界中の人々を笑顔にしたい」という想いが込められています。
                  情報技術やエンターテインメントを通じて、多くの人々に勇気や希望、そして笑顔を届けることが、私たちの使命です。
                </p>
              </article>

              <!-- about -->
              <h1 class="heading">会社概要</h1>
              <table>
                <tbody>
                  <tr>
                    <th>社名</th>
                    <td>
                      <span><ruby>Novalumo<rt>ノバルーモ</rt></ruby>合同会社</span><br>
                      <span>（英文表記）</span><span>Novalumo G.K.</span>
                    </td>
                  </tr>
                  <tr>
                    <th>代表社員</th>
                    <td>白澤 賢斗</td>
                  </tr>
                  <tr>
                    <th><span>本社</span><span>所在地</span></th>
                    <td>岩手県大船渡市大船渡町字山馬越64-3</td>
                  </tr>
                  <tr>
                    <th>設立</th>
                    <td><span>2020年</span><span>4月30日</span></td>
                  </tr>
                  <tr>
                    <th>資本金</th>
                    <td>30,000円</td>
                  </tr>
                  <tr>
                    <th><span>取引</span><span>銀行</span></th>
                    <td>
                      岩手銀行、東北銀行<br>
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- officer -->
              <div>
                <h1 class="heading">役員</h1>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <span title="最高経営責任者">CEO</span>
                      </th>
                      <td><a href="https://www.siraken.net/" target="_blank">白澤 賢斗</a></td>
                    </tr>
                    <tr>
                      <th><span title="最高執行責任者">COO</span></th>
                      <td>白澤 里美</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- history -->
              <h1 class="heading">沿革</h1>
              <table>
                <tbody>
                  <tr>
                    <th><span>2020年</span> <span>4月</span></th>
                    <td>岩手県大船渡市にNovalumo合同会社を設立（30日）</td>
                  </tr>
                  <tr>
                    <th><span>2020年</span> <span>5月</span></th>
                    <td>法人登記手続き完了、事業開始（8日）</td>
                  </tr>
                </tbody>
              </table>

            </div><!-- /col -->
          </div><!-- /row -->
        </div><!-- /container -->
    </div>
</template>



<script>
export default {
    head() {
        return {
            title: '会社情報 | Novalumo',
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
a {
  text-decoration: none;
  color: #007bff;
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
th {
  width: 250px;
}
th span, td span {
  display: inline-block;
}
@media (max-width: 777px) {
  th {
    width: 100px;
  }
}
</style>

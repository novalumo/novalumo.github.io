<template>
    <div>
        <div class="title">
          <div class="title-body">
            <h1>Sales Policy</h1>
            <p>販売条件</p>
          </div>
        </div>

        <div class="container my-3">
          <div class="row mx-2">
            <div class="col">
              <article>
                <!-- cancel policy -->
                <h1 class="heading">キャンセルポリシー</h1>

                <h3>第1条（対象）</h3>
                <p>
                  当社では適切かつ効率的に事業を行うことを目的として、キャンセルポリシーを設定させていただいております。このポリシーが適用される範囲は当社の製品に限ります。
                  お客様都合によるキャンセルが発生した場合は、手数料をご負担いただきますのでご了承ください。 また、ご相談・見積もり後1週間以内に何らかのご連絡がない場合にも、お客様都合によるキャンセルとみなすこととします。 なお、メールや電話での簡易的なご相談後のキャンセルの場合は料金は発生しません。
                </p>

                <h3>第2条（割合）</h3>
                <p>キャンセル時ケース別の手数料の割合は以下の通りです。</p>

                <table width="100%">
                  <tbody>
                    <tr>
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
                  </tbody>
                </table>

                <!-- specified commercial transaction act -->
                <h1 class="heading">特定商取引法に基づく表示</h1>

                <h3>販売業者</h3>
                <p>Novalumo合同会社</p>

                <h3>業務責任者</h3>
                <p>代表社員　白澤 賢斗</p>

                <h3>所在地</h3>
                <p>岩手県大船渡市大船渡町字山馬越64-3 県営住宅336号</p>

                <h3>メールアドレス</h3>
                <p>contact@novalumo.llc</p>

                <!--
                商品代金以外の必要料金の説明
                  商品代金以外にかかる料金（送料、消費税、手数料など）を全て表示します。
                  ※クレジットカード決済の手数料は、購入者負担にできません。その旨を記載しないようにご注意ください。
                  送料の請求がある場合は、具体的な金額を記載します。
                -->

                <!--
                申込有効期限
                  商品のお申し込みの際、いつまでのお申し込みが有効なのかを表示します。
                  また、品切れの場合の対応についても表示します。
                -->

                <!--
                不良品
                  不良品の場合の交換や、返金の条件を表示します。
                -->

                <!--
                販売数量
                  商品の販売数量の制限など、特別な販売条件があるときは、その内容を表示します。
                -->
                
                <!--
                引渡し時期
                  後払いの場合は注文日より何日以内、前払いの場合は入金日より何日以内で発送できるかを表示します。
                  地域、条件により期間が異なる場合は、最長で何日以内かも表示します。
                  ※クレジットカードは後払いです。
                -->

                <!--
                お支払方法
                  代引き、銀行振込、郵便振込、クレジットカードなど、自分のネットショップで扱う支払方法を表示します。
                -->

                <!--
                お支払期限
                  後払いの支払いは納品より何日以内、前払いの場合は注文日より何日以内かを表示します。
                -->

                <!--
                返品期限
                  納品日より何日以内だったら返品可能かを表示します。
                  返品不可な商品も扱っている場合は、「食品については開封後返品不可」や「名入れ商品は返品不可」など
                  条件を表示します。
                -->
                
                <!--
                返品送料
                  返品の際、購入者側と販売者側のどちらが送料を負担するか表示します。
                -->

                <!--
                資格・免許
                  取扱商品に販売資格（免許）を必要とする場合は、その資格を表示します。
                  免許が必要ない商品のみ扱う場合、表示は不要です。 例：古物商、旅行業者代理業、酒類販売業
                -->
                
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
            title: '販売条件 | Novalumo',
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

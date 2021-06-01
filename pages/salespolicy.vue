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

            <!-- info -->
            <div class="info" v-if="this.lang == 'en'">
              <p style="margin: 0;"><i class="fas fa-fw fa-exclamation-circle"></i> We are sorry that this page is not translated and available only in Japanese so far.</p>
            </div>

            <!-- cancel policy -->
            <h2 class="heading">キャンセルについて</h2>
            <p>
              当社では合理的に事業を行うことを目的として、当社の製品に限りキャンセルポリシーを設定しています。
              各種制作依頼等をいただく際には、当社が提示するポリシーへの同意が必要となりますことにご留意ください。
              その他、ご不明な点がございましたらご連絡ください。
            </p>

            <!-- specified commercial transaction act -->
            <h2 class="heading">特定商取引法に基づく表示</h2>

            <h3>販売業者</h3>
            <p>{{info.company}}</p>

            <h3>業務責任者</h3>
            <p>{{info.staff}}</p>

            <h3>所在地</h3>
            <p class="noselect">〒{{info.zipcode}}<br>{{info.address}}</p>

            <h3>電話番号</h3>
            <p class="noselect">{{info.tel}}</p>

            <h3>メールアドレス</h3>
            <p class="noselect">{{info.email}}</p>

            <h3>お支払方法</h3>
            <!--
              代引き、銀行振込、郵便振込、クレジットカードなど、自分のネットショップで扱う支払方法を表示します。
            -->
            <p>
              クレジットカード(Stripe決済システムを使用)、銀行振込、PayPal
            </p>

            <h3>お支払期限</h3>
            <!--
              後払いの支払いは納品より何日以内、前払いの場合は注文日より何日以内かを表示します。
            -->
            <p>
              クレジットカード、PayPal：各カード会社引き落とし日<br>
              銀行振込：ご注文後7日以内
            </p>

            <h3>商品代金以外の必要料金</h3>
            <!--
              商品代金以外にかかる料金（送料、消費税、手数料など）を全て表示します。
              ※クレジットカード決済の手数料は、購入者負担にできません。その旨を記載しないようにご注意ください。
              送料の請求がある場合は、具体的な金額を記載します。
            -->
            <p>送料、消費税、決済手数料、振込手数料</p>

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
            title: '販売条件',
        }
    },
    data() {
      return {
        info: [],
        lang: this.$i18n.localeProperties.code
      }
    },
    async fetch() {
      this.info = await fetch(
        'https://script.google.com/macros/s/AKfycbxezm-94sqtfbuvEyJZJ_y8lZ4MIyy2UuBzxjAGsZrUSF9nTeN8pya_LT1ExadxO1bJ/exec'
      ).then(res => res.json())
    }
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  margin: 14px 0 14px 0;
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
.noselect {
  user-select: none;
  pointer-events: none;
}

// info
.info {
  padding: 10px 14px;
  margin: 0 0 18px 0;
  background: #dc3545;
  color: #fff;
  font-weight: bold;
  user-select: none;
  cursor: default;
}
</style>

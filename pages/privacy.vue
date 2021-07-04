<template>
  <div>
    <div class="title">
      <div class="title-body">
        <h1>Privacy Policy</h1>
        <p>プライバシーポリシー</p>
      </div>
    </div>

    <div class="container py-3">
      <div class="row mx-2">

        <!-- info -->
        <div class="col-12">
          
          <div class="info" v-if="this.lang == 'en'">
            <p style="margin: 0;"><i class="fas fa-fw fa-exclamation-circle"></i> We are sorry that this page is not translated and available only in Japanese so far.</p>
          </div>
          <div class="info" v-if="this.lang == 'eo'">
            <p style="margin: 0;"><i class="fas fa-fw fa-exclamation-circle"></i> Ni bedaŭras, ke ĉi tiu paĝo ne estas tradukita kaj disponebla nur en la japana ĝis nun.</p>
          </div>
          <div class="info" v-if="this.lang == 'de'">
            <p style="margin: 0;"><i class="fas fa-fw fa-exclamation-circle"></i> Es tut uns leid, dass diese Seite bisher nicht übersetzt und nur auf Japanisch verfügbar ist.</p>
          </div>
          <div class="info" v-if="this.lang == 'fr'">
            <p style="margin: 0;"><i class="fas fa-fw fa-exclamation-circle"></i> Nous sommes désolés que cette page ne soit pas traduite et disponible uniquement en japonais jusqu'à présent.</p>
          </div>
        </div>
        
        <div class="col-12">
          <article>
          <p>
            プライバシーは、全ての人々の基本的人権であると私たちは考えています。
            私たちのサービスを安心してご利用いただくために、本ポリシーにしたがって個人情報を適切に管理することをお約束いたします。
          </p>

          <h3>個人情報の範囲</h3>
          <p>
            「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
          </p>

          <h3>情報の収集方法</h3>
          <p>
            当社は、ユーザーがサービスの利用を開始する際に、氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号などの情報をお尋ねすることがあります。
          </p>
          <p>
            また、本WebサイトはGoogleアナリティクスを使用しており、Cookie、デバイスの識別情報（広告識別子など）を収集しています。
            詳しくは<a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Googleによるデータ使用</a>のページをご確認ください。
          </p>

          <h3>情報を収集する目的</h3>
          <p>
            当社が情報を収集する目的は、以下のとおりです。
          </p>
          <ol>
            <li>当社サービスの提供・運営のため</li>
            <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む</li>
            <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
            <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
            <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーを特定し、ご利用をお断りするため</li>
            <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
            <li>有料サービスにおいて、ユーザーに利用料金を請求するため</li>
            <li>上記の利用目的に付随する目的</li>
          </ol>

          <h3>情報の開示</h3>
          <p>
            当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。
            ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
          </p>
          <ol>
            <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
            <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
            <li>その他法令に違反することとなる場合</li>
          </ol>
          <p>
            前項の定めにかかわらず、履歴情報および特性情報などの個人情報以外の情報については、原則として開示いたしません。
          </p>

          <h3>利用目的の変更</h3>
          <p>
            当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。
          </p>
          <p>
            利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
          </p>

          </article>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: this.$i18n.localeProperties.code
    }
  },
  head() {
    return {
      title: 'プライバシーポリシー',
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin: 32px 0;
}

article {
  letter-spacing: 1px;

  p, ol, ul {
    font-size: 1.1rem;
    line-height: 2;
    margin: 0 0 18px 0;
  }
}
a {
  text-decoration: none;
  color: #007bff;
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

<template>
    <div>
        <div class="title">
          <div class="title-body">
            <h1>Business</h1>
            <p>事業紹介</p>
          </div>
        </div>

        <div class="container my-3">
          <div class="row mx-2">
            <div class="col">
              <article>
                <h2 class="heading text">ICT導入支援</h2>
                <p>
                  ICTの導入・運用・最適化を支援します。
                  コンピューターの設定・導入はもちろん、コンサルティングやアフターサポート、情報技術に対応できる人材の育成も行っています。
                </p>

                <h2 class="heading text">システム開発</h2>
                <p>
                  業務改革、医療事務などの様々なニーズに応えるシステムの開発・提供を行なっています。
                  モダンな技術を駆使することで、低コストでありながらも利便性の良い環境を整備できます。
                </p>

                <h2 class="heading text">コンテンツ制作</h2>
                <p>
                  最新のデザインやシステムを活用したWebサイトや映像などの制作を行っています。
                  お客様のニーズに応え、それぞれのプラットフォームに最適化したものを提供します。
                </p>

                <h2 class="heading text">各種マネジメント</h2>
                <p>
                  様々な分野で活躍する人々に対して、今までにない画期的で柔軟なマネジメントサービスを提供しています。
                  コンテンツ制作支援やスケジュール管理、情報提供などを通して、創作活動に注力できる環境を創出します。
                </p>

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
            title: '事業紹介',
        }
    },
    mounted() {
      //document.getElementById('midashi').classList.add('animate')
    }
}
</script>

<style lang="scss" scoped>
.img-fluid {
  border: solid 2px #eee;
  border-radius: 1.5rem;
  margin: 0;
}

article h2 {
  line-height: 1.5;
}
</style>

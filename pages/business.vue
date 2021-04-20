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
                <h2 class="heading">ICT導入支援</h2>
                <p>
                  ICTの導入・運用・最適化を支援します。
                  コンピューターの設定・導入はもちろん、コンサルティングやアフターサポート、情報技術に対応できる人材の育成も行っています。
                  
                </p>
              </article>
              <article>
                <h2 class="heading">各種コンテンツ制作</h2>
                <p>
                  最新のデザインやシステムを活用したWebサイトや映像などの制作を行っています。
                  お客様のニーズに応え、それぞれのプラットフォームに最適化したものを提供します。
                </p>
              </article>
              <article>
                <h2 class="heading">クリエイター育成・マネジメント</h2>
                <p>
                  クリエイター・アーティストの育成や総合的なマネジメントを行なっています。
                  コンテンツ制作支援やスケジュール管理、情報提供などを通して、クリエイターが創作活動に注力できる場を創出します。
                </p>
              </article>
              <article>
                <h2 class="heading">医療支援</h2>
                <p>
                  情報技術を生かして、誰でも医療にアクセスしやすい環境をつくります。
                  医療現場の働き方を改善できるシステムの提供も行っています。
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
            title: '事業紹介 | Novalumo',
        }
    }
}
</script>

<style>
.img-fluid {
  border: solid 2px #eee;
  border-radius: 1.5rem;
  margin: 0;
}

article h2 {
  line-height: 1.5;
}
</style>

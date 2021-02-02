<template>
    <div>
        <div class="title">
          <div class="title-body">
            <h1>Business</h1>
            <p>事業紹介</p>
          </div>
        </div>

        <div class="container my-3">
          <div class="row">
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
export default {}
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

.haeading {
  color: #333;
  padding: .2em 0 .2em .5em;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
  border: solid 2px #eee;
  border-radius: 13px 0 13px 0;
  /*
  border-left: solid 5px #c55;
  border-bottom: solid 2px #c55;
  */
}

.img-fluid {
  border: solid 2px #eee;
  border-radius: 1.5rem;
  margin: 0;
}

article h2 {
  line-height: 1.5;
}
</style>

<template>
<div class="news-page">
  <div class="container py-3">
    <div class="row mx-2">
      <div class="col">

        <article>
          <div class="post-header">
            <p class="date">{{ $getEnglishDate(this.post.date) }}</p>
            <h1 class="post-title">{{ this.post.title }}</h1>
            
              <a class="category" :class="this.post.category">
                <span v-if="this.post.category === 'release'">ニュースリリース</span>
                <span v-else-if="this.post.category === 'info'">お知らせ</span>
                <span v-else-if="this.post.category === 'media'">メディア</span>
                <span v-else>その他</span>
              </a>

              <!-- <nuxt-link :to="localePath('/news/category/' + this.post.category)" class="category" :class="this.post.category">
                <span v-if="this.post.category === 'release'">ニュースリリース</span>
                <span v-else-if="this.post.category === 'info'">お知らせ</span>
                <span v-else-if="this.post.category === 'media'">メディア</span>
                <span v-else>その他</span>
              </nuxt-link> -->
            
          </div>
          <iframe :src="'/docs/' + this.post.id + '.md'" frameborder="0" style="width:100%; height: 95vh; border: solid 1px #ccc;"></iframe>
        </article>

      </div>
  </div>
  </div>
</div>
</template>

<script>
import newsData from '@/assets/json/news.json'
const titleTemplate = ' | Novalumo合同会社'

export default {
  async asyncData({ params }) {

    // 記事データ取得
    const slug    = params.slug
    const getPost = ( posts ) => { return posts.id === slug }
    const post    = newsData.find(getPost)

    return { post }
  },
  head() {
    return {
      title: this.post.title,
      meta:
      [
        { hid: 'robots', name: 'robots', content: 'noindex,nofollow' },
        { hid: 'description', name: 'description', content: this.post.description },
        { property: 'og:description', name: 'description', content: this.post.description },
        { property: 'twitter:description', name: 'description', content: this.post.description },
        { property: 'og:title', content: this.post.title + titleTemplate },
        { property: 'twitter:title', content: this.post.title + titleTemplate },
        { property: 'og:image', content: this.$getSiteUrl() + this.post.img },
        { property: 'twitter:image', content: this.$getSiteUrl() + this.post.img },
      ]
    }
  },
  mounted() {
    let here = window.location.origin
    let file = '/docs/' + this.post.id + '.md'
    let url = here + file
    if (this.$is404(url) === 404) {
      location.href = '/'
    }
    location.href = '/'
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
.news-page {
  background: #fafafa;
}

article {

  margin: 18px 0;

  .post-header {

    margin: 0 0 18px 0;

    h1 {
      font-size: 3rem;
      font-weight: bold;
      position: relative;
      left: -5px;
    }
    .date {
      color: #777;
      font-size: 1.1rem;
      font-weight: bold;
      margin: 0;
      cursor: default;
    }

    .category {
      padding: .2rem .5rem;
      border-radius: 18px;
      display: inline-block;
      font-size: .8rem;
      font-weight: bold;
      text-decoration: none;
      transition: linear .1s;
      // default
      background: #eee;
      color: #333;

      &.release {
        background: #da0f47;
        color: #fff;
      }

      &.info {
        background: #4158dd;
        color: #fff;
      }

      &.media {
        background: #f87f4f;
        color: #fff;
      }

      &:hover {
        opacity: .75;
      }
    }

  }

  
}
</style>
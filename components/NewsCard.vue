<template>
  <dl>
    
    <dd v-for="news in this.newsList.slice(0, this.limit)" :key="news.id">
      <nuxt-link :to="localePath('/news/' + news.file)" class="logo">
        <div>
          <span class="date">{{ getEnglishDate(news.date) }}</span>
          <p class="news-title">{{ news.title }}</p>
          <span class="category" :class="news.category">
            <div v-if="news.category === 'release'">ニュースリリース</div>
            <div v-else-if="news.category === 'info'">お知らせ</div>
            <div v-else-if="news.category === 'media'">メディア</div>
            <div v-else>その他</div>
          </span>
        </div>
        <div class="eyecatch" v-if="news.img !== ''">
          <nuxt-img
            :src="news.img"
            format="webp"
            quality="100"
            sizes="sm:100vw md:200px lg:214px"
          />
        </div>
      </nuxt-link>
    </dd>

  </dl>
</template>

<script>
import newsData from '@/assets/json/news.json'

export default {
  props: {
    limit: {
      type: Number,
      default: 100,
    }
  },
  data() {
    return {
      newsList: newsData
    }
  },
  methods: {
    getEnglishDate(val)
    {
      let date = new Date(val)
      if (date.toString() !== 'Invalid Date')
      {
        const list = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

        let month = date.getMonth()
        let month_english = list[month]

        let day  = date.getDate()
        let year = date.getFullYear()

        return month_english + ' ' + day + ', ' + year
      }
      
      return ''
      
    },
  },
  mounted() {
    // Object.values(this.newsList.slice(0, 3)).forEach(function (key) {
    //   console.log(key.title)
    // })
  }
  
}
</script>

<style lang="scss" scoped>
dl {

  dd {
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
    border: solid 1px #efefef;
    border-radius: 8px;

    &:not(:last-child) {
      margin: 0 0 16px 0;
    }

    a {
      color: inherit;
      display: flex;
      padding: 24px;
      text-decoration: none;
      transition: linear .1s;

      .date {
        color: #777;
        display: block;
        font-size: .85rem;
      }

      p {
        font-weight: bold;
        margin: 0 0 8px 0;
        line-height: 1.5;
      }

      .eyecatch {
        margin: 0 0 0 auto;

        img {
          border: solid 1px #eee;
          border-radius: 10px;
          display: block;
          user-select: none;
          pointer-events: none;
        }
      }

      .category {
        padding: .2rem .5rem;
        border-radius: 18px;
        display: inline-block;
        font-size: .75rem;
        font-weight: bold;
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
      }
  
      &:hover {
        color: inherit;
        opacity: .75;
      }
    }

  }

}


@media screen and (max-width: 768px) {
  dl {
    dd {
      a {
        flex-direction: column-reverse;

        .eyecatch {
          margin: 0 auto 18px auto;
          width: 100%;

          img {
            margin: 0 auto;
            width: 100%;
          }
        }
      }
    }
  }
}

</style>
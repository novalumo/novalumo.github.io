<template>
<div>
    <footer>
        <div class="container-fluid">
            <div class="row content">
                <div class="col-md-4">
                    <ul>
                        <li class="footer-title">{{ $t('footer.about.title') }}</li>
                        <li><nuxt-link :to="localePath('/company/')">{{ $t('footer.about.company') }}</nuxt-link></li>
                        <li><nuxt-link :to="localePath('/business/')">{{ $t('footer.about.business') }}</nuxt-link></li>
                        <li><a href="https://news.novalumo.llc/">{{ $t('footer.about.newsroom') }}</a></li>
                        <li><nuxt-link :to="localePath('/contact/')">{{ $t('footer.about.contact') }}</nuxt-link></li>
                    </ul>
                </div>
                
                <div class="col-md-4">
                    <ul>
                        <li class="footer-title">{{ $t('footer.social') }}</li>
                        <li><a href="https://twitter.com/novalumo" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.facebook.com/Novalumo.LLC" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.youtube.com/channel/UCbJbGA69cPlsw1exVfpvj8A" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                    </ul>
                </div>
                
                <div class="col-md-4">
                    <ul>
                        <li class="footer-title">{{ $t('footer.policy.title') }}</li>
                        <li><nuxt-link :to="localePath('/privacy/')">{{ $t('footer.policy.privacy') }}</nuxt-link></li>
                        <li><nuxt-link :to="localePath('/salespolicy/')">{{ $t('footer.policy.sales') }}</nuxt-link></li>
                    </ul>
                </div>
            
            </div>
        </div>
        
        <div class="copyright">
            <span>Copyright &copy; Novalumo</span>, <span>All rights reserved.</span>
        </div>

    </footer>
</div>
</template>

<style lang="scss" scoped>
/*!
 * Footer
 */

footer {
  background: #fefefe;
  color: #333;
  border-top: solid 1px #ddd;
  font-weight: bold;

  .copyright {
    width: 100%;
    padding: 10px 0;
    background: rgba(245, 245, 245, 0.5);
    color: #777;
    font-size: .8rem;
    border-top: solid 1px #ddd;
    cursor: default;
    text-align: center;
    
    span {
      display: inline-block;
    }
  }

  .content {

    padding: 18px 8px;
    
    ul {
      list-style: none;
      line-height: 2.1;
      font-size: 1.1rem;
      margin: 0;
      
      .footer-title {
        font-size: 1.5rem;
        font-weight: bold;
        cursor: default;
      }
      
      a {
        text-decoration: none;
        color: #777;
        transition: .1s;
        
        &:hover {
          color: #333;
        }
      }
  
    }
  }
  
}
</style>

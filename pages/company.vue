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
          <h2 class="heading">{{ $t('company.mission.title') }}</h2>
          <article>
            <p>
              {{ $t('company.mission.body') }}
            </p>
          </article>

          <!-- about -->
          <h2 class="heading">{{ $t('company.overview.title') }}</h2>
          <table>
            <tbody>
              <tr>
                <th>{{ $t('company.overview.name') }}</th>
                <td>
                  <span><ruby>Novalumo<rt>ノバルーモ</rt></ruby>合同会社</span><br>
                  <span>{{ $t('company.overview.name_eng') }}：</span><span>Novalumo Japan G.K.</span>
                </td>
              </tr>
              <tr>
                <th>{{ $t('company.overview.rep') }}</th>
                <td>{{ $t('company.overview.rep_name') }}</td>
              </tr>
              <tr>
                <th>{{ $t('company.overview.est') }}</th>
                <td>{{ $t('company.overview.est_date') }}</td>
              </tr>
              <tr>
                <th>{{ $t('company.overview.capital') }}</th>
                <td>{{ $t('company.overview.capital_price') }}</td>
              </tr>
            </tbody>
          </table>

          <!-- officer -->
          <div>
            <h2 class="heading">{{ $t('company.officer.title') }}</h2>
            <table>
              <tbody>
                <tr>
                  <th>
                    <span title="最高経営責任者">CEO</span>
                  </th>
                  <td>{{ $t('company.officer.ceo') }} <a href="https://siraken.github.io/" target="_blank" rel="noopener noreferrer"><i class="fas fa-fw fa-external-link-alt"></i></a></td>
                </tr>
                <tr>
                  <th><span title="最高執行責任者">COO</span></th>
                  <td>{{ $t('company.officer.coo_1') }}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
    
  </div>
</template>



<script>
export default {
  head() {
    return {
        title: this.$t('company.title'),
    }
  },
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #007bff;
}
table {
  width: 100%;
  margin: -10px 0 34px 0;
  border-collapse: collapse;
}
tr {
  border-bottom: solid 1px #ddd;
}
th, td {
  text-align: left;
  line-height: 1.5;
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

<template>
  <div class="site">
    <header-bar/>
    <div class="siteContent">
      <nuxt class="has-text-centered "/>
    </div>
    <footer-bar/>
  </div>
</template>
<script>
  import HeaderBar from '~/components/header.vue'
  import FooterBar from '~/components/footer.vue'
  export default {
    components: {
      HeaderBar,
      FooterBar
    }
  }
</script>
<style>
  .siteContent {
    padding: 20px;
  }
</style>
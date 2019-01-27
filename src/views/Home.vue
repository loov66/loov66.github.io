<template>
  <div class="home">
    <Movies :data='data' />
  </div>
</template>

<script>
// @ is an alias to /src
import Movies from '@/components/Movies'
export default {
  name: "home",
  components: {Movies},
  data() {
    return {
      data: []
    };
  },
  created() {
    axios.get(`${this.$douban.hot}`, {
      params: {
        city: '深圳'
      }
    })
    // this.$axios.get(`/api/devices`)
      .then(res => {
      console.log(res.data);
      this.data = res.data
    });
  }
};
</script>

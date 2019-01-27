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
    this.$axios.get(`${this.$douban.hot}`)
    // this.$axios.get(`/api/devices`)
      .then(res => {
      console.log(res.data);
      this.data = res.data
    });
  }
};
</script>

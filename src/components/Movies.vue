<template>
  <div class="movies">
    <h5>{{data.title}}</h5>
    <div v-for="movie in data.subjects" :key="movie.id">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="movie.images.large" alt>
        <div class="card-body">
          <h5 class="card-title">影名：{{movie.title}}</h5>
          <p class="card-text">
            豆瓣评分：{{movie.rating.average}} <br>
          </p>
            上映日期：
            <div v-for="(date) in movie.pubdates" :key="date">
                {{date}}
            </div>
          <a href="#" class="btn btn-primary">详情</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "movies",
  props: ["data"],
  components: {},
  data() {
    return {};
  }
};
</script>

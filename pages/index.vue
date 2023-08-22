<template>
  <div>
    <h1>{{ this.dataBase }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataBase: null
    }
  },
  name: 'IndexPage',
  async asyncData({ $api }) {
    try {
      const response = await $api.post('/v1/parks/cars/list'); // Замените на путь к нужному эндпоинту
      this.dataBase = response;
      console.log(response);
      return { response };
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
</script>

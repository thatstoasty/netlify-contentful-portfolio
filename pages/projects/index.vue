<template>
  <div class="container-fluid">
    <h1 class="m20">projects</h1>
    <hr>
    <div v-for="article of articles" :key="article.slug">
        <h3 class="mb8">
          <NuxtLink :to="{ name: 'projects-slug', params: { slug: article.slug } }">
            {{ article.title.toLowerCase() }}
          </NuxtLink>
        </h3>
        <p>{{ article.summary }}</p>
    </div>
  </div>
</template>

<script>

export default {
  head: {
      title: 'Projects | thatstoasty',
      meta: [
          { hid: 'description', 
          name: 'description', 
          content: 'Projects by Mikhail Tavarez - a list of personal projects I\'ve accumulated over time.' }
      ]
  },
  async asyncData({ $content, params }) {
    const articles = await $content('projects')
      .only(['title', 'summary', 'slug','createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles
    }
  }

}
</script>

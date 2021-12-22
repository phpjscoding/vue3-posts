<template>
  <EventCard  v-for="post in posts" :key="post.id" :post="post"/>
</template>


<script setup>

  import {ref,reactive} from 'vue';

  import postServices from '../services/postServices.js';
  import EventCard from '../components/EventCard.vue';
 const posts = ref(null)


postServices.getPosts()
.then(response=>{posts.value = response.data })
.catch(err=> console.log(err))

</script>

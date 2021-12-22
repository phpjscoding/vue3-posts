<template>
  <div class="post-body">
   <h2 v-if="post"> {{post.body}} {{post.id}}</h2>
  </div>
</template>


<script setup>
import {ref} from 'vue';
import postServices from '../services/postServices.js';


  const props = defineProps({
    id:String
  })



const post = ref(null)


postServices.getPost(props.id)
.then(response=> post.value = response.data)
.catch(err=> console.log(err))


console.log(props.id)

  
</script>



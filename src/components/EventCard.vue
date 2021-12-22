<template>
    <router-link  class="post-link" :to="{name:'post-details',params:{id:post.id} }">
       <div class="post-card">
       <h1> {{post.title}}</h1>
     </div>
    </router-link>
</template>


<script setup>
 const props = defineProps({
  post:Object

 })


</script>



<style>
         .post-card{
      border: 1px solid;
      margin: 1em;
      border-radius: 199px;
  }

  .post-link{
    text-decoration: none;
    color: #121212;

  }

</style>
<script setup>

</script>

<template>
   <div id="app-temp">
    <div id="nav">
      <router-link :to="{name:'EventList'}">Events</router-link> 
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>

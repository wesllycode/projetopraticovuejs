<template>
  <div id="app">  
      <Header />         
      <router-view class="container"></router-view>     
  </div>
</template>

<script>
import Header from "@/components/Header"

export default{
  components: {
    Header
  }
};
</script>

<style>
body{
  margin: 0px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #234;
}

ul{
  list-style: none;
  padding: 0px;
  margin: 0px;
}

a{
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

/* O exact ele pega exatamente o link que esta ativo */
a.router-link-active{
  color: #4b8;
}

.container{
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>

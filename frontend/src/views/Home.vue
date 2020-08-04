<template>
    <div>        
        <div v-if="loading">  
            <PageLoading/>           
        </div>
        <div v-if="apicursos">
            <h1>Home</h1>
            <p>{{apicursos}}</p>
        </div>
    </div>
</template>

<script>
import apiCursos from '@/mixins/apiCursos.js';
export default {
    name: 'home',
    mixins: [apiCursos],
    created(){
        this.apiCursos("/home");
    }
    
}
</script>

<style>

</style>
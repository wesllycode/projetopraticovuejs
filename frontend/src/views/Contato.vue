<template>
    <div>
        <div v-if="loading">
            <PageLoading/>  
        </div>
        <div v-if="apicursos">
            <h1>Contato</h1>
            <p>{{apicursos}}</p>
        </div>
    </div>
</template>

<script>
import apiCursos from '@/mixins/apiCursos.js';
export default {
    name: 'contato',
    mixins: [apiCursos],
    created(){
        this.apiCursos("/contato");
    }
}
</script>

<style scoped>

</style>
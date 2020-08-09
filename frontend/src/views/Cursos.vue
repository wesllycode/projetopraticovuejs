<template>
    <div>
    <div v-if="loading">
            <PageLoading/>   
        </div>
    <transition>
        <div v-if="apicursos">
            <h1>Cursos</h1>
            <p>{{apicursos}}</p>
        </div>
    </transition>
    </div>
</template>

<script>
import apiCursos from "@/mixins/apiCursos.js";
export default {
name: 'CUrsos',
mixins: [apiCursos],
    created(){
        this.apiCursos('/cursos');
    }
}

</script>
<style scoped>

</style>
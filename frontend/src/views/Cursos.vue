<template>
    <div>
    <div v-if="loading">
            <PageLoading/>   
        </div>
    <transition>
        <div v-if="apicursos" class="conteudo">
            <div>
                <h1>{{apicursos.titulo}}</h1>
                <p>{{apicursos.descricao}}</p>
            </div>
            <ul>
                <li v-for="curso in apicursos.cursos" :key="curso.nome">
                    <h2>
                        <router-link 
                            :to="{name: 'curso', params: {curso: curso.id}}
                        ">
                            {{curso.nome}} - {{curso.totalAulas}} aulas | {{curso.horas}} horas
                        </router-link>
                    </h2>
                    <p>{{curso.descricao}}</p>
                </li>
            </ul>
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
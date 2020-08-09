<template>
    <div>
        <div v-if="loading">
            <PageLoading/>
        </div>
        <transition>
        <div class="conteudo">
            <div v-if="apicursos">
                <h1>{{apicursos.nome}}</h1>
                <p>{{apicursos.descricao}}</p>
                <h2>Aulas</h2>
                    <ul class="aulas">
                        <li v-for="aula in apicursos.aulas" :key="aula.id">
                           <router-link :to="{name: 'aula', params:{aula: aula.id}}">{{aula.nome}}</router-link>                  
                        </li>
                    </ul>
            </div>
            <!-- 
                Esse router view so é ativado quando ele tem filho no router
            -->
            <router-view></router-view>
        </div>
        </transition>   
    </div>
</template>

<script>
import apiCursos from '@/mixins/apiCursos.js';

export default {
    name: "curso",
    props: ["curso"],
    mixins: [apiCursos],
    created(){
        // Passar aqui e forma dinamica
        this.apiCursos(`/curso/${this.curso}`);
    }
}
</script>

<style>
.aulas li a{
    display: block;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
    background: white;
    padding:20px;
    margin-bottom: 10px;
    border-radius:4px;

}

.aulas li a.router-link-active{
    background: #4b8;
    color: #fff;
}
</style>
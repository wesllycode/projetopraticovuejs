<template>
    <div>        
        <div v-if="loading">  
            <PageLoading/>           
        </div>
        <transition>
        <div v-if="apicursos" class="conteudo">
            <div>
                <h1>Sobre a {{apicursos.titulo}}</h1>
                <p>{{apicursos.descricao}}</p>
                <router-link class="btn-cursos" tag="button" to="/cursos">Cursos</router-link>
                <div>
                    <h2>Avaliações</h2>
                    <ul>
                        <li v-for="avaliacao in apicursos.avaliacoes" :key="avaliacao.nome">
                            <p>{{avaliacao.nome}}</p>
                            <p>{{avaliacao.descricao}}</p>
                        </li>
                    </ul>
                </div>
            </div>
                <img src="@/assets/aprender.png" alt="aprender">            
        </div>
        </transition>
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

<style scoped>

.btn-cursos {
    border: none;
    background: #4b8;
    border-radius:4px;
    color: #fff;
    cursor: pointer;
    padding: 15px 20px;
    font-size: 1rem;
    margin-top: 10px;
    margin-bottom: 40px;
    box-shadow: 0 4px 2px rgba(0,0,0,0.1);
    font-family: "Avenir", Arial, Helvetica, sans-serif;
}
</style>
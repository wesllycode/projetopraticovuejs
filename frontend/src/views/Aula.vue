<template>
    <div>
        <div v-if="loading">
            <PageLoading/>
        </div>   
        <transition>
            <div v-if="apicursos">
                <h2>{{apicursos.nome}}</h2>
                <div class="video">
                    <iframe witdh="560" height="315" :src="`https://www.youtube.com/embed/${apicursos.youtube}`"
                    frameborder="0" allow="accelerometer;encrypted-media;gyroscope
                    ;picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
import apiCursos from "@/mixins/apiCursos.js"

export default {
    name: "aula",
    props: ["aula"],
    mixins: [apiCursos],
    created(){
        this.apiCursos(`/aula/${this.aula}`);
    },
    //Vamos usar Guard para atualizar os dados puxando da API

    beforeRouteUpdate(to,from,next){
        this.apiCursos(`/aula/${to.params.aula}`);
        next();
    }
}
</script>

<style scoped>
.video{
    position: relative;
    padding-bottom: 56.25%;
}

.video iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
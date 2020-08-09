<template>
    <div>
        <div v-if="loading">
            <PageLoading/>  
        </div>
        <transition>
            <div v-if="apicursos">
                <h1>{{apicursos.titulo}}</h1>
                <p>{{apicursos.descricao}}</p>
                <ul>                  
                    <li>
                        <b>Telefone: </b>
                        {{apicursos.contato.telefone}}                        
                    </li>
                    <li>
                        <b>E-mail: </b>
                        {{apicursos.contato.email}}
                    </li>
                    <li>
                        <b>Endereço:</b>
                        {{apicursos.contato.endereco}}
                    </li>
                </ul>                
               
            </div>
        </transition>
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
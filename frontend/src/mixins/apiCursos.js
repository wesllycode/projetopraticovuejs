export default {
    name: 'apiCursos',    
    data(){
        return {
            loading: true,
            apicursos: null                      
        }
    },
    methods: {       
        apiCursos(url){
            this.loading =  true;
            this.apicursos = null;
            fetch(`http://localhost:3000${url}`)
            .then(r => r.json())
            .then(r => {
                // Isso aqui tiro essa parte, só fiz para testar questão do loading da requisição
                setTimeout(() => {
                    this.apicursos = r;
                    this.loading = false;
                }, 2000);
                
            });       
        }
    }
}


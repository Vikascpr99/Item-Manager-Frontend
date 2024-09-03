<template>
    <layout-container>
        <div class="container">
        <h2 class="text-center mt-5 mb-3">Items Details</h2>
            <div class="card">
              <div class="card-header">
                     <router-link to= "/" class = "btn btn-outline-info float-right">
                        All Items

                    </router-link>
                </div>
                <div class="card-body">
                    <b class="text-muted">Title: </b>
                    <p>{{ item.title }}</p>
                    <b class="text-muted">Category: </b>
                    <p>{{ item.title }}</p>
                    <b class="text-muted">Description: </b>
                    <p>{{ item.description }}</p>
                    <b class="text-muted">Created At: </b>
                    <p>{{ item.createdAt }}</p>
                    <b class="text-muted">Updated At: </b>
                    <p>{{ item.updatedAt }}</p>
            </div>
        </div>
    </div>
    </layout-container>
</template>

<script>

    import LayoutContainer from '../LayoutContainer.vue';
    import axios from 'axios';
    import Swal from 'sweetalert2';
    export default{
        name: 'ItemDetail',
        components: {
            LayoutContainer
        },
        data(){
            return{
                item:{
                    title :'',
                    category :'',
                    description: '',
                    createdAt: '',
                    updatedAt: ''

                }
            }
        },
        created(){
            let id = this.$route.params.id;
            this.getItemDetail(id);

        },
        methods:{
            getItemDetail(id){
                
                axios.get(`/api/items/${id}`)
                .then(response => {
                    
                    this.item= response.data;
                    
                    return response;
                })
                .catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Some error occured',
                        showConfirmButton: false,
                        timer:1500
                    })
                    return error;
                });
            }
        }

    }
</script>
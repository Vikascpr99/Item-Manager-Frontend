<template>
    <layout-container>
        <div class="container">
        <h2 class="text-center mt-5 mb-3">Update Item</h2>
            <div class="card">
              <div class="card-header">
                     <router-link to= "/" class = "btn btn-outline-info float-right">
                        All Items

                    </router-link>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="">Title</label>
                            <input type="text"
                                 v-model="item.title"
                                class="form-control"
                                id="itemTitle"
                                name="itemTitle"
                            />
                        </div>

                        <div class="form-group">
                            <label for="">Category</label>
                            <input type="text"
                                 v-model="item.category"
                                class="form-control"
                                id="itemcategory"
                                name="itemcategory"
                            />
                        </div>

                        <div class="form-group">
                            <label for="">Description</label>
                            <input type="text"
                                 v-model="item.description"
                                class="form-control"
                                id="itemDescription"
                                name="itemDescription"
                            />
                        </div>

                        <button @click="updateItem()"
                                :disabled="isSubmitting"
                                type="button"
                                class="btn btn-outline-warning mt-3"
                        >Submit</button>
                        

                    </form>
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
        name: 'UpdateItem',
        components: {
            LayoutContainer
        },
        data(){
            return{
                item:{
                    title:'',
                    category:'',
                    description:''
                },
                isSubmitting: false
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
            },
            updateItem(){
                this.isSubmitting = true;
                let id = this.$route.params.id;
                console.log(id)
                axios.put(`/api/items/${id}`, this.item)
                .then(response=>{
                    Swal.fire({
                        icon: 'Success',
                        title: 'Item updated Successfully',
                        showConfirmButton: false,
                        timer:1500
                    });
                    this.isSubmitting = false;
                    return response;
                })
                .catch(error => {
                    this.isSubmitting = false;
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
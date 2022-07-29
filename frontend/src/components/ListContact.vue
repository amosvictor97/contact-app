<template>
    <h5>
        Liste des contacts
    </h5>
    <div class="card bg-light mt-3">
        <div class="card-body">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">
                            <input type="checkbox" @click="checkAll">
                        </th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénoms</th>
                        <th scope="col">Téléphone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(contact, index) in contacts" :key="index">
                        <th scope="row">
                            <input type="checkbox" :value="contact._id" v-model="checkedContacts">
                        </th>
                        <td>{{ contact.nom }}</td>
                        <td>{{ contact.prenoms }}</td>
                        <td>{{ contact.telephone }}</td>
                        <td>{{ contact.email }}</td>
                        <td>
                            <router-link class="btn btn-warning " :to="`/contact/${contact._id}`">Edit</router-link>
                            &nbsp;
                            <button class="btn btn-danger ml-2" @click="confirmDelete(contact._id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button v-if="checkedContacts.length > 1" @click="deleteAll" class="btn btn-danger">Suppression multiple</button>
        </div>
    </div>


</template>
<script>
    export default {
        name: "contacts-list",
        data() {
            return {
                contacts: [],
                checkedContacts: [],
                selectAll: false
            };
        },
        mounted() {
            this.getAll();
        },
        methods: {
            getAll() {
                this.axios.get('api/contacts')
                    .then(response => {
                        this.contacts = response.data
                    })
                    .catch(e => {
                        console.log(e)
                    })
            },
            refreshList() {
                this.getAll();
            },
     
            removeAll() {

            },
            checkAll(){
                this.checkedContacts = [];
                if (!this.selectAll) {
                    this.checkedContacts = this.contacts.map(contact => contact._id)
                    this.selectAll = true
                }
                else{
                    this.checkedContacts = []
                    this.selectAll = false
                }
            },
            confirmDelete(contact_id) {
                this.$swal({
                    title: 'Etes vous sûr?',
                    text: "Cette action est irréversible!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Oui, supprimer!',
                    cancelButtonText: 'Annuler'
                }).then((result) => {

                    if (result.isConfirmed) {
                        this.axios.delete(`api/contacts/${contact_id}`)
                            .then(response => {
                                console.log(response)
                                this.$swal(
                                    'SUpprimé!',
                                    'Le contact a été supprimé',
                                    'success'
                                )
                                this.refreshList()
                            })
                            .catch(e => {
                                console.log(e)
                            });
                    }
                });
            },
            deleteAll() {
                this.$swal({
                    title: 'Etes vous sûr?',
                    text: "Vous allez supprimer tous les contacts sélectionnés",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Oui, supprimer tout!',
                    cancelButtonText: 'Annuler'
                }).then((result) => {

                    if (result.isConfirmed) {
                        this.axios.post(`api/contacts/delete-all`,{idList : this.checkedContacts})
                            .then(response => {
                                console.log(response)
                                this.$swal(
                                    'Supprimé!',
                                    'Les contacts ont été supprimé',
                                    'success'
                                )
                                this.refreshList()
                            })
                            .catch(e => {
                                console.log(e)
                            });
                    }
                });
            }
        }
    };
</script>
<style>
    .list {
        text-align: left;
        max-width: 750px;
        margin: auto;
    }
</style>
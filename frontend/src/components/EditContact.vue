<template>
    <!-- <h5 class="text-center">Ajouter un nouveau contact</h5> -->
    <div class="card mt-3">
        <div class="card-body">
            <div class="submit-form">
                <div>
                    <div class="form-group">
                        <label class="form-label" for="nom">Nom</label>
                        <input type="text" class="form-control" id="nom" required v-model="contact.nom" />
                    </div>
                    <div class="form-group">
                        <label class="form-label mt-2" for="prenoms">Prénoms</label>
                        <input type="text" class="form-control" id="prenoms" required v-model="contact.prenoms" />
                    </div>
                    <div class="form-group">
                        <label class="form-label mt-2" for="telephone">Teléphone</label>
                        <input type="tel" class="form-control" id="telephone" required v-model="contact.telephone" />
                    </div>
                    <div class="form-group">
                        <label class="form-label mt-2" for="email">Email</label>
                        <input type="email" class="form-control" id="email" required v-model="contact.email" />
                    </div>

                    <button @click="update" class="btn btn-warning mt-3">Modifier</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "edit-contact",
        data() {
            return {
                contact: {
                    nom: "",
                    prenoms: "",
                    telephone: "",
                    email: ""
                }
            };
        },
        mounted() {
          this.getContactData();
        },
        methods: {

            getContactData(){
                this.axios.get(`/api/contacts/${this.$route.params.id}`)
                    .then(response => {
                        this.contact = response.data
                    })
                    .catch(e => console.log(e))
            },
            update() {
                const id = this.$route.params.id
                this.axios.put(`/api/contacts/${id}`, this.contact)
                    .then(response => {
                        console.log(response)
                        this.$router.push('/')
                    })
                    .catch(e => console.log(e))
            },

        }
    };
</script>
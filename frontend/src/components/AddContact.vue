<template>
    <h5>Ajouter un nouveau contact</h5>
    <div class="card mt-3">
        <div class="card-body">
            <div class="submit-form">
                <form @submit.prevent="saveContact" v-if="!submitted">
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
                        <input type="number" class="form-control" id="telephone" required v-model="contact.telephone" />
                    </div>
                    <div class="form-group">
                        <label class="form-label mt-2" for="email">Email</label>
                        <input type="email" class="form-control" id="email" required v-model="contact.email" />
                    </div>

                    <button  type="submit" class="btn btn-success mt-3">Enregister</button>
                </form>
                <div v-else>
                    <h4>You submitted successfully!</h4>
<!--                     <button class="btn btn-success" @click="newTutorial">Add</button>
 -->                </div>
            </div>
        </div>
    </div>

</template>

<script>
    //import TutorialDataService from "../services/TutorialDataService";
    export default {
        name: "add-contact",
        data() {
            return {
                contact: {
                    nom: "",
                    prenoms: "",
                    telephone: "",
                    email: ""
                },
                submitted: false
            };
        },
        methods: {
            saveContact() {

                this.axios.post('/api/contacts', this.contact)
                    .then(response => {
                        console.log(response.data)
                        this.submitted = true;
                        this.$router.push('/contacts')

                    })
                    .catch(e => console.log(e))

            },
        }
    };
</script>
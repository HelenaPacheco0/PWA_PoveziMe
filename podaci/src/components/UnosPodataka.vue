<template>
    <section>
         <b-field label="Uniste Vaše ime:">
            <b-input placeholder="Ime" v-model="name"></b-input>
        </b-field>
        <b-field label="Uniste Vaše prezime:">
            <b-input placeholder="Prezime" v-model="name"></b-input>
        </b-field>
    </section>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
    flex: 1;
    margin-top: 20px;
    padding-top: 20px;
}
</style>

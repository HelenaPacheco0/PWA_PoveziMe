<template>
    <form class="form">
        <b-input class="text" v-model="name" placeholder="Upišite ime itema:"></b-input>
        <b-button>Novi todo</b-button>
    </form>
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
.form {
    display: flex;
    margin-top: 20px;
    padding-top: 20 px;
    border-top: 1px solid #EFEFEF;
}
.text {
    flex: 1;
}

</style>

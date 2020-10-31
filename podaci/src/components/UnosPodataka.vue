<template>
    <section>
        <p>Unos podataka</p>
         <b-field label="Unesite Vaše ime:">
            <b-input placeholder="Ime" v-model="name"></b-input>
        </b-field>

        <b-field label="Unesite Vaše prezime:">
            <b-input placeholder="Prezime" v-model="surname"></b-input>
        </b-field>

        <b-field label="Odaberite jednu opciju:">
        <b-radio v-model="radio"
                name="radio"
                native-value="Vozač">
                Vozač
        </b-radio>
        <b-radio v-model="radio"
                name="radio"
                native-value="Putnik">
                Putnik
        </b-radio>
        <b-radio v-model="radio"
                name="radio"
                native-value="Paket">
                Paket
        </b-radio>
        </b-field>

        <b-field label="Unesite mjesto polaska:">
            <b-input placeholder="Zagreb" v-model="polazak"></b-input>
        </b-field>

        <b-field label="Unesite mjesto odredišta:">
            <b-input placeholder="Split" v-model="dolazak"></b-input>
        </b-field>
       
        <b-field label="Izaberite datum i vrijeme polaska">
        <b-datetimepicker
            placeholder="Kliknite za odabir..."
            :min-datetime="minDatetime"
            :max-datetime="maxDatetime">
        </b-datetimepicker>
    </b-field>

    <p>Vozač</p>
    <b-field label="Unesite broj putnika:">
      <b-numberinput v-model="number"></b-numberinput>
    </b-field>

    <b-field label="Unesite cijenu:">
      <b-numberinput v-model="number"></b-numberinput>
    </b-field>

    <p>Putnik</p>
    <b-field label="Unesite broj putnika:">
      <b-numberinput v-model="number"></b-numberinput>
    </b-field>

    <p>Paket</p>
    <b-field label="Unesite težinu paketa:">
      <b-numberinput v-model="number"></b-numberinput>
    </b-field>

    </section>
</template>

<script>
export default {
    data(){
            const min = new Date()
            min.setDate(min.getDate() - 7)
            min.setHours(9)
            min.setMinutes(0)
            min.setSeconds(0)
            const max = new Date()
            max.setDate(max.getDate() + 7)
            max.setHours(18)
            max.setMinutes(0)
            max.setSeconds(0)
            return {
                minDatetime: min,
                maxDatetime: max
                
                
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
    flex: 1;
    margin: 50px;
    padding: 50px;
    border: 1px solid #D3D3D3;
}
p{
    font-size: 25px;    
    color: black;
}
</style>

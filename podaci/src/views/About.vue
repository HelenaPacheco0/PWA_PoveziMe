<template>
    <section>
        <p>Unos podataka</p> <!-- odvoji aka login ?-->
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

    <p>Vozač</p>  <!-- odvoji -->
    <b-field label="Unesite broj putnika:">
      <b-numberinput v-model="brputnik"></b-numberinput>
    </b-field>

    <b-field label="Unesite cijenu:">
      <b-numberinput v-model="cijena"></b-numberinput>
    </b-field>

    <p>Putnik</p> <!-- odvoji -->
    <b-field label="Unesite broj putnika:">
      <b-numberinput v-model="brputnik"></b-numberinput>
    </b-field>

    <p>Paket</p> <!-- odvoji -->
    <b-field label="Unesite težinu paketa:">
      <b-numberinput v-model="tezina"></b-numberinput>
    </b-field>

    <div class="buttons">
        <b-button type="is-primary">Potvrdi</b-button>
        <b-button type="is-danger">Poništi</b-button>
    </div>

    <p>Pregled unesenih podataka</p> <!-- odvoji -->
    <button class="button field is-danger" @click="selected = null"
            :disabled="!selected">
            <b-icon icon="close"></b-icon>
            <span>Obriši izabrano</span>
        </button>

        <b-tabs>
            <b-tab-item label="Table">
                <b-table
                    :data="data"
                    :columns="columns"
                    :selected.sync="selected"
                    focusable>
                </b-table>
            </b-tab-item>

            <b-tab-item label="Izabrano">
                <pre>{{ selected }}</pre>
            </b-tab-item>
        </b-tabs>

    </section>
</template>

<script>
export default { // https://jsonplaceholder.typicode.com/users 
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

        const data = [
                { 'id': 1, 'ime': 'Ivan', 'prezime': 'Horvat', 'radio':'Vozač', 'polazak':'Zagreb', 'odrediste':'Split', 'date': '2016-10-15 13:43:27', 'brosoba': 1, 'cijena': 20.00, 'tezina': 0 },
                { 'id': 2, 'ime': 'Petar', 'prezime': 'Horvatić', 'radio':'Vozač', 'polazak':'Bjelovar', 'odrediste':'Rijeka', 'date': '2016-12-15 06:00:53', 'brosoba': 1, 'cijena': 40.00,'tezina': 0 },
                { 'id': 3, 'ime': 'Luka', 'prezime': 'Gilbertić', 'radio':'Putnik', 'polazak':'Zagreb', 'odrediste':'Slavonski Brod','date': '2016-04-26 06:26:28', 'brosoba': 2, 'cijena': 100.00,'tezina': 0 },
                { 'id': 4, 'ime': 'Ines', 'prezime': 'Olić', 'radio':'Paket', 'polazak':'Dubrovnik', 'odrediste':'Zagreb','date': '2016-04-10 10:28:46', 'brosoba': 0, 'cijena': 20.00, 'tezina': 2000},
                { 'id': 5, 'ime': 'Marko', 'prezime': 'Mesić', 'radio':'Putnik', 'polazak':'Bjelovar', 'odrediste':'Nova Gradiška','date': '2016-12-06 14:38:38', 'brosoba': 1, 'cijena': 20.00, 'tezina': 0},
            ]

            return {
                minDatetime: min,
                maxDatetime: max,  
                
                brputnik: 10,
                cijena: 10,
                tezina: 2,

                name: '',
                surname: '',
                radio: '',
                polazak: '',
                dolazak: '',

                data,
                selected: data[1],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'ime',
                        label: 'Ime',
                    },
                    {
                        field: 'prezime',
                        label: 'Prezime',
                    },
                    {
                        field: 'date',
                        label: 'Datum i vrijeme',
                        centered: true
                    },
                    {
                        field: 'brosoba',
                        label: 'Broj Putnika',
                        numeric: true,
                        centered: true,
                    },
                    {
                        field: 'radio',
                        label: 'Opcija',
                    },
                    {
                        field: 'polazak',
                        label: 'Polazak',
                        centered: true,
                    },
                    {
                        field: 'odrediste',
                        label: 'Odredište',
                        centered: true,
                    },
                    {
                        field: 'cijena',
                        label: 'Cijena (HRK)',
                        numeric: true,
                        centered: true,
                    },
                    {
                        field: 'tezina',
                        label: 'Težina paketa (g)',
                        numeric: true,
                        centered: true,
                    }
                ]

                
                
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
    flex: 1;
    margin: 40px;
    padding: 40px;
    border: 1px solid #D3D3D3;
    border-radius: 6px;
}
p{
    margin-bottom: 5px;
    font-size: 25px;    
    color: black;
}
.buttons{
    margin-top: 20px;

}

</style>


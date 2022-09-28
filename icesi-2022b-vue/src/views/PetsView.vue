<template>
    <v-container grid-list-md fluid>
        <v-layout wrap>
            <v-flex xs12 sm4 md3 v-for="dog in dogs" :key="dog.breed">
                <appDog :dog="dog" @addFavorites="addToFavorites"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import {Dogs} from "../data/dogs"
    import {mapActions} from 'vuex';
    import Dog from "../components/DogComponent.vue"
    
    export default {
        components:{
            appDog: Dog,
        },
        data: function(){
            return{
                dogs: Dogs,
            };
        },
        methods:{
            ...mapActions(["addToFavorites"]),
        }
       
    };
</script>

<style>
    p{
        margin: 0;
    }
</style>
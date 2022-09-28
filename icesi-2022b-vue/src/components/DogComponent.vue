<template>
  <v-card color="grey lighten-2">
    <v-img src="https://goo.gl/6CQNDo"></v-img>
    <v-card-title>
      <div>
        <h3>{{ dog.name }}</h3>
        <p>{{ dog.breed }}</p>
      </div>
    </v-card-title>
    <v-img :src="img" height="170px"></v-img>
    <v-btn @click="$emit('addFavorites', dog)">Add to fav</v-btn>
  </v-card>
</template>
<script>
import axios from "../plugins/axios"

export default ({
    name: "DogComponent",
    props: {
        dog:{
            type: Object,
        },
    },
    data: function(){
      return{
        img:""
      };
    },
     methods: {
            getData: function(){
                axios.get("/breed/"+ this.dog.breed + "/images/random").then(res =>{
                    console.log(res);
                    this.img = res.data.message
                }).catch((error)=>{
                    console.log(error);
                })

            }
        },
        created: function(){
            this.getData();
        }
});

</script>

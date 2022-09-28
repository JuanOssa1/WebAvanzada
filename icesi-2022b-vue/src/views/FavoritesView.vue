<template>
  <v-list>
    <v-subheader v-if="!favorites.length"
      >Your favorites list is empty</v-subheader
    >
    <div v-else>
      <v-subheader>My favorites</v-subheader>
      <v-list-item v-for="(dog, index) in favorites" :key="index">
        <v-list-item-avatar>
          <img :src="dog.img" alt="" />
        </v-list-item-avatar>
        <v-list-item-content>{{ dog.name }}</v-list-item-content>
        <v-list-item-action>
          <v-icon>delete</v-icon>
        </v-list-item-action>
      </v-list-item>
    </div>
  </v-list>
</template>

<script>
export default {
  computed: {
    favorites: function () {
      return this.$store.state.favorites;
    },
  },
};
</script>

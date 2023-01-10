<!-- EXAMPLE COMPONENT TO TRY VUE WITH ASTRO AND VUE LIB -->
<script setup>
import { reactive } from 'vue' // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const state = reactive({
  firstName: '',
  lastName: '',
  contact: {
    email: ''
  }
})

const rules = {
  firstName: { required }, // Matches state.firstName
  lastName: { required }, // Matches state.lastName
  contact: {
    email: { required, email } // Matches state.contact.email
  }
}

const v$ = useVuelidate(rules, state)

</script>

<template>
<!-- TODO: finish a form template to test validation  -->
  
</template>


<style lang="scss" scoped>
</style>
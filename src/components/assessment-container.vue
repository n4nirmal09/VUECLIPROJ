<template>
  <div class="assessment-container">
    <b-container>
      <h1>{{ msg }}</h1>
      <b-row v-for="question in questions" :key="question.title" class="d-block">{{ question.title }}</b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AssessmentContainer',
  props: {
    msg: String
  },
  computed:{
      questions() {
        return this.$store.getters.getQuestions
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

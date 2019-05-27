<template>
  <div id="assessment-component">
    <assessment-container msg="This is the assessment container"/>
  </div>
</template>

<script>
import assessmentContainer from './components/assessment-container.vue'

export default {
  name: 'assessment-component',
  components: {
    'assessment-container': assessmentContainer
  }
}
</script>

<style>
#assessment-component {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

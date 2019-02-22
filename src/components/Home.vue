<template>
  <div id="home">
    <div>1</div>
    <div>1</div>
    <div>1</div>
  </div>
</template>

<script>
import Reporting from './Reporting'
import Sidebar from './Sidebar'
// import Nav from './Nav'
// import VideoProcessing from './components/VideoProcessing'
export default {
  name: 'Home',
  components: {
    'sidebar': Sidebar,
    // 'videoProcessing': VideoProcessing,
    // 'nav': Nav
    'reporting': Reporting
  }
}
</script>

<style scoped>
</style>

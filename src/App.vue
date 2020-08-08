<template>
  <div id="app">
    <navigation />
    <router-view/>
  </div>
</template>

<script type="text/javascript">
import Navigation from '@/components/navigation'

export default {
  components: {
    Navigation
  }
}

</script>
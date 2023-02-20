<template>
  <div class="filter-section">
    Filter Messages by
    <a href="#" @click.prevent="handleClickLink">
      Chat Filter for YouTube Live
    </a>
  </div>
</template>

<script setup lang="ts">
const handleClickLink = () => {
  window.open(
    'https://chrome.google.com/webstore/detail/chat-filter-for-youtube-l/jalcplhakmckbmlbidmbmpaegcpbejog'
  )
}
</script>

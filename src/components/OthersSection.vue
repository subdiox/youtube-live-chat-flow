<template>
  <div class="others-section">
    <v-switch
      v-model="chatVisible"
      class="mt-0 pt-0"
      label="Always Show Chat"
      hint="By default, the chat is hidden for YouTube Premieres."
      persistent-hint
      dense
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { settingsStore } from '~/store'

export default defineComponent({
  setup() {
    const chatVisible = computed({
      get: () => {
        return settingsStore.chatVisible
      },
      set: (value) => {
        settingsStore.setChatVisible({
          chatVisible: value,
        })
      },
    })
    return {
      chatVisible,
    }
  },
})
</script>

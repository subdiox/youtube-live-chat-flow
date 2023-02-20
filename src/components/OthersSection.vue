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
    <v-switch
      v-model="bottomChatInputEnabled"
      class="mt-3 pt-0"
      label="Bottom Chat Input"
      hint="Move the chat input to the bottom controls on video. (Page reload required)"
      persistent-hint
      dense
    />
    <v-switch
      v-model="growBottomChatInputEnabled"
      :disabled="!bottomChatInputEnabled"
      class="mt-3 pt-0"
      label="Grow Bottom Chat Input"
      dense
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { settingsStore } from '~/store'

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
const bottomChatInputEnabled = computed({
  get: () => {
    return settingsStore.bottomChatInputEnabled
  },
  set: (value) => {
    settingsStore.setBottomChatInputEnabled({
      bottomChatInputEnabled: value,
    })
  },
})
const growBottomChatInputEnabled = computed({
  get: () => {
    return settingsStore.growBottomChatInputEnabled
  },
  set: (value) => {
    settingsStore.setGrowBottomChatInputEnabled({
      growBottomChatInputEnabled: value,
    })
  },
})
</script>

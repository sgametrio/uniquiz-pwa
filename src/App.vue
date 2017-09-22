<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout ref="layout" view="hhh lpr lFr">
      <!-- Toolbar -->
      <q-toolbar slot="header">
        <q-btn flat @click="$refs.layout.toggleLeft()">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          {{ toolbarTitle }}
          <span slot="subtitle" v-if="toolbarSubtitle">{{ toolbarSubtitle }}</span>
        </q-toolbar-title>
      </q-toolbar>

      <!-- Sidebar -->
      <div slot="left">
        <q-list no-border link inset-separator>
          <q-list-header>Essential Links</q-list-header>
          <q-side-link item to="/quiz">
            <q-item-side icon="school" />
            <q-item-main label="Start a new quiz" />
          </q-side-link>
          <q-side-link item to="/forum">
            <q-item-side icon="record_voice_over" />
            <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
          </q-side-link>
          <q-side-link item to="/chat">
            <q-item-side icon="chat" />
            <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
          </q-side-link>
          <q-side-link item to="/twitter">
            <q-item-side icon="rss feed" />
            <q-item-main label="Twitter" sublabel="@quasarframework" />
          </q-side-link>
        </q-list>
      </div>
      <router-view></router-view>
    </q-layout>
  </div>
</template>

<script>
/*
 * Root component
 */
import { QLayout, QToolbar, QToolbarTitle, QBtn, QIcon, QList, QListHeader, QSideLink, QItemSide, QItemMain } from "quasar"

export default {
  data () {
    return {
      toolbarTitle: "Uniquiz PWA",
      toolbarSubtitle: ""
    }
  },
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QSideLink,
    QItemSide,
    QItemMain
  }
}
</script>

<style>
</style>

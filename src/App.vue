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
          {{ toolbar.title }}
          <span slot="subtitle" v-if="toolbar.subtitle">{{ toolbar.subtitle }}</span>
        </q-toolbar-title>
        <q-btn
          v-if="toolbar.btn.show"
          :icon-right="toolbar.btn.icon"
          :color="toolbar.btn.color"
          flat
        >
          {{ toolbar.btn.text }}
        </q-btn>
      </q-toolbar>

      <!-- Sidebar -->
      <div slot="left">
        <q-list no-border link inset-separator>
          <q-list-header>Essential Links</q-list-header>
          <q-side-link item to="/quiz">
            <q-item-side icon="school" />
            <q-item-main label="Start a new quiz" />
          </q-side-link>
          <q-side-link item to="/contribute">
            <q-item-side icon="record_voice_over" />
            <q-item-main label="Contribute" sublabel="Add quiz and questions to db" />
          </q-side-link>
        </q-list>
      </div>
      <router-view></router-view>
      <q-ajax-bar :delay="20" :speed="100" size="6px" color="red" position="top"/>
    </q-layout>
  </div>
</template>

<script>
/*
 * Root component
 */
import { QLayout, QToolbar, QToolbarTitle, QBtn, QIcon, QList, QListHeader, QSideLink, QItemSide, QItemMain, QAjaxBar } from "quasar"

export default {
  data () {
    return {
      // TODO: Make a custom event to change header config
      toolbar: {
        title: "Uniquiz PWA",
        subtitle: "",
        btn: {
          show: false,
          text: "submit answers",
          icon: "send"
        }
      }

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
    QItemMain,
    QAjaxBar
  },
  methods: {
    changeToolbarProps (title = null, subtitle = null, btnText = null, btnShow = null, btnIcon = null) {
      if (title !== null) {
        this.toolbar.title = title
      }
      if (subtitle !== null) {
        this.toolbar.subtitle = subtitle
      }
      if (btnText !== null) {
        this.toolbar.btnText = btnText
      }
      if (btnIcon !== null) {
        this.toolbar.btnIcon = btnIcon
      }
      if (btnShow !== null) {
        this.toolbar.btnShow = btnShow
      }
    }
  },
  created () {
    this.$q.events.$on("changeToolbarProps", this.changeToolbarProps)
  },
  beforeDestroy () {
    this.$q.events.$off("changeToolbarProps")
  }
}
</script>

<style>
/* GLOBAL STYLE */
.q-tab-pane {
  border: 0;
  box-shadow: inset 0 5px 5px -5px rgba(0,0,0,0.4);
}
</style>

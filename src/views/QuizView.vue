<template>
  <q-layout ref="layout" view="hhh lpr lFr">
    <q-toolbar slot="header">
      <q-toolbar-title>
        Uniquiz PWA
      </q-toolbar-title>
    </q-toolbar>
  </q-layout>
</template>

<script>
import { QLayout, QToolbar, QToolbarTitle } from "quasar"

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle
  }
}
</script>

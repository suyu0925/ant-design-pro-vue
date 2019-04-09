<template>
  <a-layout>
    <side-menu
      mode="inline"
      :menus="menus"
      :theme="navTheme"
      :collapsed="collapsed"
      :collapsible="true"
    ></side-menu>

    <a-layout
      :class="['side-menu', `content-width-fixed`]"
      :style="{ paddingLeft: 0, minHeight: '100vh' }"
    >
      <!-- layout header -->
      <a-layout-header :style="{ padding: '0', color: 'white' }">layout header</a-layout-header>

      <!-- layout content -->
      <a-layout-content :style="{ height: '100%', margin: '24px 24px 0', paddingTop: '0' }">
        <router-view/>
      </a-layout-content>

      <!-- layout footer -->
      <a-layout-footer>layout footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/menu/SideMenu'

export default {
  name: 'BasicLayout',
  components: {
    SideMenu
  },
  data() {
    return {
      collapsed: false,
      menus: []
    }
  }
}
</script>

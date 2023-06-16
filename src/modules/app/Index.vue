<template>
  <div>

    <div class="min-h-screen w-full bg-white">

      <!--FOR MOBILE-->
      <div class="lg:hidden min-h-screen p-4">
        <the-header/>
        <app v-if="$route.name === 'App'"/>
        <router-view/>
      </div>
      <!--/FOR MOBILE-->

      <!--FOR WEB-->
      <div class="hidden lg:block">
        Bu uygulama web de çalışmaz.
      </div>
      <!--/FOR WEB-->

    </div>

  </div>
</template>

<script>
import App from '@/modules/app/application/views/App.vue';
import TheHeader from '@/components/base/TheHeader.vue';

export default {
  name: 'AppIndex',
  components: {
    App,
    TheHeader,
  },

  data() {
    return {};
  },

  methods: {},
};
</script>

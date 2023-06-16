<template>
  <div>
    <div class="navbar  rounded-xl">
      <div class="flex-1" v-if="$route.name !== 'App'" @click="$router.go(-1)">
        <a class="btn btn-ghost text-base-100 normal-case text-xl"><i class="fa-solid fa-chevron-left"></i></a>
      </div>
      <div class="flex-1" v-else></div>
      <div class="flex-none">
        <div class="flex-1">
          <div class="btn btn-ghost normal-case text-xl">
<!--            <img width="56" height="56"-->
<!--                 src="/src/assets/images/icon/book.png"/>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

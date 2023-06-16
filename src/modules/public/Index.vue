<template>
  <div class="min-h-screen bg-gray-200 flex justify-center items-center">

    <!--FOR MOBILE-->
    <div class="lg:hidden">
      <div class="w-full flex flex-col justify-center items-center">
        <div class="text-4xl font-extrabold text-center text-gray-800">
          Merhaba
        </div>

        <div class="flex flex-col justify-center items-center space-y-3 w-full py-4">
          <div class="relative form-control w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <i class="fa-solid fa-at text-xl"></i>
            </div>
            <input type="text" id="input-1"
                   class="block input input-bordered w-full max-w-xs pl-10 input-lg"
                   autocomplete="false"
                   placeholder="Email adresiniz">
          </div>
          <div class="relative form-control w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <i class="fa-solid fa-key text-xl"></i>
            </div>
            <input type="text" id="input-2"
                   class="block input input-bordered w-full max-w-xs pl-10 input-lg"
                   autocomplete="false"
                   placeholder="Şifreniz">
          </div>
        </div>

        <router-link :to="{name: 'App'}">
          <button class="btn btn-success btn-lg rounded-full px-10">Giriş yap</button>
        </router-link>

        <a class="link mt-10">hesabın yok mu?</a>
      </div>
    </div>
    <!--/FOR MOBILE-->

    <!--FOR WEB-->
    <div class="hidden lg:block">
      Bu uygulama web de çalışmaz.
    </div>
    <!--/FOR WEB-->

  </div>
</template>

<script>

export default {
  name: 'IndexPublicPage',
};
</script>

<template>
  <div>
    <div>

      <div class="py-10 pt-20 px-3 text-2xl font-extrabold text-base-100">
        Tekrar hoş geldin!
      </div>

      <div class="flex flex-wrap justify-around items-center space-x-2 text-base-100">
        <router-link :to="{name: 'Portfolio'}">
          <div class="flex flex-col justify-center items-center my-4">
            <div class="border border-gray-700 rounded-full p-5">
              <img width="64" height="64" src="/src/assets/images/icon/briefcase.png"/>
            </div>
            <span class="label-text text-base-100">Portföyüm</span>
          </div>
        </router-link>
        <router-link :to="{name: 'Customers'}">
          <div class="flex flex-col justify-center items-center my-8">
            <div class="border border-gray-700 rounded-full p-5">
              <img width="64" height="64" src="/src/assets/images/icon/bussiness-man.png"/>
            </div>
            <span class="label-text text-base-100">Müşteriler</span>
          </div>
        </router-link>
        <router-link :to="{name: 'Notes'}">
          <div class="flex flex-col justify-center items-center my-8">
            <div class="border border-gray-700 rounded-full p-5">
              <img width="64" height="64" src="/src/assets/images/icon/my_notes.png"/>
            </div>
            <span class="label-text text-base-100">Notlarım</span>
          </div>
        </router-link>
        <router-link :to="{name: 'Documents'}">
          <div class="flex flex-col justify-center items-center my-8">
            <div class="border border-gray-700 rounded-full p-5">
              <img width="64" height="64" src="/src/assets/images/icon/folders.png"/>
            </div>
            <span class="label-text text-base-100">Belgelerim <br> <span class="text-xs">(Sözleşmeler)</span></span>
          </div>
        </router-link>
        <router-link :to="{name: 'About'}">
          <div class="flex flex-col justify-center items-center my-8">
            <div class="border border-gray-700 rounded-full p-5">
              <img width="64" height="64" src="/src/assets/images/icon/information.png"/>
            </div>
            <span class="label-text text-base-100">Hakkımızda</span>
          </div>
        </router-link>
        <router-link :to="{name: 'Public'}">
          <div class="flex flex-col justify-center items-center my-8">
            <div class="border border-gray-700 rounded-full p-5">
              <img width="64" height="64" src="/src/assets/images/icon/switch.png"/>
            </div>
            <span class="label-text text-base-100">Çıkış yap</span>
          </div>
        </router-link>

      </div>

      <section v-if="false" class="p-5">
        <div class="mb-5 flex items-center justify-between">
          <h4 class="font-medium text-slate-500">Notifications</h4>
          <div class="rounded-md bg-pink-400/70 px-2 font-semibold text-gray-900">3</div>
        </div>
        <div class="space-y-2">
          <div class="flex space-x-4 rounded-xl bg-white p-3 shadow-sm">
            <img class="aspect-square w-16 rounded-lg bg-center object-cover"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeOqFwpuGs8POfrytccjgsihqbnERH0hOXg&usqp=CAU"
                 alt=""/>
            <div>
              <h4 class="font-semibold text-gray-600">Don't miss out</h4>
              <p class="text-sm text-slate-400">Sometimes it really is ambiguous though</p>
            </div>
            <div>
              <button type="button" class="rounded bg-slate-50 px-2 text-xl text-slate-500 hover:bg-slate-100">&times;
              </button>
            </div>
          </div>
          <div class="flex space-x-4 rounded-xl bg-white p-3 shadow-sm">
            <img class="aspect-square w-16 rounded-lg bg-center object-cover"
                 src="https://iconscout.com/iconscout_logo-1024x1024.png" alt=""/>
            <div>
              <h4 class="font-semibold text-gray-600">Did you know?</h4>
              <p class="text-sm text-slate-400">An unlimited domain license has no domain restrictions</p>
            </div>
            <div>
              <button type="button" class="rounded bg-slate-50 px-2 text-xl text-slate-500 hover:bg-slate-100">&times;
              </button>
            </div>
          </div>
        </div>
      </section>

      <div v-if="false" class="fixed bottom-0 w-full rounded-t-xl bg-white px-5 py-2 shadow-sm shadow-gray-300">
        <the-side-bar/>
      </div>
    </div>
  </div>
</template>

<script>
import TheSideBar from '@/components/base/TheSideBar.vue';

export default {
  name: 'App',
  components: {TheSideBar},
  data() {
    return {};
  },
};
</script>

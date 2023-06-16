<template>
  <div>
    <div class="flex justify-between items-center pb-5 pt-20 w-full">
      <div class="px-3 text-2xl font-extrabold text-gray-800">
        Hakkımızda 🏠
      </div>
      <div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn m-1">
            <i class="fa-solid fa-bars-staggered text-2xl"></i>
          </label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li @click="toggleEditButton">
              <a v-if="isEdited">Düzenlemeyi Kapat</a>
              <a v-else>Düzenle</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center items-start w-full">

      <div class="text-gray-600 w-full">
        <span v-if="isEdited">
           <textarea v-model="description" rows="3"
                     class="textarea w-full bg-gray-100 text-lg text-gray-800"></textarea>
        </span>
        <span v-else>
           {{ description }}
        </span>
      </div>

      <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400 w-full">
        <i class="fa-solid fa-location-dot text-3xl"></i>
        <div class="ml-5 text-md font-semibold w-full">
          <span v-if="isEdited">
            <input v-model="address" type="text" placeholder=""
                   class="input w-full bg-gray-100 text-gray-800"/>
          </span>
          <span v-else>
             {{ address }}
          </span>
        </div>
      </div>

      <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400 w-full">
        <i class="fa-solid fa-phone text-3xl"></i>
        <div class="ml-4 text-md font-semibold w-full">
           <span v-if="isEdited" class="w-full">
            <input v-model="phone" type="number" placeholder=""
                   class="input w-full bg-gray-100 text-gray-800"/>
          </span>
          <span v-else>
            {{ phone }}
          </span>
        </div>
      </div>

      <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400 w-full">
        <i class="fa-solid fa-envelope text-3xl"></i>
        <div class="ml-4 text-md tracking-wide font-semibold w-full">
           <span v-if="isEdited">
            <input v-model="mail" type="email" placeholder="" class="input w-full bg-gray-100 text-gray-800"/>
          </span>
          <span v-else>
            {{ mail }}
          </span>
        </div>
      </div>
    </div>
    <div class="flex justify-center py-10">
      <button class="btn btn-wide" @click="saveAbout" v-if="isEdited">Kaydet</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      description: '',
      address: '',
      phone: '',
      mail: '',
      isEdited: false,
    };
  },

  methods: {
    toggleEditButton() {
      this.isEdited = !this.isEdited;
    },
    saveAbout() {
      localStorage.setItem('description', this.description);
      localStorage.setItem('address', this.address);
      localStorage.setItem('phone', this.phone);
      localStorage.setItem('mail', this.mail);
      this.isEdited = false;
    },
  },

  created() {
    this.description = 'Kendinizi tanıtın';
    this.address = 'Adres girin';
    this.phone = '9999999999';
    this.mail = 'E-mail adresiniz';

    if (localStorage.getItem('description')) {
      this.description = localStorage.getItem('description');
    }
    if (localStorage.getItem('address')) {
      this.address = localStorage.getItem('address');
    }
    if (localStorage.getItem('phone')) {
      this.phone = localStorage.getItem('phone');
    }
    if (localStorage.getItem('mail')) {
      this.mail = localStorage.getItem('mail');
    }

  },

};
</script>

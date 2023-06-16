<template>
  <div>
    <div class="flex justify-between items-center pb-5 pt-20 w-full">
      <div class="flex flex-col px-3 text-2xl font-extrabold text-gray-800">
        <span v-if="type === 1" @click="getCustomers">Müşteriler</span>
        <span v-else-if="type === 2">Müşteri oluştur</span>
      </div>

      <div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn m-1">
            <i class="fa-solid fa-bars-staggered text-2xl"></i>
          </label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li v-if="type === 1" @click="toggleTypeButton(2)">
              <a>Müşteri oluştur</a>
            </li>
            <li v-else-if="type === 2" @click="toggleTypeButton(1)">
              <a>Müşterileri listele</a>
            </li>
            <li v-if="customers" @click="toggleEditButton">
              <a v-if="isEdit">Düzenlemeyi kapat</a>
              <a v-else>Düzenle</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="type === 1">
      <div class="flex flex-col w-full text-center overflow-auto h-[400px]">
        <div class="mb-5 rounded-xl bg-gray-200 py-4 px-8" v-if="!!customers?.length" v-for="(custo, index) in customers"
             :key="index">
          <div class="flex items-center justify-between">
            <div class="flex flex-col justify-start items-start truncate pr-3 text-base font-medium text-[#07074D]">
              <span>İsim: {{ custo.name }}</span>
              <span>numara: +{{ custo.phone }}</span>
              <span>Konu: {{ custo.subject }}</span>
              <span>Bütçe: {{ custo.budget }}TL</span>
              <br>
              <span>*NOT: {{ custo.note }}</span>
            </div>
            <button v-if="isEdit" @click="removeCustomer(custo)">
              <i class="fa-regular fa-circle-xmark text-red-500"></i>
            </button>
          </div>
        </div>
        <div v-else>Hiç müşteri bilgisi girilmedi</div>
      </div>
    </div>
    <div v-else-if="type === 2">

      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Müşteri ismi</span>
        </label>
        <input v-model="model.name" type="text" placeholder="isim girin"
               class="input input-bordered bg-gray-100 text-gray-800 w-full"/>
      </div>
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Müşteri telefon numarası</span>
        </label>
        <input v-model="model.phone" type="text" placeholder="numara"
               class="input input-bordered bg-gray-100 text-gray-800 w-full"/>
      </div>
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Konu</span>
        </label>
        <input v-model="model.subject" type="text" placeholder="Ev arıyor"
               class="input input-bordered bg-gray-100 text-gray-800 w-full"/>
      </div>
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Müşteri bütçe - Malik değeri (TL)</span>
        </label>
        <input v-model="model.budget" type="number" placeholder="15000"
               class="input input-bordered bg-gray-100 text-gray-800 w-full"/>
      </div>

      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Not</span>
        </label>
        <textarea v-model="model.note" placeholder="Bahçeli olsun."
                  class="textarea bg-gray-100 text-gray-800 w-full"/>
      </div>

      <div class="flex justify-center py-10">
        <button class="btn btn-wide" @click="createCustomer">Oluştur</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Customers',
  data() {
    return {
      isEdit: false,
      type: 1,
      model: {
        name: '',
        phone: '',
        subject: '',
        budget: null,
        note: '',
      },
      customers: null,
      // customers: [
      // {
      //   name: 'Norma Crawford',
      //   phone: '9054678',
      //   subject: '3+1 ev arıyor',
      //   budget: 15000,
      //   note: 'hızlı olsun'
      // },
      // {
      //   name: 'Tammy Gonzalez',
      //   phone: '329054678',
      //   subject: 'kiralık evi var 2+1',
      //   budget: 20000,
      //   note: ''
      // },
      // {
      //   name: 'Victor Rodriguez',
      //   phone: '191234678',
      //   subject: '1+1 ev arıyor',
      //   budget: null,
      //   note: ''
      // },
      // {
      //   name: 'Danielle Moss',
      //   phone: '',
      //   subject: 'bahçeli lüks',
      //   budget: 924565000,
      //   note: 'dubleks 2 mutfalı'
      // },
      // ],
    };
  },

  methods: {
    toggleTypeButton(value) {
      this.type = value;
    },
    toggleEditButton() {
      this.isEdit = !this.isEdit;
    },
    createCustomer() {
      if (this.customers !== null) {
        this.customers.push(this.model);
      } else {
        this.customers = [
          this.model
        ];
      }
      localStorage.setItem("customers", JSON.stringify(this.customers));
      this.model = {
        name: '',
        phone: '',
        subject: '',
        budget: null,
        note: '',
      };
    },
    saveCustomer() {
      localStorage.setItem("customers", JSON.stringify(this.customers));
    },
    getCustomers() {
      this.customers = JSON.parse(localStorage.getItem("customers"));
    },
    removeCustomer(data) {
      this.customers = this.customers.filter(a => a !== data);
      this.saveCustomer();
    },
  },

  created() {
    this.getCustomers();
  },
};
</script>

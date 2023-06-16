<template>
  <div>
    <div class="flex justify-between items-center pb-5 pt-20">
      <div class="px-3 text-2xl font-extrabold text-gray-800">
        Portföyüm
      </div>
      <div>
        <div class="dropdown dropdown-end m-1" v-if="listType">
          <label tabindex="0" class="btn">
            <i class="fa-solid fa-bars-staggered text-2xl"></i>
          </label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a v-if="type === 1" @click="toggleTypeButton(2)">Ekle</a>
              <a v-else-if="type === 2" @click="toggleListTypeButton(null); toggleTypeButton(1)">Listele</a>
            </li>
            <li v-if="listType">
              <a @click="toggleListTypeButton(null)">Başa dön</a>
            </li>
            <li v-if="listType && type === 1">
              <a @click="toggleEditButton">
                <span v-if="isEdit">Düzenlemeyi kapat</span>
                <span v-else>Düzenlemeyi aç</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="listType === null" class="flex flex-col justify-center items-center w-full py-20">
      <button @click="toggleListTypeButton(1)" class="btn btn-active btn-outline btn-info btn-wide btn-lg">Kiralık
      </button>
      <button @click="toggleListTypeButton(2)" class="btn btn-active btn-wide btn-lg my-3">Satılık</button>
    </div>

    <div v-else>
      <div v-if="type === 1">
        <div class="flex flex-col w-full text-center">
          <div v-if="!!portfolio?.length">
            <div class="mb-5 rounded-xl bg-gray-200 p-2 w-full"
                 v-if="!!filteredPortfolio?.length"
                 v-for="(port, index) in filteredPortfolio"
                 :key="index">
              <div class="font-medium text-[#07074D] w-full">
                <div class="flex justify-between text-xs">
                  <span>{{ port.id }}</span>
                  <div class="badge badge-primary uppercase">{{ port.type }}</div>
                </div>
                <div class="flex justify-center p-3">
                  <img width="400" height="400" :src="port.imageData" alt="İlan görsel" v-if="port.imageData"/>
                  <img width="100" height="100" src="/src/assets/images/icon/no-photo.png" alt="görsel yok" v-else/>
                </div>
                <div class="flex flex-col justify-start items-start w-full">
                <span class="bg-gray-600 p-2 rounded mt-1 border-b border-gray-900 text-white w-full text-left">İlan Adı: {{
                    port.name
                  }}</span>
                  <span class="bg-gray-600 p-2 rounded mt-1 border-b border-gray-900 text-white w-full text-left">İlan Tarihi: {{
                      port.date
                    }}</span>
                  <span class="bg-gray-600 p-2 rounded mt-1 border-b border-gray-900 text-white w-full text-left">Brüt m²: {{
                      port.gross
                    }}</span>
                  <span class="bg-gray-600 p-2 rounded mt-1 border-b border-gray-900 text-white w-full text-left">Net m²: {{
                      port.net
                    }}</span>
                  <span class="bg-gray-600 p-2 rounded mt-1 border-b border-gray-900 text-white w-full text-left">Oda Sayısı: {{
                      port.room_number
                    }}</span>
                  <span class="bg-gray-600 p-2 rounded mt-1 border-b border-gray-900 text-white w-full text-left">Bina Yaşı: {{
                      port.build_age
                    }}</span>
                  <span class="bg-gray-600 p-2 rounded mt-1 border-b border-gray-900 text-white w-full text-left">Bulunduğu Kat: {{
                      port.floor_location
                    }}</span>
                  <span class="bg-gray-600 p-2 rounded mt-1 border-b border-gray-900 text-white w-full text-left">Kat Sayısı: {{
                      port.number_of_floors
                    }}</span>
                  <span class="bg-gray-600 p-2 rounded mt-1 border-b border-gray-900 text-white w-full text-left">Isıtma: {{
                      port.heating
                    }}</span>
                  <span class="bg-gray-600 p-2 rounded mt-1 border-b border-gray-900 text-white w-full text-left">Eşyalı mı?: {{
                      port.furnished ? 'Evet' : 'Hayır'
                    }}</span>
                  <span class="bg-gray-600 p-2 rounded mt-1 border-b border-gray-900 text-white w-full text-left">Balkonlu mu?: {{
                      port.balcony ? 'Evet' : 'Hayır'
                    }}</span>
                  <span class="bg-gray-600 p-2 rounded mt-1 border-b border-gray-900 text-white w-full text-left">Sitede mi?: {{
                      port.is_it_on_site ? 'Evet' : 'Hayır'
                    }}</span>
                  <span
                      class="bg-lime-600 p-2 rounded mt-1 border-b border-lime-900 text-white w-full text-left uppercase">Net Fiyatı: <span
                      class="text-lg">{{ port.price }} TL (₺)</span></span>
                </div>
                <div v-if="isEdit" class="p-5">
                  <button class="btn btn-error mx-1" @click="removePortfolio(port)">Kaldır</button>
                  <button class="btn btn-info mx-1" @click="removePortfolio(port)">Düzenle</button>
                </div>
              </div>
            </div>
            <div v-else>{{ listType === 1 ? 'Kiralık' : 'Satılık' }} portföy eklenmemiş.</div>
          </div>
          <div v-else>Hiç portföy bilgisi yok</div>
        </div>
      </div>
      <div v-else-if="type === 2">

        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">İlan No : {{ model.id }}</span>
          </label>
        </div>

        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">İlan Türü</span>
          </label>
          <select v-model="model.type" class="select bg-gray-100 text-gray-800 w-full">
            <option value="Kiralık">Kiralık</option>
            <option value="Satılık">Satılık</option>
          </select>
        </div>


        <div class="container border rounded-xl p-3 my-4">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Görsel (maks 1 tane)</span>
            </label>
            <input type="file" id="bannerImg"
                   @change="handleFileUpload" accept="image/*"
                   class="file-input file-input-bordered file-input-primary bg-gray-100 text-gray-800 w-full"/>
          </div>

          <div class="flex justify-center items-center w-full py-4">
            <img width="100" height="100" class="border" :src="model.imageData" alt="Yüklenen Resim"
                 v-if="model.imageData"/>
            <img width="100" height="100" src="/src/assets/images/icon/no-photo.png" alt="görsel yok" v-else/>
          </div>
        </div>


        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">İlan Adı</span>
          </label>
          <input v-model="model.name" type="text" placeholder="İlan adı gir"
                 class="input input-bordered bg-gray-100 text-gray-800 w-full"/>
        </div>

        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">İlan Tarihi</span>
          </label>
          <input v-model="model.date" type="date" placeholder="Tarih gir"
                 class="input input-bordered bg-gray-100 text-gray-800 w-full"/>
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">m² (Brüt)</span>
          </label>
          <input v-model="model.gross" type="number" placeholder="örn: 60"
                 class="input input-bordered bg-gray-100 text-gray-800 w-full"/>
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">m² (Net)</span>
          </label>
          <input v-model="model.net" type="number" placeholder="örn: 50"
                 class="input input-bordered bg-gray-100 text-gray-800 w-full"/>
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Oda Sayısı</span>
          </label>
          <input v-model="model.room_number" type="number" placeholder="Örn: 3"
                 class="input input-bordered bg-gray-100 text-gray-800 w-full"/>
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Bina yaşı</span>
          </label>
          <input v-model="model.build_age" type="number" placeholder="örn: 8"
                 class="input input-bordered bg-gray-100 text-gray-800 w-full"/>
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Bulunduğu kat</span>
          </label>
          <input v-model="model.floor_location" type="number" placeholder="örn: 2"
                 class="input input-bordered bg-gray-100 text-gray-800 w-full"/>
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Kat sayısı</span>
          </label>
          <input v-model="model.number_of_floors" type="number" placeholder="örn: 5"
                 class="input input-bordered bg-gray-100 text-gray-800 w-full"/>
        </div>

        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Isıtma türü</span>
          </label>
          <select v-model="model.heating" class="select bg-gray-100 text-gray-800 w-full">
            <option value="Kombi(doğalgaz)">Kombi(doğalgaz)</option>
            <option value="Sobalı">Sobalı</option>
            <option value="Isıtma yok">Isıtma yok</option>
          </select>
        </div>

        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Isıtma türü </span>
          </label>
          <div class="form-control">
            <label class="label cursor-pointer flex justify-start items-center">
              <input v-model="model.furnished" :value="true" type="radio" name="furnished"
                     class="radio"/>
              <span class="label-text pl-2">Eşyalı</span>
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer flex justify-start items-center">
              <input v-model="model.furnished" :value="false" type="radio" name="furnished" class="radio" checked/>
              <span class="label-text pl-2">Eşyasız</span>
            </label>
          </div>
        </div>

        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Balkon durumu</span>
          </label>
          <div class="form-control">
            <label class="label cursor-pointer flex justify-start items-center">
              <input v-model="model.balcony" :value="true" type="radio" name="balcony"
                     class="radio"/>
              <span class="label-text pl-2">Var</span>
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer flex justify-start items-center">
              <input v-model="model.balcony" :value="false" type="radio" name="balcony" class="radio" checked/>
              <span class="label-text pl-2">Yok</span>
            </label>
          </div>
        </div>

        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Sitede mi?</span>
          </label>
          <div class="form-control">
            <label class="label cursor-pointer flex justify-start items-center">
              <input v-model="model.is_it_on_site" :value="true" type="radio" name="is_it_on_site"
                     class="radio"/>
              <span class="label-text pl-2">Site içerisinde</span>
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer flex justify-start items-center">
              <input v-model="model.is_it_on_site" :value="false" type="radio" name="is_it_on_site" class="radio"
                     checked/>
              <span class="label-text pl-2">Sitede değil</span>
            </label>
          </div>
        </div>

        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Net Fiyatı (TL)</span>
          </label>
          <input v-model="model.price" type="number" placeholder="örn: 20000"
                 class="input input-bordered bg-gray-100 text-gray-800 w-full"/>
        </div>


        <div class="flex justify-center py-10">
          <button class="btn btn-wide" :disabled="!model.price" @click="createItem">Oluştur</button>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      listType: null, //1= kiralık, 2= satılık
      type: 1, //1 = listele, 2 2= ekle
      portfolio: [],
      isEdit: false,
      model: {
        id: Math.random().toString().slice(2),
        type: 'Kiralık',
        file: null,
        imageData: null,
        name: 'dsdsa',
        date: '2023-05-20',
        gross: 0, //brüt m2
        net: 0, //net m2
        room_number: 0,
        build_age: 0,
        floor_location: 0, //bulundugu kat
        number_of_floors: null, //kat sayısı
        heating: 'Kombi(doğalgaz)', //ısıtmalı kombi/doğalgaz/soba
        furnished: false, //eşyalı mı
        balcony: false, //balkonlu mu
        is_it_on_site: false, //sitede mi
        price: null,
      },
    };
  },

  computed: {
    filteredPortfolio() {
      if (this.portfolio) {
        if (this.listType === 1) {
          return this.portfolio.filter(a => a.type === 'Kiralık');
        } else if (this.listType === 2) {
          return this.portfolio.filter(a => a.type === 'Satılık');
        }
      }
    }
  },

  methods: {
    toggleEditButton() {
      this.isEdit = !this.isEdit;
    },
    toggleListTypeButton(value) {
      this.listType = value;
    },

    toggleTypeButton(value) {
      this.type = value;
    },

    savePortfolio() {
      localStorage.setItem("portfolio", JSON.stringify(this.portfolio));
    },

    removePortfolio(data) {
      this.portfolio = this.portfolio.filter(a => a !== data);
      this.savePortfolio();
    },

    getPortfolio() {
      this.portfolio = JSON.parse(localStorage.getItem("portfolio"));
    },

    handleFileUpload(event) {
      this.model.file = event.target.files[0];
      this.showImage();
    },

    showImage() {
      const reader = new FileReader();
      reader.onload = () => {
        this.model.imageData = reader.result;
      };
      reader.readAsDataURL(this.model.file);
    },

    createItem() {
      if (this.portfolio !== null) {
        this.portfolio.push(this.model);
      } else {
        this.portfolio = [
          this.model
        ];
      }
      localStorage.setItem("portfolio", JSON.stringify(this.portfolio));
      this.model = {
        id: Math.random().toString().slice(2),
        type: 'Kiralık',
        file: null,
        imageData: null,
        name: 'dsdsa',
        date: '2023-05-20',
        gross: 0,
        net: 0,
        room_number: 0,
        build_age: 0,
        floor_location: 0,
        number_of_floors: null,
        heating: 'Kombi(doğalgaz)',
        furnished: false,
        balcony: false,
        is_it_on_site: false,
        price: null,
      };
    },
  },

  created() {
    this.getPortfolio();
  },
};
</script>

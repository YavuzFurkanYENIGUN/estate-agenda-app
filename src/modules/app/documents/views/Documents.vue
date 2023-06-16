<template>
  <div>
    <div class="flex justify-between items-center pb-5 pt-20 w-full">
      <div class="px-3 text-2xl font-extrabold text-gray-800">
        Belgeler
      </div>

      <div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn m-1">
            <i class="fa-solid fa-bars-staggered text-2xl"></i>
          </label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li @change="uploadFile">
              <input type="file" name="file" id="file" class="sr-only"/>
              <label
                  for="file"
              >
                <a>Belge yükle</a>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full overflow-auto h-[250px]">
      <div v-if="documents !== null" class="mb-5 rounded-xl bg-gray-200 py-4 px-8" v-for="(file, index) in documents"
           :key="index">
        <div class="flex items-center justify-between">
            <span class="truncate pr-3 text-base font-medium text-[#07074D]">
             {{ file }}
            </span>
          <button class="text-red-800" @click="removeDocument(file)">
            <i class="fa-regular fa-circle-xmark"></i>
          </button>
        </div>
      </div>
      <div v-else class="text-center">Yüklenmiş hiç belge yok</div>
    </div>

    <div class="flex justify-center py-10">
      <button class="btn btn-wide" v-if="documents !== null" @click="saveDocuments">Kaydet</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Documents',
  data() {
    return {
      documents: null,
      file: null,
    };
  },

  methods: {
    uploadFile(event) {
      const fileData = event.target.files[0];
      const fileName = fileData.name;

      if (this.documents !== null) {
        this.documents.push(fileName);
      } else {
        this.documents = [
          fileName
        ];
      }

    },

    saveDocuments() {
      localStorage.setItem("documents", JSON.stringify(this.documents));
    },

    removeDocument(data) {
      this.documents = this.documents.filter(a => a !== data);
      this.saveDocuments();
    },
  },

  created() {
    this.documents = JSON.parse(localStorage.getItem("documents"));
  },
};
</script>

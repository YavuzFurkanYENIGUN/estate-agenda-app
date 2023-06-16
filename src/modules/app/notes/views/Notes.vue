<template>
  <div>

    <div class="flex justify-between items-center pb-5 pt-20 px-3">
      <div class="text-2xl font-extrabold text-base-100">
        Notlarım
      </div>
      <div>
        <button class="btn btn-sm" @click="saveNote()">Kaydet</button>
      </div>
    </div>

    <textarea v-model="note" rows="16" class="textarea w-full bg-gray-100 text-lg text-gray-800"></textarea>
  </div>
</template>

<script>
export default {
  name: 'Notes',

  data() {
    return {
      note: '',
    };
  },

  methods: {
    saveNote() {
      localStorage.setItem('my_note', this.note);
    },
  },

  created() {
   this.note = localStorage.getItem('my_note');
  },
};
</script>

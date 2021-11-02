<template>
  <div>
    <v-col
      cols="12">
      <h1 class="display-1 font-weight-bold mb-3">
        Daftar Calon Siswa Baru
      </h1>
    </v-col>
    <v-card>
      <v-col
      cols="12">
          <div>
            <label> Nama :</label>
            <v-text-field type="text" placeholder="Masukkan nama" required></v-text-field>
          </div>
          <div>
            <label>Email :</label>
            <v-text-field type="email" placeholder="Masukkan Email" required></v-text-field>
          </div>
          <div>
            <label >Jenis Kelamin:</label>
            <v-divider></v-divider>
            <v-select 
              clearable
              placeholder="Pria/Wanita"
              :items="kelamin">
            </v-select>
          </div>
          <div>
            <label>Kelengkapan Data Calon Siswa Baru:</label>
            <v-divider class="mb-4"></v-divider>
            <v-file-input
              label="Masukkan File"
              outlined
              dense
              clearable
            ></v-file-input>
          </div>
          <v-btn class="mt-4" color="primary" dark>Submit</v-btn>
      </v-col>
    </v-card>
  </div>
</template>
<script>
export default {
    data: () => ({
      kelamin: ['Pria', 'Wanita'],
    }),
}
</script>

<style src="./Kontak.scss" lang="scss" scoped/>

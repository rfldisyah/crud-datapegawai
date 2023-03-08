import React, { useState } from "react";
import {  Button, FormControl, FormGroup, MenuItem, styled, TextField, Typography } from "@mui/material";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";




const Container = styled(FormGroup)`
    width: 20%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 5px;
    }
`


const initialValues = {
  nama: '',
  alamat: '',
  provinsi: '',
  kota: '',
  kecamatan: ''

}

const AddUser = () => {

    const [user, setUser] = useState(initialValues)
    const navigate = useNavigate();

    const onValueChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value })
      console.log(user)
    }

    const addUserDetails = async () => {
      await addUser(user);
      alert("Data Berhasil Disimpan")
      navigate('/all');
    }

  return (
    <Container>
        <Typography variant="h4"> Add User</Typography>
      <FormControl>
        <TextField onChange={(e) => onValueChange(e)} name='nama' id="outlined-basic" label="Nama" variant="outlined" />
      </FormControl>
      <FormControl>
        <TextField  onChange={(e) => onValueChange(e)} name='alamat' id="outlined-basic" label="Alamat" variant="outlined" />
      </FormControl>
      <FormControl>
      <TextField
         onChange={(e) => onValueChange(e)}
         name='provinsi'
          id="outlined-select-currency"
          select
          label="Provinsi"
          defaultValue=""
        >
          {provinsi100indonesia.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
      <FormControl>
      <TextField
          onChange={(e) => onValueChange(e)}
          name='kota'
          id="outlined-select-currency"
          select
          label="Kota"
          defaultValue=""
        >
          {kota.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
      <FormControl>
      <TextField
         onChange={(e) => onValueChange(e)}
         name='kecamatan'
          id="outlined-select-currency"
          select
          label="Kecamatan"
          defaultValue=""
        >
          {kecamatan.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
      <FormControl>
        <Button onClick={() => addUserDetails()} variant="contained"  style={{ borderRadius: 15, width: 400 }}>Add User</Button>
      </FormControl>
    </Container>
  );
};


const provinsi100indonesia = [
  { value: "Aceh" },
  { value: "Sumatera Utara" },
  { value: "Sumatera Selatan" },
  { value: "Sumatera Barat" },
  { value: "Bengkulu" },
  { value: "Riau" },
  { value: "Kepulauan Riau" },
  { value: "Lampung" },
  { value: "Jambi" },
  { value: "Bangka Belitung" },
  { value: "Kalimantan Barat" },
  { value: "Kalimantan Timur" },
  { value: "Kalimantan Selatan" },
  { value: "Kalimantan Tengah" },
  { value: "Kalimantan Utara" },
  { value: "Banten" },
  { value: "DKI Jakarta" },
  { value: "Jawa Barat" },
  { value: "Jawa Tengah" },
  { value: "Daerah Istimewa Yogyakarta" },
  { value: "Jawa Timur" },
  { value: "Bali " },
  { value: "Nusa Tenggara Barat " },
  { value: "Nusa Tenggara Timur" },
  { value: "Gorontalo" },
  { value: "Sulawesi Barat" },
  { value: "Sulawesi Tengah" },
  { value: "Sulawesi Utara" },
  { value: "Sulawesi Tenggara " },
  { value: "Sulawesi Selatan" },
  { value: "Maluku Utara" },
  { value: "Maluku " },
  { value: "Papua Barat" },
  { value: "Papua " },
  { value: "Papua Tengah" },
  { value: "Papua Pegunungan" },
  { value: "Papua Selatan" },
  { value: "Papua Barat Daya" },
];

const kota = [
    {
      value: 'Kota Pekanbaru'
    },
    {
      value: 'Kabupaten Bengkalis'
    },
    {
      value: 'Kabupaten Indragiri Hilir'
    },
    {
      value: 'Kabupaten Indragiri Hulu'
    },
    {
      value: 'Kabupaten Kampar'
    },
    {
      value: 'Kabupaten Kepulauan Meranti'
    },
    {
      value: 'Kabupaten Kuantan Singingi'
    },
    {
      value: 'Kabupaten Pelalawan'
    },
    {
      value: 'Kabupaten Rokan Hilir'
    },
    {
      value: 'Kabupaten Rokan Hulu'
    },
    {
      value: 'Kabupaten Siak'
    },
    {
      value: 'Kota Dumai'
    }
]




const kecamatan = [
  {
    value: 'Bengkalis'
  },
  {
    value: 'Bantan'
  },
  {
    value: 'Bukit Batu'
  },
  {
    value: 'Mandau'
  },
  {
    value: 'Rupat'
  },
  {
    value: 'Rupat Utara'
  },
  {
    value: 'Siak Kecil'
  },
  {
    value: 'Pinggir	'
  },
  {
    value: 'Bandar Laksamana'
  },
  {
    value: 'Talang Muandau'
  },
  {
    value: 'Bathin Solapan'
  },
  {
    value: 'Batang Tuaka'
  },
  {
    value: 'Concong'
  },
  {
    value: 'Enok'
  },
  {
    value: 'Gaung'
  },
  {
    value: 'Gaung Anak Serka'
  },
  {
    value: 'Kempas'
  },
  {
    value: 'Kateman'
  },
  {
    value: 'Kemuning'
  },
  {
    value: 'Keritang'
  },
  {
    value: 'Kuala Indragiri'
  },
  {
    value: 'Mandah'
  },
  {
    value: 'Pelangiran'
  },
  {
    value: 'Pulau Burung'
  },
  {
    value: 'Reteh'
  },
  {
    value: 'Sungai Batang'
  },
  {
    value: 'Tanah Merah'
  },
  {
    value: 'Teluk Belengkong'
  },
  {
    value: 'Tembilahan'
  },
  {
    value: 'Tembilahan Hulu'
  },
  {
    value: 'Tempuling'
  },
  {
    value: 'Batang Cenaku'
  },
  {
    value: 'Batang Gansal'
  },
  {
    value: 'Batang Peranap'
  },
  {
    value: 'Lirik'
  },
  {
    value: 'Lubuk Batu Jaya'
  },
  {
    value: 'Kelayang'
  },
  {
    value: 'Kuala Cenaku'
  },
  {
    value: 'Pasir Penyu'
  },
  {
    value: 'Peranap'
  },
  {
    value: 'Rakit Kulim'
  },
  {
    value: 'Rengat'
  },
  {
    value: 'Rengat Barat'
  },
  {
    value: 'Seberida'
  },
  {
    value: 'Sungai Lala'
  },
  {
    value: 'XIII Koto Kampar'
  },
  {
    value: 'Bangkinang'
  },
  {
    value: 'Bangkinang Kota'
  },
  {
    value: 'Gunung Sahilan'
  },
  {
    value: 'Kampa'
  },
  {
    value: 'Kampar'
  },
  {
    value: 'Kampar Kiri'
  },
  {
    value: 'Kampar Kiri Hilir'
  },
  {
    value: 'Kampar Kiri Hulu'
  },
  {
    value: 'Kampar Kiri Tengah'
  },
  {
    value: 'Kampar Utara'
  },
  {
    value: 'Koto Kampar Hulu'
  },
  {
    value: 'Kuok'
  },
  {
    value: 'Perhentian Raja'
  },
  {
    value: 'Rumbio Jaya'
  },
  {
    value: 'Salo'
  },
  {
    value: 'Siak Hulu'
  },
  {
    value: 'Tambang'
  },
  {
    value: 'Tapung'
  },
  {
    value: 'Tapung Hilir'
  },
  {
    value: 'Tapung Hulu'
  },
  {
    value: 'Binawidya'
  },
  {
    value: 'Bukit Raya'
  },
  {
    value: 'Kulim'
  },
  {
    value: 'Lima Puluh'
  },
  {
    value: 'Marpoyan Damai'
  },
  {
    value: 'Payung Sekaki'
  },
  {
    value: 'Pekanbaru Kota'
  },
  {
    value: 'Rumbai Barat'
  },
  {
    value: 'Rumbai'
  },
  {
    value: 'Rumbai Timur'
  },
  {
    value: 'Sail'
  },
  {
    value: 'Senapelan'
  },
  {
    value: 'Sukajadi'
  },
  {
    value: 'Tuah Madani'
  },
  {
    value: 'Tenayan Raya'
  }
]


export default AddUser;

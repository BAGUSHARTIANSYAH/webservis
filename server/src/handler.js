// ta web development
const getdata = (request, h) => {
    return resSukses(h,200,"success","",dataTaWeb);
};
const deleteDt = (request, h) => {
    const index=request.payload.index;
    dataTaWeb.splice(index,1);
    return resSukses(h,200,"success","Buku berhasil dihapus",dataTaWeb);
};
const updateDt = (request, h) => {
    const index=request.payload.ind;
    dataTaWeb[index]=request.payload;
    return resSukses(h,200,"success","Buku berhasil diperbarui",dataTaWeb);
};
const insertDt = (request, h) => {
    dataTaWeb.push(request.payload);
    return resSukses(h,200,"success","Buku berhasil ditambahkan",dataTaWeb);
};

// tambahan
const resError=(h,code,status,msg)=>{
    const response=h.response({
        status:status,
        message:msg
    });
    response.code(code);
    return response;
}
const resSukses=(h,code,status,msg,data)=>{
    let fparam={
        status:status
    }
    if(!isNull(msg)){fparam.message=msg;}
    if(!isNull(data)){fparam.data=data;}

    const response=h.response(fparam);
    response.code(code);
    return response;
}
const isNull=(v)=>{
    if(v==undefined || v==null || v.length==0){
        return true;
    }
    return false;
}

let dataTaWeb=[
    {
        nama:"Puspa Bangsa (Bunga Melati Putih)",
        file:"Bunga-Melati.webp",
        keterangan:`
            Dilansir laman indonesia.go.id, nama ilmiah dari bunga melati putih adalah <em>Jasminum sambac</em>. Flora yang disebut juga dengan Puspa Bangsa ini sering dijumpai di seluruh pelosok negeri. Melati putih terkenal dengan aromanya yang semerbak.</p>
            Sebagai kelompok tanaman Perdu, melati putih memiliki batang yang bulat berkayu dengan tinggi 0,3-3 meter. Daun pada bunga berjenis tunggal dimana tangkai daun terlihat pendek. Flora ini menyukai cahaya matahari sehingga banyak ditemukan di wilayah dengan iklim tropis.</p>
            Secara filosofis, melati putih merupakan lambang dari kesucian, keanggunan, kesederhanaan, dan ketulusan. Kesucian disini merupakan perlambangan dari warna putih pada bunga. Melati juga menjadi elemen penting di upacara pernikahan adat Jawa.</p>
        `,
    },
    {
        nama:"Puspa Pesona (Bunga Anggrek Bulan)",
        file:"anggrek.jpg",
        keterangan:`
            Nama ilmiah anggrek bulan yaitu <em>Phalaenopsis amabilis </em>yang dijuluki juga dengan nama Puspa Pesona. Jenis flora ini dikenal dengan keindahan warna dengan kelopak daun besar dan lebar yang menjadi ciri khasnya.</p>
            Berbeda dengan melati putih, anggrek bulan tidak memberikan aroma khas yang kuat. Namun kecantikan bunga ini menjadi daya tarik yang memikat hati banyak orang. Ukuran bunga ini memiliki diameter hingga 10 cm dan durasi mekarnya cukup lama.</p>
            Di ketinggian area hingga 600 meter di atas permukaan laut, flora ini dapat tumbuh subur dari tempat lain. Anggrek bulan hidup dengan cara epifit yaitu menumpang di batang atau cabang pohon.</p>
        `,
    },
    {
        nama:"Puspa Langka (Bunga Padma Raksasa)",
        file:"padma.webp",
        keterangan:`
            Dilansir laman Direktorat Jenderal Konservasi Sumber Daya Alam dan Ekosistem, bunga Padma Raksasa lebih dikenal dengan nama <em>Rafflesia arnoldi</em>. Setidaknya diketahui terdapat 33 spesies rafflesia di dunia.</p>
            Di Indonesia terdapat 14 jenis dan 11 diantaranya tumbuh di Pulau Sumatera. Rafflesia arnoldi atau Padma Raksasa ini menjadi bunga langka yang dinobatkan sebagai <a href="https://www.detik.com/tag/bunga"><strong>bunga nasional Indonesia</strong></a>.</p>
            Bunga ini disebut juga dengan sebutan Puspa Langka dan dijuluki sebagai bunga terbesar di dunia. Diameternya diketahui mencapai 110 cm dengan tinggi 50 cm. Sayangnya, kerusakan hutan sebagai habitat flora ini membuatnya terancam punah.</p>
        `,
    },
];

module.exports = {
    getdata,deleteDt,insertDt,updateDt
};
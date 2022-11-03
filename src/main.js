import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

import './komponen/appBar';
import './komponen/formEntri';
import './komponen/list';
import './komponen/item';
import './komponen/informasi';
import { async } from 'regenerator-runtime';


const _ = require('lodash/core');

const url="http://localhost:5000/";
const appBar=document.querySelector("app-bar");
const vformEntri=document.querySelector("form-entri");

let dtAwalx=[
    {
        nama:"Puspa Bangsa (Bunga Melati Putih)",
        file:"Bunga-Melati.webp",
    },
    {
        nama:"Puspa Pesona (Bunga Anggrek Bulan)",
        file:"anggrek.jpg",
    },
    {
        nama:"Puspa Langka (Bunga Padma Raksasa)",
        file:"padma.webp",
    },
];
let dtAwal=[];
const start=()=>{
    appBar.komp={
        src:`${url}benderaPita.png`,
        srcLogo:`${url}garuda.png`
    }
    vformEntri.komp={
        src:`${url}Bunga-Melati.webp`
    }
}
start();

// form entri 
const selectList=document.getElementById("listBunga");
const imgView=document.getElementById("imgView");
const keterangan=document.getElementById("keterangan");

    // daftar bungan select list
const setOptionSelect=(dt)=>{
    let fhtml=``;
    dt.forEach((fv,fi) => {
        fhtml+=`<option value="${fi}">${fv.nama}</option>`;
    });
    return fhtml;
}
selectList.innerHTML=setOptionSelect(dtAwalx);
selectList.addEventListener('change',()=>{
    imgView.src=url+dtAwalx[Number(this.value)].file;
})

// list data
const list=document.querySelector("list-ce");
const renderResult = results => {
    list.komp={
        url:url,
        item:results
    }
};
const fallbackResult = message => {
    list.renderError(message);
};
const setterData=(dt)=>{
    if (dt===undefined || dt.length===0) {
        dtAwal=[];
        fallbackResult("Data is not found");
    }else{
        dtAwal=dt;
        renderResult(dt);
    } 
}  


// action connection
const loadData=async ()=>{
    try {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          };
       
        const response = await fetch(`${url}getdata`, options);
        const responseJson = await response.json();
        setterData(responseJson.data);
        
    } catch (error) {
        console.log(error);
    }
}
loadData();
window.del=async(ind)=> {
    try {
        const options = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({index:ind})
          };
       
        const response = await fetch(`${url}deleteDt`, options);
        const responseJson = await response.json();
        alert("sukses menghapus data");
        setterData(responseJson.data);
        
    } catch (error) {
        console.log(error);
    }
}
window.upded=async()=>{
    try {
        const options = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ind:Number(selectList.value),
                nama:dtAwalx[Number(selectList.value)].nama,
                file:dtAwalx[Number(selectList.value)].file,
                keterangan:keterangan.value
            })
          };
        const response = await fetch(`${url}updateDt`, options);
        const responseJson = await response.json();
        alert("sukses memperbarui data");
        cancel();
        setterData(responseJson.data);
    } catch (error) {
        console.log(error);
    }
   
}
window.added=async ()=>{
    try {
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ind:Number(selectList.value),
                nama:dtAwalx[Number(selectList.value)].nama,
                file:dtAwalx[Number(selectList.value)].file,
                keterangan:keterangan.value
            })
          };
       
        const response = await fetch(`${url}insertDt`, options);
        const responseJson = await response.json();
        alert("sukses menambah data baru");
        keterangan.value='';
        setterData(responseJson.data);
    } catch (error) {
    console.log(error);
    }
}


// on off btn action conection
const fbtnUpd=document.getElementById("fbtnUpd");
const fbtnIns=document.getElementById("fbtnIns");
window.cancel=()=>{
    fbtnUpd.style.display="none";
    fbtnIns.style.display="";
    keterangan.value ='';
}
window.upd=(ind)=>{
    fbtnIns.style.display="none";
    fbtnUpd.style.display="";

    selectList.value=ind;
    imgView.src=url+dtAwal[ind].file;
    keterangan.value =dtAwal[ind].keterangan;
}


// search
const search=document.getElementById("search");
window.actSearch=()=>{
    let fdt=_.filter(dtAwal,function(v){return String(v.nama).toLowerCase().split(String(search.value).toLowerCase()).length>1 })
    setterDataFilter(fdt);
}
const setterDataFilter=(dt)=>{
    if (dt==undefined || dt.length==0) {
        fallbackResult("Data is not found");
    }else{
        renderResult(dt);
    } 
} 

//informasi 
const informasi=document.querySelector("infor-masi");
informasi.komp={
    src:url+"informasi.jpg",
    judul:"INFORMASI",
    keterangan:`
        1. sistem ini hanya menyediakan 3 jenis bunga yang sesuai dengan temanya.<br>
        2. penambahan data untuk jenis bunga yang sama mungkin yang akan membedakannya adalah sumber informasinya.<br>
        3. gambar bunga yang ditampilkan hanya 3 file dari 3 jenis bunga tersebut.
    `
}
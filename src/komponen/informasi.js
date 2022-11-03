class informasi extends HTMLElement{
    constructor(){
        super();
    }

    set komp(komp){
        this.src =komp.src;
        this.judul =komp.judul;
        this.keterangan =komp.keterangan;
        this.render();
    }
    render(){
        this.innerHTML=`
            <div class="row justify-content-center">
                <div class="col bg-light border rounded-3 m-3 ">
                    <div class="row ">
                        <div class="col-3">
                            <img width="100%" src="${this.src}" alt="no-connection">
                        </div>
                        <div class="col-5">
                            <h2 class="card-title">${this.judul}</h2>
                            <p class="card-text">${this.keterangan}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        `;
    }
}
customElements.define('infor-masi', informasi);
// yang disebut dalam keputusan yang diteken Presiden Suharto tersebut yaitu Puspa Bangsa (Bunga Melati Putih), Puspa Pesona (Bunga Anggrek Bulan), dan Puspa Langka (Bunga Padma Raksasa)
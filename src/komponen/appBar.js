class appBar extends HTMLElement{
    constructor(){
        super();
        this.informasi="Bunga nasional Indonesia adalah sejumlah flora yang dinilai sesuai untuk mewakilkan karakter bangsa dan negara.";
        this.judul="Bunga Indonesia Raya";
    }
    set komp(komp){
        this.src =komp.src;
        this.srcLogo =komp.srcLogo;
        this.render();
    }
    render(){
        this.innerHTML=`
            <div class="row">
                <div class="col bgHeader1 p-1">
                    <div class="container d-flex">
                        <div class="box-flex">
                            <h2>${this.informasi}</h2>
                        </div>
                        <div class="box-flex">
                            <img class="imgIndo" src="${this.src}">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col bgHeader p-1 shadow">
                <div class="container d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <img class="imgGaruda" src="${this.srcLogo}">
                        <span class="fs-4 text-white">${this.judul}</span>
                    </a>
                    <ul class="nav nav-pills">
                        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Beranda</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Informasi</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Kontak</a></li>
                    </ul>
                </div>
            </div>
        `;
    }
}
customElements.define('app-bar', appBar);
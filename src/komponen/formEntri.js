class formEntri extends HTMLElement{
    constructor(){
        super();
    }
    set komp(komp){
        this.src =komp.src;
        this.render();
    }
    render(){
        this.innerHTML=`
            <h2 class="p-3 text-center bg-info bg-gradient text-light">Form Data Bunga</h2>
            <div class="p-2 bg-white m-3">
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">Daftar Bunga</label>
                    <div class="col-sm-9">
                        <select class="form-select" id="listBunga">
                        </select>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">Keterangan</label>
                    <div class="col-sm-9">
                        <textarea id="keterangan" class="form-control"  placeholder="Informasi bunga" style="height:200px"></textarea>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">Preview</label>
                    <div class="col-sm-9">
                        <img src='${this.src}' id="imgView" width="100%">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-3 col-form-label"></label>
                    <div class="col-sm-9">
                        <div class="btn-group me-2" id="fbtnUpd" style="display:none;">
                            <button type="button" class="btn btn-secondary" onclick="cancel()">Batalkan</button>
                            <button type="button" class="btn btn-warning" onclick="upded()">Perbarui</button>
                        </div>        
                        <div id="fbtnIns">
                        <button type="button" class="btn btn-primary btn-block" onclick="added()">Tambah Data</button>
                        </div>
                    </div>
                </div>

            </div>
        `;
    }
}
customElements.define('form-entri', formEntri);
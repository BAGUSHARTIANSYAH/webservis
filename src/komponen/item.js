class item extends HTMLElement{
    constructor(){
        super();
    }
    set komp(komp){
      this.url =komp.url;
      this.ind = komp.ind;
      this.v = komp.value;
      this.render();
    }
    render() {
        this.innerHTML= `
          <style>
            .row{
              display: flex;
            }
            .col-50 {
              float: left;
              width: 50%;
              flex-grow: 1;
            }
            .col-60 {
              float: left;
              width: 50%;
              flex-grow: 1;
            }
            .imgBunga {
              height: 100%;
              width: 100%;
            
            }
            img:hover{
              -webkit-filter: grayscale(80%); /* Safari 6.0 - 9.0 */
              filter: grayscale(80%);
            }
            .info{
              padding: 10px;
            }
            .boxShadow {
              margin:10px 10px 20px 10px;
              box-shadow: 5px 5px 5px 5px #888888;
            }
            .judulItem{
              background-color:#F2EBE9;
              padding:10px;
              margin:0px;
              text-align:center;
            }
            .footerItem{
              background-color:#F2EBE9;
              padding:10px;
              margin:0px;
              text-align:center;
            }
            .btnUpd{
              padding:5px;
              background-color:#FCE700;
            }
            .btndel{
              padding:5px;
              background-color:#E0144C;
              color:white;
            }
          </style>
          
          <div class="boxShadow">
            <div class="row">
              <div class="col-50">
                <img class="imgBunga" src="${this.url+this.v.file}" alt="Fan Art">
              </div>
              <div class="col-50 ">
                <h2 class="judulItem">${this.v.nama}</h2>
                <div class="info">${(this.v.keterangan.length>250?this.v.keterangan.substring(0,250)+"...":this.v.keterangan)}</div>
                <div class="footerItem">
                  <button class="btnUpd" onclick="upd(${this.ind})" name="upd">update</button>
                  <button class="btndel" onclick="del(${this.ind})" name="del">hapus</button>
                </div>
              </div>
            </div>
          </div>
        `;
    }
}
customElements.define('item-ce', item);
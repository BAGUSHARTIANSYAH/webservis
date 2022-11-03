class list extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    set komp(komp){
      this.item =komp.item;
      this.url = komp.url;
      this.render();
    }
    renderError(message) {
      this.shadowDOM.innerHTML= `<h2 class="placeholder">${message}</h2>`;
    }
    render(){
        this.shadowDOM.innerHTML = '';
        this.item.forEach((value,ind) => {
            const  listItem= document.createElement('item-ce');
            listItem.komp={
              url:this.url,
              ind:ind,
              value:value
            };
            this.shadowDOM.appendChild(listItem);            
        });
    }
    
}
customElements.define('list-ce', list);
class Footer extends HTMLElement { 
    constructor(
    ) {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <footer class="bg-dark py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0 text-white">Last Updated April 2022</div></div>
                    <div class="col-auto">
                        <a class="link-light small" href="https://cs.txstate.edu" target="_blank" rel="noopener noreferrer">TXST CS</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="https://github.com/smithwithatypo/txst_cs_guide" target="_blank" rel="noopener noreferrer">Github</a>

                    </div>
                </div>
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);
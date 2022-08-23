class Navigation extends HTMLElement { 
    prod = 'http://www.txstcsstudentguide.com/';
    constructor(
    ) {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-5">
          <a class="navbar-brand" href="${this.prod}index.html">TXST CS Student Guide</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item"><a class="nav-link" href="${this.prod}beginner.html">Beginner</a></li>
                  <li class="nav-item"><a class="nav-link" href="${this.prod}advanced.html">Advanced</a></li>
                  <li class="nav-item"><a class="nav-link" href="${this.prod}clubs.html">Clubs</a></li>
                  <li class="nav-item"><a class="nav-link" href="${this.prod}jobs.html">Jobs</a></li>
              </ul>
          </div>
        </div>
      </nav>
      `;
    }
  }
  
  customElements.define('navigation-component', Navigation);
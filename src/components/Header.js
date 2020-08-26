class AppBar extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            header {
                grid-area: header;
                background-color: green;
                color: #ffffff;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem;
                position: sticky;
                position: -webkit-sticky;
                top: 0;
            }
            
            header a {
                color: #ffffff;
                font-weight: bold;
                text-decoration: none;
                margin-right: 1.2rem;
                font-size: 1.8rem;
            }
            
            header a:hover {
                color: tomato;
            }
            
            .brand a {
                font-size: 3rem;
                font-weight: bold;
                padding-left: 1rem;
            }
        </style>
        <header>
            <div class="brand">
                <a href="/#/">tokobaju</a>
            </div>
            <div>
                <a href="/#/signin">Sign In</a>
                <a href="/#/cart">Cart</a>
            </div>
        </header>`;
    }
 }
  
 customElements.define("app-bar", AppBar);
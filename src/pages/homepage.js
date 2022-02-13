/* eslint-disable linebreak-style */
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewList from "../components/listHome";

/* eslint-disable linebreak-style */
const HomePage = {
    async   runder() {
        return /* html */`
       <div class="container mx-auto"> 
            <div id="header"> 
                <header> ${Header.runder()}  </header>
            </div>
            <div class="mt-4"> 
                ${Banner.runder()}
                </div>

                <div class="new" > 
                ${await NewList.runder()}
                </div>
            
            </div>
            <footer> ${Footer.runder()} </footer>
       </div>

        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;

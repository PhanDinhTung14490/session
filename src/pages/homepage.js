/* eslint-disable linebreak-style */
import ActivateList from "../components/activate";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewList from "../components/listHome";

/* eslint-disable linebreak-style */
const HomePage = {
    runder() {
        return /* html */`
       <div class="container mx-auto"> 
            <header> ${Header.runder()}  </header>
            <div class="mt-4"> 
                ${Banner.runder()}
                </div>

                <div class="new" > 
                ${NewList.runder()}
                </div>


                <div class="activate">
                ${ActivateList.runder()}
            
            </div>
            <footer> ${Footer.runder()} </footer>
       </div>

        `;
    },
};
export default HomePage;

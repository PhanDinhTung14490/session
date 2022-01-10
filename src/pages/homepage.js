/* eslint-disable linebreak-style */
import ActivateList from "../components/activate-list";
import Banner from "../components/banner";
import NewList from "../components/new-list";

/* eslint-disable linebreak-style */
const HomePage = {
    runder() {
        return /* html */`
       <div class="container mx-auto"> 
     
       <div class="mt-6"> 
       ${Banner.runder()}
       </div>

       <div class="new" > 
       ${NewList.runder()}
       </div>


       <div class="activate">
       ${ActivateList.runder()}
       
       </div>
       </div>

        `;
    },
};
export default HomePage;

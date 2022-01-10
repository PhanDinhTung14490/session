/* eslint-disable linebreak-style */
import Banner from "../components/banner";
import NewList from "../components/new-list";

/* eslint-disable linebreak-style */
const HomePage = {
    print() {
        return /* html */`
       <div class="container mx-auto"> 
       <h1>Home Page</h1>
       <div> 
       ${Banner.print()}
       </div>
       <div class="new" > 
       ${NewList.print()}
       </div>
       
       </div>

        `;
    },
};
export default HomePage;

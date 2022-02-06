/* eslint-disable linebreak-style */
import { get } from "../api/posts";
import Footer from "../components/footer";
import Header from "../components/header";

const DetailPage = {
    async runder(id) {
        const { data } = await get(id);
        // const result = data.find((post) => post.id === id);
        return /* html */ `
        <header> ${Header.runder()} </header>
            <div>
                <h1>${data.title} </h1>
                <img src="${data.img}"/>
                <p>${data.desc} </p>
                
            </div>

        <footer> ${Footer.runder()} </footer>
        `;
    },
};
export default DetailPage;

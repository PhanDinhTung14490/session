/* eslint-disable linebreak-style */
import { data } from "../data";

const DetailPage = {
    runder(id) {
        const result = data.find((post) => post.id === id);
        return /* html */ `
        <div>
        <h1>${result.title} </h1>
        <img src="${result.img}"/>
        <p>${result.desc} </p>
        </div>
        `;
    },
};
export default DetailPage;

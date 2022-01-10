/* eslint-disable linebreak-style */
import data from "../data";

const NewList = {
    print() {
        return /* html */`
        <div class="container mx-auto">
        <h2 class=""> tin tức học tập </h2>
        <div class="grid  grid-cols-3 gap-8"> 

        ${data.map((post) => `
        
        <div class="content-list-item border border-bg-black">
        <div class="p-6">
         <a href="#">
           <img width="100%" src="${post.img}" alt="">
         </a>
         <h3 class="title-tiem my-2 text-base text-orange-600">
           ${post.title}
         </h3>
         <p>${post.desc}</p>
        </div>
       </div>
        
        `).join("")}
        </div>
        </div>
        `;
    },
};

export default NewList;

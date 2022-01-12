/* eslint-disable linebreak-style */
import { data } from "../../data";

/* eslint-disable linebreak-style */
const ProductList = {
    runder() {
        return /* html */`
        <table class="min-w-full divide-y divide-gray-200 my-8 ">
          <thead class="bg-slate-200 w-24 ">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                id product
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                title
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                images 
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              description
              </th>
              
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          ${data.map((value) => `
          <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
               
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
              
                </div>
                <div class="text-sm text-gray-500">
              
                ${value.id}
                </div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">   ${value.title}</div>
            
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
           
             
              <img class="w-24" src=" ${value.img}" alt="">
           
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            ${value.desc}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="/admin/edit/${value.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
          </td>
        
        </tr>
          
          `).join("")}
           

            <!-- More people... -->
          </tbody>
        </table>
        
            <a href="/admin/add" class="bg-amber-600 rounded-full px-8 py-2 text-white hover:text-pink-900">add product</a>
     
        `;
    },
};
export default ProductList;

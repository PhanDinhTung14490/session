import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";
/* eslint-disable linebreak-style */
const Header = {
    runder() {
        return /* html */ `
        <div class="bg-indigo-900 py-8 ">

        <a href="#">
            <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/hawkeye_lob_log_def_01.png"
                alt="" width="150px" class="mx-auto">
        </a>

    </div>

    <div class="header-main bg-amber-600 flex ">
        <nav class="ml-6">
            <ul class="flex py-3" id="menu" >
                <li class="">
                    <a href="/"  class="text-white p-4 hover:text-pink-900">Trang Chủ</a>
                </li>
                <li class="">
                    <a href="/#/signup" class="text-white p-4 hover:text-pink-900">sign up</a>
                </li>
                <li class="">
                    <a href="/#/signin" class="text-white p-4 hover:text-pink-900">sign in</a>
                </li>
                <li class="">
                    <a href="/#/admin/dashboard" class="text-white p-4 hover:text-pink-900">Admin</a>
                </li>
            </ul>
        </nav>
        <div class="search flex ml-80 py-3">
            ${localStorage.getItem("user") ? `
            
            <ul class="flex" id="menu" >
                <li class="">
                    <a  id="account-name" class="text-white p-4 hover:text-pink-900"></a>
                </li>
                <li class="">
                    <a href="" id="logout" class="text-white p-4 hover:text-pink-900">Logout</a>
                </li>
            </ul>
            ` : ""} 
        </div>
    </div>


        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const logout = document.querySelector("#logout");

        document.querySelector("#account-name").innerHTML = user.username;
        // log out
        logout.addEventListener("click", () => {
            toastr.success("Logout thàng công");
            localStorage.removeItem("user");
            reRender(Header, "#header");
        });
    },
};
export default Header;

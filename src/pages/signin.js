/* eslint-disable linebreak-style */
import toastr from "toastr";
import { singin } from "../api/user";
import "toastr/build/toastr.min.css";
/* eslint-disable linebreak-style */
const SingIn = {
    runder() {
        return /* html */`
        
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
        <div>
        
        <h2 class="mt-6 text-center text-3xl font-bold font-mono text-gray-900">
        Sign up an account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
            Or
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            start your 14-day free trial
            </a>
        </p>
        </div>
            <form class="mt-8 space-y-6" action="#" method="POST" id="formSignin">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
            
                <div >
                    <label class="block">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                    Email address
                    </span>
                    <input type="email" id="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                    </label>
            
                </div>
                <div >
                    <label class="block">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                    Password
                    </span>
                    <input type="password" id="password" name="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                    </label>
                </div>
            </div>

            <div class="flex items-center justify-between">
            

            
            </div>

            <div>
                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <!-- Heroicon name: solid/lock-closed -->
                    <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                </span>
                Sign up
                </button>
            </div>
            </form>
  </div>
</div>
        `;
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                // call api
                const { data } = await singin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                // luu du lieu vao localstorage
                localStorage.setItem("user", JSON.stringify(data.user));
                toastr.success("bạn đã đăng nhập thành công chờ 3s để chuyển trang");
                setTimeout(() => {
                    if (data.user.id === 2) {
                        document.location.href = "/#/admin/dashboard";
                    } else { document.location.href = "/#/"; }
                }, 3000);
                // kiem tra quyen dua tren id
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },

};

export default SingIn;

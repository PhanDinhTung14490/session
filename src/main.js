/* eslint-disable linebreak-style */
import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/product";

// console.log(HomePage);
const router = new Navigo("/", { linksSelector: "a" });

const runder = (content) => {
    // console.log(content);
    document.querySelector("#app").innerHTML = content.print();
};
router.on({
    "/": () => {
        runder(HomePage);
        // console.log("home page");
    },
    "/about": () => {
        runder(AboutPage);
        // console.log("about page");
    },
    "/product": () => {
        runder(ProductPage);
    },
});

router.resolve();

// class TuongPhep {
//     constructor(name, congVatLy, congPhep) {
//         this.tenTuong = name;
//         this.congVatLyTuong = congVatLy;
//         this.congPhepTuong = congPhep;
//     }

//     showIntro() {
//         console.log(`
//         ten tuong la: ${this.tenTuong}
//         cong vat ly tuong la: ${this.congVatLyTuong}
//         cong phep tuong: ${this.congPhepTuong}
//         `);
//     }
// }
// const tuong1 = new TuongPhep("veera", 170, 0);
// const tuong2 = new TuongPhep("krixi", 159, 0);
// tuong1.showIntro();
// console.log(tuong2.showIntro());

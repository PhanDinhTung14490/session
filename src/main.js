/* eslint-disable linebreak-style */
import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
// import AboutPage from "./pages/about";
import Admission from "./pages/admissions";
import Educate from "./pages/educate";
import HomePage from "./pages/homepage";
// import ProductPage from "./pages/product";
import Recruitment from "./pages/recruitment";
import Students from "./pages/student";

// console.log(HomePage);
const router = new Navigo("/", { linksSelector: "a" });

const runder = (content) => {
    // console.log(content);
    document.querySelector("#header").innerHTML = Header.runder();
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.runder();
};
router.on({
    "/": () => {
        runder(HomePage.runder());
        // console.log("home page");
    },
    "/admission": () => {
        runder(Admission.runder());
        // console.log("about page");
    },
    "/educate": () => {
        runder(Educate.runder());
    },
    "/students": () => {
        runder(Students.runder());
    },
    "/recruitment": () => {
        runder(Recruitment.runder());
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

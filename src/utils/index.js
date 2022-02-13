/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
export const reRender = async (component, domElement) => {
    if (component) {
        document.querySelector(domElement).innerHTML = await component.runder();
    }
    if (component.afterRender) await component.afterRender();
};

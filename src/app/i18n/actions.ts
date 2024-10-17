import { getCookie, setCookie } from "cookies-next";

export const initLang = () => {
    const lng = getCookie('lng');
    if (lng) {
        setCookie('lng', lng);
    } else {
        const [defaultLang] = navigator.language.split('-');
        setCookie('lng', defaultLang);
    }
}

export const setLanguage = (lng: string) => {
   setCookie('lng', lng);
}
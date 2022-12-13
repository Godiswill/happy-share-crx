/// <reference path="./DOMMessages.d.ts" />
/// <reference path="./Article.d.ts" />

type DevDataType = {
    title: string;
    key: string;
    icon: string;
    cat: {
        title: string;
        items: {
            url: string;
            icon: string;
            title: string;
            desc: string;
        }[];
    }[];
};

export * from './DOMMessages';
export * from './Article';
export type DevDataType = {
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

export interface FierbaseUser {
    uid: string;
    email: string;
    displayName: string;
}

export interface pageProps {
    expanded?:boolean;
    setExpanded?(expanded:boolean):void;
}
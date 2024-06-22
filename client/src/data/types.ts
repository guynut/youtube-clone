export type userData = {
    uid: string;
    email: string;
    displayName: string;
    like?:[]
    playlist?:[]
}
export type pageProps = {
    expanded?:boolean;
    setExpanded?(expanded:boolean):void;
}

// Video Data. Also use in Thumbnail and VideoPlayer
export type VideoData = {
    title:string;
    thumbnailPic:string;
    chanel:string;
    chanelLogo:string;
    videoLink:string;
    description?:string;
    like?:number;
    views?:number;
}

// Comment Zone In Clip
export type Reply = {
    user: string;
    text: string;
    userPic:string;
    like:number
};
export type Comment = {
    user: string;
    userPic: string;
    text: string;
    like: number;
    reply: Reply[];
};
export interface Song {
    id: string;
    title: string;
    artist: string;
    imageUrl?: string;
    duration?: string;
}

export interface Category {
    id: string;
    name: string;
    href: string;
    icons: Array<{ url: string; height: number; width: number }>;
};
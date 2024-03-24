export interface Articles{
    articles: Articles[];
}

export interface Article{
    source: {id: number,name: string};
    author: string;
    title: string;
    description: string;
    url: string; 
    urlToImage: string;
    publishedAt: string;
    content: string;
    minutesAgo: number;
}
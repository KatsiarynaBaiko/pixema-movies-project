import { ReactElement } from "react";

// для FormPagesContainerProps
export type Children = ReactElement | ReactElement[];

// типизация нашей Card 
// то есть данные о фильме 
export type PostType = {
    id: number;
    name: string;
    type?: string;
    release_date?: string;
    year?: string;
    tagline?: string;
    genre: string;
    poster?: string;
    backdrop?: string;
    runtime?: number;
    budget?: number;
    revenue?: number;
    popularity?: number;
    tmdb_id?: number;
    imdb_id?: string;
    is_series?: boolean;
    adult?: boolean;
    season_count?: number;
    episode_count?: number;
    series_ended?: boolean;
    language?: string;
    original_title?: string;
    certification?: string;
    rating?: number;
    vote_count?: number;
};

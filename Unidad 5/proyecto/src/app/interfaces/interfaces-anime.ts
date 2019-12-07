export interface Anime {
  data: AnimeDatum[];
  meta: AnimeMeta3;
  links: AnimeLinks3;
}

export interface AnimeLinks3 {
  first: string;
  next: string;
  last: string;
}

export interface AnimeMeta3 {
  count: number;
}

export interface AnimeDatum {
  id: string;
  type: string;
  links: AnimeLinks;
  attributes: AnimeAttributes;
  relationships: AnimeRelationships;
}

export interface AnimeRelationships {
  genres: AnimeGenres;
  categories: AnimeGenres;
  castings: AnimeGenres;
  installments: AnimeGenres;
  mappings: AnimeGenres;
  reviews: AnimeGenres;
  mediaRelationships: AnimeGenres;
  characters: AnimeGenres;
  staff: AnimeGenres;
  productions: AnimeGenres;
  quotes: AnimeGenres;
  episodes: AnimeGenres;
  streamingLinks: AnimeGenres;
  animeProductions: AnimeGenres;
  animeCharacters: AnimeGenres;
  animeStaff: AnimeGenres;
}

export interface AnimeGenres {
  links: AnimeLinks2;
}

export interface AnimeLinks2 {
  self: string;
  related: string;
}

export interface AnimeAttributes {
  createdAt: string;
  updatedAt: string;
  slug: string;
  synopsis: string;
  coverImageTopOffset: number;
  titles: AnimeTitles;
  canonicalTitle: string;
  abbreviatedTitles?: string[];
  averageRating?: string;
  ratingFrequencies: AnimeRatingFrequencies;
  userCount: number;
  favoritesCount: number;
  startDate: string;
  endDate: string;
  nextRelease?: any;
  popularityRank: number;
  ratingRank?: number;
  ageRating?: string;
  ageRatingGuide: string;
  subtype: string;
  status: string;
  tba?: string;
  posterImage: AnimePosterImage;
  coverImage?: AnimeCoverImage;
  episodeCount: number;
  episodeLength: number;
  totalLength: number;
  youtubeVideoId?: string;
  showType: string;
  nsfw: boolean;
}

export interface AnimeCoverImage {
  tiny: string;
  small: string;
  large: string;
  original: string;
  meta: AnimeMeta2;
}

export interface AnimeMeta2 {
  dimensions: AnimeDimensions2;
}

export interface AnimeDimensions2 {
  tiny: AnimeTiny2;
  small: AnimeTiny2;
  large: AnimeTiny2;
}

export interface AnimeTiny2 {
  width: number;
  height: number;
}

export interface AnimePosterImage {
  tiny: string;
  small: string;
  medium: string;
  large: string;
  original: string;
  meta: AnimeMeta;
}

export interface AnimeMeta {
  dimensions: AnimeDimensions;
}

export interface AnimeDimensions {
  tiny: AnimeTiny;
  small: AnimeTiny;
  medium: AnimeTiny;
  large: AnimeTiny;
}

export interface AnimeTiny {
  width?: number;
  height?: number;
}

export interface AnimeRatingFrequencies {
  '2': string;
  '3': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  '11': string;
  '12': string;
  '13': string;
  '14': string;
  '15': string;
  '16': string;
  '17': string;
  '18': string;
  '19': string;
  '20': string;
  '4'?: string;
}

export interface AnimeTitles {
  en?: string;
  en_jp: string;
  en_us?: string;
  en_cn: string;
  ja_jp: string;
  zh_cn?: string;
}

export interface AnimeLinks {
  self: string;
}

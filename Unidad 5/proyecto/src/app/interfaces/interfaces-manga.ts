export interface Manga {
  data: MangaDatum[];
  meta: MangaMeta3;
  links: MangaLinks3;
}

export interface MangaLinks3 {
  first: string;
  next: string;
  last: string;
}

export interface MangaMeta3 {
  count: number;
}

export interface MangaDatum {
  id: string;
  type: string;
  links: MangaLinks;
  attributes: MangaAttributes;
  relationships: MangaRelationships;
}

export interface MangaRelationships {
  genres: MangaGenres;
  categories: MangaGenres;
  castings: MangaGenres;
  installments: MangaGenres;
  mappings: MangaGenres;
  reviews: MangaGenres;
  mediaRelationships: MangaGenres;
  characters: MangaGenres;
  staff: MangaGenres;
  productions: MangaGenres;
  quotes: MangaGenres;
  chapters: MangaGenres;
  mangaCharacters: MangaGenres;
  mangaStaff: MangaGenres;
}

export interface MangaGenres {
  links: MangaLinks2;
}

export interface MangaLinks2 {
  self: string;
  related: string;
}

export interface MangaAttributes {
  createdAt: string;
  updatedAt: string;
  slug: string;
  synopsis: string;
  coverImageTopOffset: number;
  titles: MangaTitles;
  canonicalTitle: string;
  abbreviatedTitles?: string[];
  averageRating?: string;
  ratingFrequencies: MangaRatingFrequencies;
  userCount: number;
  favoritesCount: number;
  startDate: string;
  endDate?: string;
  nextRelease?: any;
  popularityRank: number;
  ratingRank?: number;
  ageRating?: string;
  ageRatingGuide?: string;
  subtype: string;
  status: string;
  tba?: string;
  posterImage: MangaPosterImage;
  coverImage?: MangaCoverImage;
  chapterCount?: number;
  volumeCount?: number;
  serialization?: string;
  mangaType: string;
}

export interface MangaCoverImage {
  tiny: string;
  small: string;
  large: string;
  original: string;
  meta: MangaMeta2;
}

export interface MangaMeta2 {
  dimensions: MangaDimensions2;
}

export interface MangaDimensions2 {
  tiny: MangaTiny2;
  small: MangaTiny2;
  large: MangaTiny2;
}

export interface MangaTiny2 {
  width?: any;
  height?: any;
}

export interface MangaPosterImage {
  tiny: string;
  small: string;
  medium: string;
  large: string;
  original: string;
  meta: MangaMeta;
}

export interface MangaMeta {
  dimensions: MangaDimensions;
}

export interface MangaDimensions {
  tiny: MangaTiny;
  small: MangaTiny;
  medium: MangaTiny;
  large: MangaTiny;
}

export interface MangaTiny {
  width?: number;
  height?: number;
}

export interface MangaRatingFrequencies {
  '14': string;
  '20': string;
  '2'?: string;
  '3'?: string;
  '4'?: string;
  '5'?: string;
  '6'?: string;
  '7'?: string;
  '8'?: string;
  '9'?: string;
  '10'?: string;
  '11'?: string;
  '12'?: string;
  '13'?: string;
  '15'?: string;
  '16'?: string;
  '17'?: string;
  '18'?: string;
  '19'?: string;
}

export interface MangaTitles {
  en?: string;
  en_jp: string;
  en_us?: string;
  en_cn: string;
  ja_jp?: string;
  zh_cn?: string;
}

export interface MangaLinks {
  self: string;
}

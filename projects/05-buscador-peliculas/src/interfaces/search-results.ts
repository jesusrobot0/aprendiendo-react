export interface SearchResults {
  Search: Search[];
  totalResults: string;
  Response: string;
}

export interface Search {
  title: string;
  year: string;
  id: string;
  type: string;
  poster: string;
}

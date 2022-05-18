export const SearchMatchType = {
  prefix: 'prefix',
  suffix: 'suffix',
  contains: 'contains',
  relevance: 'relevance',
  exact: 'exact',
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SearchMatchType = keyof typeof SearchMatchType;

export interface SearchParams {
  query: string;
  match?: SearchMatchType;
  take?: number;
}

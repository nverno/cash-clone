import { IsEnum, IsNumberString, IsOptional, IsString } from 'class-validator';

export const MatchType = {
  prefix: 'prefix',
  suffix: 'suffix',
  contains: 'contains',
  relevance: 'relevance',
  exact: 'exact',
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type MatchType = keyof typeof MatchType;

export class SearchQueryDto {
  @IsString()
  public query: string;

  @IsOptional()
  @IsEnum(MatchType, {
    message: `match must be one of: ${Object.keys(MatchType).join(', ')}`,
  })
  public match?: MatchType;

  @IsOptional()
  @IsNumberString()
  public take?: number;
}

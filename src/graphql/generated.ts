import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ISO8601DateTime: { input: any; output: any; }
};

/** published article on Hoshinonaka Government */
export type Article = {
  __typename?: 'Article';
  /** jurisdiction bureau */
  bureaus?: Maybe<Array<Bureau>>;
  /** markdown content */
  content?: Maybe<Scalars['String']['output']>;
  /** created at */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** id */
  id: Scalars['ID']['output'];
  /** category number */
  number: Scalars['Int']['output'];
  /** published at */
  publishedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** title */
  title: Scalars['String']['output'];
  /** updated at */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for Article. */
export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ArticleEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Article>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Article>;
};

/** bureau model */
export type Bureau = {
  __typename?: 'Bureau';
  /** markdown content */
  content?: Maybe<Scalars['String']['output']>;
  /** time of created */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** short description text */
  description: Scalars['String']['output'];
  /** bigint id */
  id: Scalars['ID']['output'];
  /** name */
  name: Scalars['String']['output'];
  /** url slug */
  slug: Scalars['String']['output'];
  /** time of updated */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** queries */
export type Query = {
  __typename?: 'Query';
  /** all published articles */
  articles?: Maybe<ArticleConnection>;
  /** single bureau with slug */
  bureau?: Maybe<Bureau>;
  /** all bureaus */
  bureaus?: Maybe<Array<Bureau>>;
};


/** queries */
export type QueryArticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** queries */
export type QueryBureauArgs = {
  slug: Scalars['String']['input'];
};

export type ArticleListItemFragment = { __typename?: 'Article', id: string, title: string, publishedAt?: any | null, updatedAt: any, bureaus?: Array<{ __typename?: 'Bureau', name: string }> | null };

export type ArticlesPageFragment = { __typename?: 'ArticleConnection', nodes?: Array<{ __typename?: 'Article', id: string, title: string, publishedAt?: any | null, updatedAt: any, bureaus?: Array<{ __typename?: 'Bureau', name: string }> | null } | null> | null, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } };

export type GetArticlesPageQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  endCursor?: InputMaybe<Scalars['String']['input']>;
  startCursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetArticlesPageQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleConnection', nodes?: Array<{ __typename?: 'Article', id: string, title: string, publishedAt?: any | null, updatedAt: any, bureaus?: Array<{ __typename?: 'Bureau', name: string }> | null } | null> | null, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } | null };

export type GetBureausQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBureausQuery = { __typename?: 'Query', bureaus?: Array<{ __typename?: 'Bureau', id: string, name: string, description: string }> | null };

export type BureausFragment = { __typename?: 'Bureau', id: string, name: string, description: string };

export type GetBureauQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBureauQuery = { __typename?: 'Query', bureau?: { __typename?: 'Bureau', id: string } | null };

export const ArticleListItemFragmentDoc = gql`
    fragment ArticleListItem on Article {
  id
  title
  bureaus {
    name
  }
  publishedAt
  updatedAt
}
    `;
export const ArticlesPageFragmentDoc = gql`
    fragment ArticlesPage on ArticleConnection {
  nodes {
    ...ArticleListItem
  }
  pageInfo {
    startCursor
    endCursor
    hasPreviousPage
    hasNextPage
  }
}
    ${ArticleListItemFragmentDoc}`;
export const BureausFragmentDoc = gql`
    fragment bureaus on Bureau {
  id
  name
  description
}
    `;
export const GetArticlesPageDocument = gql`
    query GetArticlesPage($first: Int = 5, $endCursor: String, $startCursor: String) {
  articles(first: $first, after: $endCursor, before: $startCursor) {
    ...ArticlesPage
  }
}
    ${ArticlesPageFragmentDoc}`;

export function useGetArticlesPageQuery(options?: Omit<Urql.UseQueryArgs<GetArticlesPageQueryVariables>, 'query'>) {
  return Urql.useQuery<GetArticlesPageQuery, GetArticlesPageQueryVariables>({ query: GetArticlesPageDocument, ...options });
};
export const GetBureausDocument = gql`
    query GetBureaus {
  bureaus {
    ...bureaus
  }
}
    ${BureausFragmentDoc}`;

export function useGetBureausQuery(options?: Omit<Urql.UseQueryArgs<GetBureausQueryVariables>, 'query'>) {
  return Urql.useQuery<GetBureausQuery, GetBureausQueryVariables>({ query: GetBureausDocument, ...options });
};
export const GetBureauDocument = gql`
    query GetBureau {
  bureau(slug: "finance") {
    id
  }
}
    `;

export function useGetBureauQuery(options?: Omit<Urql.UseQueryArgs<GetBureauQueryVariables>, 'query'>) {
  return Urql.useQuery<GetBureauQuery, GetBureauQueryVariables>({ query: GetBureauDocument, ...options });
};
import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": null,
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Article",
        "fields": [
          {
            "name": "bureaus",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Bureau",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "number",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ArticleConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "ArticleEdge",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Article",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ArticleEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "OBJECT",
              "name": "Article",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Bureau",
        "fields": [
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PageInfo",
        "fields": [
          {
            "name": "endCursor",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hasNextPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "hasPreviousPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "startCursor",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "articles",
            "type": {
              "kind": "OBJECT",
              "name": "ArticleConnection",
              "ofType": null
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "bureau",
            "type": {
              "kind": "OBJECT",
              "name": "Bureau",
              "ofType": null
            },
            "args": [
              {
                "name": "slug",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "bureaus",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Bureau",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;
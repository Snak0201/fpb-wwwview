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

/** queries */
export type Query = {
  __typename?: 'Query';
  /** get single bureau with slug */
  bureau?: Maybe<Bureau>;
  /** get all bureaus */
  bureaus?: Maybe<Array<Bureau>>;
};


/** queries */
export type QueryBureauArgs = {
  slug: Scalars['String']['input'];
};

export type GetBureausQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBureausQuery = { __typename?: 'Query', bureaus?: Array<{ __typename?: 'Bureau', id: string, name: string }> | null };

export type BureausFragment = { __typename?: 'Bureau', id: string, name: string };

export const BureausFragmentDoc = gql`
    fragment bureaus on Bureau {
  id
  name
}
    `;
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
        "name": "Query",
        "fields": [
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
import { gql } from "@apollo/client";


export const SINGLE_CATEGORY = gql `
query getSingleCategory($id: ID!) {
  category(id: $id) {
    data {
      id
      attributes {
        reviews {
          data {
            attributes {
              title
              rating
              body
              categories{
                data{
                    attributes{
                        Name
                    }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export const ALL_CATEGORIES = gql`
  query getCategories {
    categories {
      data {
        id
        attributes {
          Name
        }
      }
    }
  }
`;

export const REVIEWS = gql`
query Reviews{
  reviews {
    data {
      id
      attributes {
        
        title
        rating
        body
      }
    }
  }
}
`;

export const SINGLE_REVIEW = gql`
  query getSingle($id: ID!) {
    review(id: $id) {
      data {
        id
        attributes {
          title
          rating
          body
        }
      }
    }
  }
`;
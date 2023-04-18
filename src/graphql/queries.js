import { gql } from "@apollo/client";

export const SINGLE_CATEGORY = gql`
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
                categories {
                  data {
                    attributes {
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
  query Reviews {
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

export const GET_ME = gql`
  query getMe {
    me {
      id
      username
    }
  }
`;


// you need to enable
export const GET_USER = gql`
  query getUser($id: ID!){
    usersPermissionsUser(id: $id){
      data{
        attributes{
          email
          phone
        }
      }
    }
  }`;

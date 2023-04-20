import { gql } from "graphql-tag";

export const UPDATE_USER_EMAIL = gql`
  mutation UpdateUserEmail($id: ID!, $email: String!) {
    updateUsersPermissionsUser(id: $id, data: { email: $email }) {
      data {
        attributes {
          email
        }
      }
    }
  }
`;

export const UPDATE_USER_PHONE = gql`
  mutation UpdateUserEmail($id: ID!, $phone: String!) {
    updateUsersPermissionsUser(id: $id, data: { phone: $phone }) {
      data {
        attributes {
          phone
        }
      }
    }
  }
`;

export const UPDATE_USER_CARD = gql`
  mutation UpdateUserEmail($id: ID!, $primary: JSON!) {
    updateUsersPermissionsUser(id: $id, data: { card: $primary }) {
      data {
        attributes {
          card
        }
      }
    }
  }
`;

export const UPDATE_USER_SECONDARY_CARD = gql`
  mutation UpdateUserEmail($id: ID!, $secondary: JSON!) {
    updateUsersPermissionsUser(id: $id, data: { card: $secondary }) {
      data {
        attributes {
          card
        }
      }
    }
  }
`;

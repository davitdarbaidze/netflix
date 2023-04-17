import {gql} from "graphql-tag"

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

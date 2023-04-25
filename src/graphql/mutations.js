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

export const UPDATE_USER_PLAN= gql`
  mutation UpdateUserEmail($id: ID!, $plan: ENUM_USERSPERMISSIONSUSER_PLAN!) {
    updateUsersPermissionsUser(id: $id, data: { plan: $plan }) {
      data {
        attributes {
          plan
        }
      }
    }
  }
`;

export const UPDATE_USER_BILLING_DAY= gql`
  mutation UpdateUserEmail($id: ID!, $billingDay: String!) {
    updateUsersPermissionsUser(id: $id, data: { billingDay: $billingDay }) {
      data {
        attributes {
          billingDay
        }
      }
    }
  }
`;

export const UPDATE_USER_STATUS= gql`
  mutation UpdateUserEmail($id: ID!, $status: Boolean!) {
    updateUsersPermissionsUser(id: $id, data: { status: $status }) {
      data {
        attributes {
          status
        }
      }
    }
  }
`;

export const UPDATE_USER_CARD = gql`
  mutation UpdateUserEmail($id: ID!, $primary: JSON!) {
    updateUsersPermissionsUser(id: $id, data: { primary: $primary }) {
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
    updateUsersPermissionsUser(id: $id, data: { secondary: $secondary }) {
      data {
        attributes {
          card
        }
      }
    }
  }
`;

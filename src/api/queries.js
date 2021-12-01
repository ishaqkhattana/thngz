/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      UserID
      Date
      Total
      createdAt
      updatedAt
      User {
        id
        FirstName
        LastName
        Phone
        Email
        ContactNumber
        StreetAddress
        City
        State
        ProfileImage
        createdAt
        updatedAt
        owner
      }
      Products {
        items {
          id
          Title
          Description
          Image
          Price
          createdAt
          updatedAt
        }
        nextToken
      }
      customer
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        UserID
        Date
        Total
        createdAt
        updatedAt
        User {
          id
          FirstName
          LastName
          Phone
          Email
          ContactNumber
          StreetAddress
          City
          State
          ProfileImage
          createdAt
          updatedAt
          owner
        }
        Products {
          nextToken
        }
        customer
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      FirstName
      LastName
      Phone
      Email
      ContactNumber
      StreetAddress
      City
      State
      ProfileImage
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        FirstName
        LastName
        Phone
        Email
        ContactNumber
        StreetAddress
        City
        State
        ProfileImage
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      Title
      Description
      Image
      Price
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Title
        Description
        Image
        Images
        Price
        Quantity
        Size
        Condition
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchProducts = /* GraphQL */ `
  query SearchProducts(
    $filter: SearchableProductFilterInput
    $sort: SearchableProductSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchProducts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        Title
        Description
        Size
        Image
        Images
        Price
        Quantity
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($customer: String) {
    onCreateOrder(customer: $customer) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($customer: String) {
    onUpdateOrder(customer: $customer) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($customer: String) {
    onDeleteOrder(customer: $customer) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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

/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      Images
      Price
      Quantity
      Size
      Condition
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
      Images
      Price
      Quantity
      Size
      Condition
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
      Images
      Price
      Quantity
      Size
      Condition
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($customer: String) {
    onCreateOrder(customer: $customer) {
      id
      UserID
      Cart
      Address
      Name
      PaymentOption
      Phone
      Email
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
      customer
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($customer: String) {
    onUpdateOrder(customer: $customer) {
      id
      UserID
      Cart
      Address
      Name
      PaymentOption
      Phone
      Email
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
      customer
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($customer: String) {
    onDeleteOrder(customer: $customer) {
      id
      UserID
      Cart
      Address
      Name
      PaymentOption
      Phone
      Email
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
      customer
    }
  }
`;

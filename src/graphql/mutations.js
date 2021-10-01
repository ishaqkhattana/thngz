/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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

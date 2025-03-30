import { gql } from "@apollo/client";

export const GET_ABOUT_US = gql`
 query {
  aboutUs {
    data {
      attributes {
        heading
        body
      }
    }
  }
}`;

export const GET_CARS_QUERY = gql`
  query {
    cars {
      data {
        id
        attributes {
          Title
          price
          used_status
          featured
          Car_Features {
            transmission
            exterior_color
            mileage
            mpg
            fuel_type
            drivetrain
            interior_color
            horsepower
          }
          car_Image {
            data {
              attributes {
                name
                width
                height
                formats
                hash
                mime
                url
                previewUrl
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CAR_BY_ID_QUERY = gql`
  query GetCarById($id: ID!) {
    car(id: $id) {
      data {
        id
        attributes {
          Title
          price
          used_status
          featured
          Body
          Car_Features {
            transmission
            exterior_color
            mileage
            mpg
            fuel_type
            drivetrain
            interior_color
            horsepower
          }
          car_Image {
            data {
              attributes {
                name
                width
                height
                formats
                hash
                mime
                url
                previewUrl
              }
            }
          }
        }
      }
    }
  }
`;
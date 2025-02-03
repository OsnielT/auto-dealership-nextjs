import type { Schema, Struct } from '@strapi/strapi';

export interface CarDetailsCarFeatures extends Struct.ComponentSchema {
  collectionName: 'components_car_details_car_features';
  info: {
    displayName: 'Car Features';
    icon: 'bulletList';
  };
  attributes: {
    drivetrain: Schema.Attribute.Enumeration<
      [
        'Front-wheel drive',
        'Rear-wheel drive',
        'All-wheel drive',
        'Four-wheel drive',
      ]
    >;
    exterior_color: Schema.Attribute.String;
    fuel_type: Schema.Attribute.Enumeration<
      ['Gasoline', 'Petrol', 'Electric', 'Diesel fuel', 'Ethanol', 'Biodiesel']
    >;
    horsepower: Schema.Attribute.Integer;
    interior_color: Schema.Attribute.String;
    mileage: Schema.Attribute.BigInteger;
    mpg: Schema.Attribute.Integer;
    transmission: Schema.Attribute.Enumeration<['Automatic', 'Manual']> &
      Schema.Attribute.DefaultTo<'Automatic'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'car-details.car-features': CarDetailsCarFeatures;
    }
  }
}

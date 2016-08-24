import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { CarsSchemaData } from './collection-schemas/car-schema';

export const Schema = {
	cars: new SimpleSchema(CarsSchemaData),
};
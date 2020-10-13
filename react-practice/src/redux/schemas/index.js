import { schema } from 'normalizr';

const IngredientsSchema = new schema.Entity('ingredients');

export const MenuSchema = new schema.Entity('menu', {
  ingredients: IngredientsSchema,
});

// console.log(`IngredientsSchema: `, IngredientsSchema);
// console.log(`MenuSchema: ` ,MenuSchema);

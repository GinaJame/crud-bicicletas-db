/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('bicicletas').del()
  await knex('bicicletas').insert([
    {color: 'Morado', modelo: 'Benotto todoterreno', lat: 19.289859, lon: -99.1402182},
    {color: 'Rosa', modelo: 'Ciudad verde', lat: 19.2894504, lon: -99.1401111}
  ]);
};

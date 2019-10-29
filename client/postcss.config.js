// if (process.env.NODE_ENV === 'production') {
//   module.exports = {
//     plugins: [
//       require('autoprefixer'), 
//       require('cssnano'),
//     ]
//   }
// }

module.exports = {
  plugins: [
    require("postcss-easy-import")({ prefix: "_" }), 
    require('cssnano')({
      preset: 'default',
    }),
    require("autoprefixer"), 
  ]
};
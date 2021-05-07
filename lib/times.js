import { Mongo } from 'meteor/mongo';

export const TimesCollectionAccess = new Mongo.Collection('times');
// TimesCollectionAccess.allow({
//   insert: function(){
//     return true;
//   },
//   update: function(){
//     return true;
//   },
//   remove: function(){
//     return true;
//   },
// });
//
// export {TimesCollectionAccess};

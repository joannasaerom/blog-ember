import Ember from 'ember';

export function postPreview(params/*, hash*/) {
  var paramsArray = params[0].split(/([.!?])\s/);
  var preview = paramsArray.splice(0, 20);
  for(var i=0; i<preview.length; i++) {
    if(i%2===1) {
      preview[i] = preview[i] + " ";
    }
  }
  var finalPreview = preview.join("");
  console.log(preview);
  return finalPreview;
}

export default Ember.Helper.helper(postPreview);

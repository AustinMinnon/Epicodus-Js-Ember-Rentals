import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },
    rentalSave1() {
      var params = {
        owner: this.get('owner') ? this.get('owner') : "troll",
        city: this.get('city') ? this.get('owner') : "",
        type: this.get('type') ? this.get('owner') : "Too poor for a camera :(",
        image: this.get('image') ? this.get('owner') : "Too poor for a camera :(",
        bedrooms: this.get('bedrooms') ? this.get('owner') : "",
      };
      this.set('addNewRental', false);
      this.sendAction('rentalSave2', params);
    }
  }
});

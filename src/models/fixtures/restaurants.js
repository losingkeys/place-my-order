import fixture from 'can-fixture';
import Restaurant from '../restaurant';

const store = fixture.store([{
  _id: 0,
  description: 'First item'
}, {
  _id: 1,
  description: 'Second item'
}], Restaurant.connection.algebra);

fixture('/api/restaurants/{_id}', store);

export default store;

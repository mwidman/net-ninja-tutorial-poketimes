
const initState = {
  posts: [
    {id: '1', title: 'Stuff', body: 'Lots of pokemon'},
    {id: '2', title: 'Evil Squirtles', body: 'Lots of pokemon'}
  ]
};

const rootReducer = (state=initState, action) => {
  return state;
}

export default rootReducer;
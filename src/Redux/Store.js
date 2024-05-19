// import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contactsSlice';

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
// });

// store.subscribe(() => {
//   localStorage.setItem(
//     'contacts',
//     JSON.stringify(store.getState().contacts.contacts)
//   );
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../Redux/contactsSlice';
import filterReducer from '../Redux/filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem('contacts', JSON.stringify(store.getState().contacts));
});

export default store;

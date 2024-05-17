import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './features/contacts/contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem(
    'contacts',
    JSON.stringify(store.getState().contacts.contacts)
  );
});

export default store;

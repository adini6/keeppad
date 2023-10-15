import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  export const putDb = async (content) => {
    try {
      const db = await openDB('jate', 1);
      const tx = db.transaction('jate', 'readwrite');
      tx.store.put(content);
      await tx.done;
    } catch (error) {
      console.error('Failed to put content into db:', error);
    }
  };
  
  export const getDb = async () => {
    try {
      const db = await openDB('jate', 1);
      return await db.getAll('jate');
    } catch (error) {
      console.error('Failed to get content from db:', error);
      throw error; 
    }
  };
  
initdb();

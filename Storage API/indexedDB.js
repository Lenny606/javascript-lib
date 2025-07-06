//low level API, can be saved lot of data
//not sql, but similar
//init
const open = indexedDB.open('users', 1);

open.onupgradeneeded = () => {
    const db = open.result;
    db.createObjectStore('users', { keyPath: 'id' });
}

open.onsuccess = () => {
    console.log('success myDB');
    const db = open.result;
    const transaction = db.transaction("users", "readwrite")
    const store = transaction.objectStore("users");

    store.put({
        id: 1,
        name: "jon",
        age: 99
    })
}

open.onerror = () => {
    console.error('error myDB');
}


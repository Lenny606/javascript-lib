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
    store.put({
        id: 2,
        name: "bill",
        age: 99
    })

    store.get(1).onsuccess = (user) => {
        console.log(user.target.result)
    }
    const user = store.get(2)
    user.onsuccess = () => {
        console.log(user.result)
    }
    store.getAll()

    transaction.oncomplete = () => {
        db.close()
    }
}

open.onerror = () => {
    console.error('error myDB');
}


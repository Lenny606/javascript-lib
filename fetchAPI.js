
export async function fetchData(uri) {
    try {
        const response = await fetch(uri);
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

//pouziti
// const url = 'https://api.example.com/data';
// fetchData(url)
//   .then(data => {
//     // Process the fetched data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle errors
//     console.error('Error:', error.message);
//   });



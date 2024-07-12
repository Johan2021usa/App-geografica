export default class Consultorio {
    
    async getAll() {
        try {
            const response = await fetch('http://localhost:3000/api/v1/consultorios/');
            if (!response.ok) {
                console.log("error1");
                throw new Error('Network response was not ok ' + response.statusText);
            }
            console.log(await response)
            return await response.json();
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            return [];
        }
    }

}
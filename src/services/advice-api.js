const URL = 'https://api.adviceslip.com/advice';

const adviceApi = {
    getAdvice() {
        return fetch(URL)
            .then(response => {
                return response.json();
            });
    }
};

export default adviceApi;
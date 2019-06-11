const URL = 'https://picsum.photos/440';

const picApi = {
    getPic() {
        return fetch(URL);
    }
};

export default picApi;
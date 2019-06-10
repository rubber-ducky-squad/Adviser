const URL = 'https://picsum.photos/300';

const picApi = {
    getPic() {
        return fetch(URL);
    }
};

export default picApi;
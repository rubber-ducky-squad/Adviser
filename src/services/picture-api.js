const URL = 'https://picsum.photos/500';

const picApi = {
    getPic() {
        return fetch(URL);
    }
};

export default picApi;
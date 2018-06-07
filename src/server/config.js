var config = {
    baseUrl: 'http://localhost:4400',
    apiKey: '{API_KEY}',
    searchUrl: 'http://api.walmartlabs.com/v1/search?query={searchTerm}&format=json&apiKey={apiKey}',
    testGet: 'http://localhost:8080/api/getProduct/',
    recommendationsUrl: 'http://api.walmartlabs.com/v1/nbp?apiKey={apiKey}&itemId={itemId}',
    productUrl: 'http://api.walmartlabs.com/v1/items/{itemId}?format=json&apiKey={apiKey}'
}

module.exports = config;

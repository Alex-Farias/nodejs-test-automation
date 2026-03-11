module.exports = {
    generateTestData: (overrides = {}) => {
        return {
            id: Math.floor(Math.random() * 1000),
            name: 'Sample Data',
            ...overrides,
        };
    },

    apiRequest: async (url, method = 'GET', body = null) => {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body) : null,
        };

        const response = await fetch(url, options);
        return response.json();
    },

    waitForElement: async (page, selector, timeout = 5000) => {
        await page.waitForSelector(selector, { timeout });
    },
};
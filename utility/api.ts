
export const getUserInfo = async (token: string) => {
    try {
        const response = await fetch('https://api.spotify.com/v1/me', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        const rawText = await response.text();

        if (!response.ok) {
            console.error(`HTTP Error: ${response.status}`);
            return null;
        }

        return JSON.parse(rawText);

    } catch (error) {
        console.error('Error fetching user info:', error);
        return null;
    }
};

export const getCategories = async (token: string) => {
    try {
        const response = await fetch('https://api.spotify.com/v1/browse/categories', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();

        if (!response.ok) {
            // console.error(`Error fetching categories: ${response.status}`);
            return null;
        }
        return data.categories.items;  // Return the categories list

    } catch (error) {
        // console.error('Error fetching categories:', error);
        return null;
    }
};

export const getCategoryData = async (token: string | null, id: string) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/browse/categories/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();

        if (!response.ok) {
            console.error(`Error fetching categoriesdata: ${response.status}`);
            return null;
        }
        return data;

    } catch (error) {
        console.error('Error fetching categoriesdata:', error);
        return null;
    }
};

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchData = async (url) => {
    try {
        const response = await fetch(url);

        // To Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
            console.error('API error:', data.error);
            return { results: [], error: data.error }; // Return empty results if API indicates an error
        }

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return { results: [], error: error.message };
    }
};


// Fetch characters with optional filters and pagination
export const getCharacters = async (page = 1, filters = {}) => {
    const { name, status, species, gender } = filters;

    let query = `?page=${page}`;

    if (name) {
        query += `&name=${name}`;
    }
    if (status) {
        query += `&status=${status}`;
    }
    if (species) {
        query += `&species=${species}`;
    }
    if (gender) {
        query += `&gender=${gender}`;
    }

    const url = `${BASE_URL}/character${query}`;
    const { results, error } = await fetchData(url);
    return { results, error };
};


// Fetch a specific character by ID
export const getCharacterById = async (id) => {
    return await fetchData(`${BASE_URL}/character/${id}`);
};

// Fetch locations with optional filters
export const getLocations = async (page = 1, name) => {
    let query = `?page=${page}`;
    if (name) {
        query += `&name=${name}`;
    }
    const data = await fetchData(`${BASE_URL}/location${query}`);
    return data;
};

// Fetch a specific location by ID
export const getLocationById = async (id) => {
    return await fetchData(`${BASE_URL}/location/${id}`);
};

// Fetch episodes with optional filters
export const getEpisodes = async (page = 1, name) => {
    let query = `?page=${page}`;
    if (name) {
        query += `&name=${name}`;
    }
    const data = await fetchData(`${BASE_URL}/episode${query}`);
    return data;
};

// Fetch a specific episode by ID
export const getEpisodeById = async (id) => {
    return await fetchData(`${BASE_URL}/episode/${id}`);
};

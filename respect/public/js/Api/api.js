export const fetchRandomImages = async () => {
    const url = 'https://picsum.photos/v2/list?page=2&limit=25';

    try {
      const response = await fetch(url);
      const data = await response.json();

      return data
    } catch (error) {

      console.error('Error fetching random images:', error);
      throw error;
    }
  };

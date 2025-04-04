const api_url = import.meta.env.VITE_API_URL; 

export const fetchIncome = async () => {
    try {
        const token = localStorage.getItem("token"); 

        const res = await fetch(`${api_url}/api/v1/get-income`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`, 
            },
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        return await res.json(); 
    } catch (error) {
        console.error('Error fetching income:', error);
        return [];
    }
};

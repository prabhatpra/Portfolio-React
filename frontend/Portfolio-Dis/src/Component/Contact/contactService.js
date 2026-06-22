export const sendContactMessage = async (data) => {
    console.log("Mode =", import.meta.env.MODE);
    console.log("All ENV =", import.meta.env);
    console.log("API URL =", import.meta.env.VITE_API_URL);
    
    try {
        const res = await fetch(
             
             `${import.meta.env.VITE_API_URL}/api/contacts`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        const contentType = res.headers.get("content-type");

        let responseData = null;
        
        if(contentType && contentType.includes("application/json")) {
            responseData = await res.json();
        }else {
            responseData = await res.text();
        }

        return {
            ok: res.ok,
            status: res.status,
            data: responseData,
        };

    } catch (error) {
        console.error("Contact API Error:", error);

        return {
            ok: false,
            status: 0,
            data: { message: "Network error" }
        };
    }
};
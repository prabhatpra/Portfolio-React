export const sendContactMessage = async (data) => {
    try {
        const res = await fetch(
            `http://localhost:8089/api/contact`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        let responseData = null;
        try {
            responseData = await res.json();
        } catch { }

        return {
            ok: res.ok,
            status: res.status,
            data: responseData,
        };

    } catch (error) {
        return {
            ok: false,
            status: 0,
            data: { message: "Network error" }
        };
    }
};
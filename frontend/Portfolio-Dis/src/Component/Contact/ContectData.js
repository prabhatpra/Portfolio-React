import { useState } from "react";

function ContactData() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponse("");

        try {
            const res = await fetch("http://localhost:8089/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            if (!res.ok) {
                throw new Error("Request failed");
            }

            let data = null;

            if (res.headers.get("content-type")?.includes("application/json")) {
                data = await res.json();
            }

            console.log("Backend response:", data);

            setResponse("Message sent successfully ✔️");

            // optional: reset form
            setForm({
                name: "",
                email: "",
                subject: "",
                message: ""
            });

        } catch (error) {
            console.log(error);
            setResponse("Something went wrong ❌");
        }

        setLoading(false);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Contact Form</h2>

            <form onSubmit={handleSubmit}>
                <input name="name" value={form.name} placeholder="Name" onChange={handleChange} />
                <br /><br />

                <input name="email" value={form.email} placeholder="Email" onChange={handleChange} />
                <br /><br />

                <input name="subject" value={form.subject} placeholder="Subject" onChange={handleChange} />
                <br /><br />

                <textarea name="message" value={form.message} placeholder="Message" onChange={handleChange} />
                <br /><br />

                <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send"}
                </button>
            </form>

            <p>{response}</p>
        </div>
    );
}

export default ContactData;
import { ApiResponse } from "./types";

export async function sendMail({
    mail,
    name,
    message,
}: {
    mail: string;
    name: string;
    message: string;
}): Promise<ApiResponse> {

    const response = await fetch("http://192.168.1.53:3002/api/mail", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: mail,
            expediteur: name,
            subject: "Contact depuis portfolio",
            message: message,
            website: "",
        }),
    });

    const data: ApiResponse = await response.json();

    if (!response.ok) {
        throw new Error(data.message.content);
    }

    return data;
}
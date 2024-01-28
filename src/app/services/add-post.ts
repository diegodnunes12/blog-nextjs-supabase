import { IPost } from "../types/post";

export async function addPost(post: IPost) {
    const headers = new Headers();
    headers.append("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwZXBkaGNzdWdqcWJnZ2FncmxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyNzI1NjIsImV4cCI6MjAyMTg0ODU2Mn0.bxb6n_c0mpurmVhHJm_ihrWuTjo4CnKCRpoHlFBUN7c");
    headers.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwZXBkaGNzdWdqcWJnZ2FncmxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyNzI1NjIsImV4cCI6MjAyMTg0ODU2Mn0.bxb6n_c0mpurmVhHJm_ihrWuTjo4CnKCRpoHlFBUN7c");
    headers.append("Content-Type", "application/json");
    headers.append("Prefer", "return=minimal");

    const response = await fetch(`https://apepdhcsugjqbggagrlg.supabase.co/rest/v1/posts?select=*`, {
        method: "POST",
        headers,
        body: JSON.stringify(post)
    });
    
    return await response.text();
}
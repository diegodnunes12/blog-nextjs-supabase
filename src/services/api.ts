import axios from "axios";

export const api = axios.create({
    baseURL: 'https://myjknkmhalerwfvzqzde.supabase.co/rest/v1',
    headers: {
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15amtua21oYWxlcndmdnpxemRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwNDQ1NjAsImV4cCI6MjAyMTYyMDU2MH0.ys8vdbnZ9miHM-1rl0dzHr0RUC2F0fSOwmt-e2TDMc8',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15amtua21oYWxlcndmdnpxemRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwNDQ1NjAsImV4cCI6MjAyMTYyMDU2MH0.ys8vdbnZ9miHM-1rl0dzHr0RUC2F0fSOwmt-e2TDMc8'
    }
})
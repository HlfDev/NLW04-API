import express from 'express';

const app = express();

// GET - SEARCH METHOD

// POST - SAVE METHOD

// PUT - CHANGE METHOD

// DELETE - DELETE METHOD

// PATCH - CHANGE SPECIFIC METHOD

// http://localhost:3333/

app.get("/", (request, response) => {
    return response.json({
        message:"Hello, World - NLW#04"
    });
})

app.post("/", (request, response) => {
    return response.json({
        message:"Os dados foram salvos com Sucesso!"
    });
})


app.listen(3333, () => console.log("Server is running!"));

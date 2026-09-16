from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def Home():
    return {"message": "Welcome to the FastAPI application!"}


@app.get("/about")
def About():
    return {"message": "This is a About page."}
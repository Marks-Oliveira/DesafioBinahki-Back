import app from "./index";

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      console.log(`Server is running`);
    } else {
      console.error(`Failure upon starting server`);
    }
});
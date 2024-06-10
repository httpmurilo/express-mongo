import moongose, { mongo } from "mongoose";


async function conectaNaDataBase() {
    mongoose.connect("mongodb+srv://admin:<password>@cluster0.0dgjke6.mongodb.net/?retryWrites=true&w=majority");
    return mongoose.connection;
}

export default conectaNaDataBase;
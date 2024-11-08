import mongoose, { Mongoose } from "mongoose";

const Movieschema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    ratings: { type: String, required: true, min: 1, max: 5 },
    money: {
        type: mongoose.Decimal128,
        required: true,
        validate: (v) => v >= 10,
    },
    genre: { type: Array },
    isActive: { type: Boolean },
    comment: [{ value: { type: String }, published: { type: Date, default: Date.now } }]
})

const movieModel = mongoose.model("Movie", Movieschema);

const createDoc = async () => {
    try {
        const m1 = new movieModel({
            name: "Extration 3",
            ratings: 4,
            money: 1234,
            genre: ['action', 'adventure'],
            isActive: true,
            comment: [{ value: "That's an amazing movie" }]
        })
        const m2 = new movieModel({
            name: "Home alone",
            ratings: 5,
            money: 84,
            genre: ['action', 'comedy'],
            isActive: true,
            comment: [{ value: "That's an amazing movie" }]
        })
        const m3 = new movieModel({
            name: "Me after you",
            ratings: 5,
            money: 94,
            genre: ['melodarama', 'happiness'],
            isActive: true,
            comment: [{ value: "That's an amazing movie" }]
        })
        const m4 = new movieModel({
            name: "titanic",
            ratings: 4,
            money: 4334,
            genre: ['drama', 'adventure'],
            isActive: true,
            comment: [{ value: "That's an amazing movie" }]
        })
        const m5 = new movieModel({
            name: "Extra",
            ratings: 2,
            money: 44,
            genre: ['comedy', 'adventure'],
            isActive: true,
            comment: [{ value: "That's an good movie" }]
        })
        const result = await movieModel.insertMany([m1, m2, m3, m4, m5])
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export { createDoc };
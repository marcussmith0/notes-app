const mongoose = require("mongoose");
const { Schema } = mongoose;

const simpleNoteSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },

    content: {
        type: String,
        required: true,
        minlength: 1
    },

    date: Date,
    _creator: {type: Schema.Types.ObjectId, ref: "User"}
});

mongoose.model("simplenotes", simpleNoteSchema);
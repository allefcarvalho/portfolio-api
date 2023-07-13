import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
    adult: Boolean,
    backdrop_path: String,
    genre_ids: { type: Array, "default": [] },
    id: Number,
    original_language: String,
    original_title: String,
    overview: String,
    popularity: Number,
    poster_path: String,
    release_date: String,
    title: String,
    video: Boolean,
    vote_average: Number,
    vote_count: Number,
    likes: Number,
});
import { Injectable } from '@nestjs/common';
import { Movie } from '../movie/movie';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Mongoose } from 'mongoose';
import { MovieSchema } from 'src/movies/schemas/movie.schema';
import { title } from 'process';

@Injectable()
export class MovieService {

    constructor(@InjectModel('Movie') private readonly movieModel: Model<Movie>) { }

    async getAll() {
        return await this.movieModel.aggregate().sort({'likes': -1}).exec();
    }

    async addLikes(movie: Movie) {
        const doc = await this.movieModel.findOne({ id: movie.id }).exec();
        if (!doc) {
            const createdMovie = new this.movieModel(movie);
            createdMovie.likes = 1;
            return await createdMovie.save();
        } else {
            await this.movieModel.updateOne({ id: movie.id }, { $inc: { likes: 1 } }).exec();
        }
    }
}

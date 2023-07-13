import { Injectable } from '@nestjs/common';
import { Movie } from '../movie/movie';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';

@Injectable()
export class MovieService {

    constructor(@InjectModel('Movie') private readonly movieModel: Model<Movie>) { }

    async getAll() {
        return await this.movieModel.find().exec();
    }

    async create(movie: Movie) {
        const doc = await this.movieModel.findOne({ id: movie.id }).exec();
        if(!doc){
            const createdMovie = new this.movieModel(movie);
            createdMovie.likes = 1;
            return await createdMovie.save();
        }else {
            await this.movieModel.updateOne({ id: movie.id }, {$inc: { likes: 1}}).exec();
        }

        return doc;
        
    }
}

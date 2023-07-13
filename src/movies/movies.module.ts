import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MovieService } from './shared/service/movie.service';
import { MovieSchema } from './schemas/movie.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Movie',
                schema: MovieSchema,
            },
        ]),
    ],
    controllers: [MoviesController],
    providers: [MovieService]
})
export class MoviesModule { }

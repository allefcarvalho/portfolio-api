import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovieService } from './shared/service/movie.service';
import { Movie } from './shared/movie/movie';

@Controller('movies')
export class MoviesController {

    constructor(private movieService: MovieService){}

    @Get()
    async getAll(): Promise<Movie[]>{
        return this.movieService.getAll();
    }

    @Post()
    async create(@Body() movie: Movie): Promise<Movie>{
        return this.movieService.create(movie);
    }
    
}

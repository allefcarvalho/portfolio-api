import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { MovieService } from './shared/service/movie.service';
import { Movie } from './shared/movie/movie';

@Controller('movies')
export class MoviesController {

    constructor(private movieService: MovieService){}

    @Get()
    async getAll(){
        return this.movieService.getAll();
    }

    @Post('/addlikes')
    async addLikes(@Body() movie: Movie): Promise<Movie>{
        return this.movieService.addLikes(movie);
    }
    
}

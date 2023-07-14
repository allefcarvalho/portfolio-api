import { Body, Controller, Delete, Get, Post, UseGuards} from '@nestjs/common';
import { MovieService } from './shared/service/movie.service';
import { Movie } from './shared/movie/movie';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('movies')
export class MoviesController {

    constructor(private movieService: MovieService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(){
        return this.movieService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post('/addlikes')
    async addLikes(@Body() movie: Movie): Promise<Movie>{
        return this.movieService.addLikes(movie);
    }
    
}

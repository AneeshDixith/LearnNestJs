import { Controller, Get, Query, Req, Post, Body } from '@nestjs/common';
import { CatsService } from '../Services/cats.service';
import { Cat } from '../Interfaces/Cat.interface';
import { CreateCatDto } from 'src/DTOs/create-cat.dto';


@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    async createCat(@Body()  createCatDto: CreateCatDto): Promise<string>{
        return this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}
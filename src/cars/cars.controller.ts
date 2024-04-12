import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';


@Controller('cars')
export class CarsController {

    constructor(private readonly carsService: CarsService) { }

    @Get()
    getAllCars() {
        return this.carsService.getAllCars();
    }

    @Post()
    createCar(@Body() body: CreateCarDto) {
        return this.carsService.createCar(body);
    }

    @Get(":id")
    getCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.getCar(id);
    }

    @Put(":id")
    updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() body: UpdateCarDto) {
        return this.carsService.updateCar(id, body);
    }

    @Delete(":id")
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.deleteCar(id);
    }
}
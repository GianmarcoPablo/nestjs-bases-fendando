import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from "uuid"

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Camry',
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic',
        }
    ]

    getAllCars() {
        return this.cars;
    }

    getCar(id: string) {
        const car = this.cars.find(car => car.id === id)

        if (!car) throw new NotFoundException(`Car with id ${id} not found`);

        return car;
    }

    createCar(body: any) {
        const newCar = { id: uuid(), ...body };
        this.cars.push(newCar);
        return newCar;
    }
    
    updateCar(id: string, body: any) {
        const car = this.getCar(id);
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        const index = this.cars.indexOf(car); // esto te da el indice del objeto en el array
        this.cars[index] = { ...car, ...body };
        return this.cars[index];
    }

    deleteCar(id: string) {
        const car = this.getCar(id);
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        this.cars = this.cars.filter(car => car.id !== id)
        return car;
    }
}

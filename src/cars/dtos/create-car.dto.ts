import { IsString, IsNotEmpty } from "class-validator";

export class CreateCarDto {

    @IsNotEmpty()
    @IsString()
    readonly brand: string;

    @IsNotEmpty()
    @IsString()
    readonly model: string;
}
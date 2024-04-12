import { IsString } from "class-validator";

export class UpdateCarDto {

    @IsString()
    readonly brand?: string;

    @IsString()
    readonly model?: string;
}
// src/employee/dto/create-employee.dto.ts
import { OmitType } from "@nestjs/mapped-types";
import { IsString, IsNotEmpty } from "class-validator";
import { EmployeeEntity } from "../entities/employee.entity";

export class CreateEmployeeDto extends OmitType(EmployeeEntity, [
  'id', 
  'createdAt', 
  'updatedAt',
] as const) {
  
 /*  @IsString()
  @IsNotEmpty()
  password: string; */ 
}

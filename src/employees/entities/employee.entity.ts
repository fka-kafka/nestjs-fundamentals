import { Employee } from "generated/prisma/client";
// import { Exclude } from 'class-transformer';
import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { EmployeeRole } from "./employee-role.enum";

export class EmployeeEntity implements Employee {
  id: string;
  
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(EmployeeRole, {
    message: 'Invalid role entered.'
  })
  role: EmployeeRole;
  
  createdAt: Date;
  updatedAt: Date;

  /* @Exclude() 
  password: string; */

  constructor(partial: Partial<EmployeeEntity>) {
    Object.assign(this, partial);
  }
}

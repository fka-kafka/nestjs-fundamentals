import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { DatabaseService } from '../database/database.service';
import { EmployeeRole } from './entities/employee-role.enum';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createEmployeeDto: CreateEmployeeDto) {
    return this.databaseService.employee.create({
      data: createEmployeeDto,
    })
  }

  async findAll(role?: EmployeeRole) {
    if (role) {
      return this.databaseService.employee.findMany({
        where: {
          role,
        }
      })
    }
    return this.databaseService.employee.findMany()
  }

  async findOne(id: string) {
    return this.databaseService.employee.findUnique({
      where: { id, }
    });
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return this.databaseService.employee.update({ where: { id: id, }, data: updateEmployeeDto });
  }

  async remove(id: string) {
    return this.databaseService.employee.delete({
      where: { id, }
    });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

import { Project } from './schemas/projects.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private readonly projectModel: Model<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    try {
      const result = await this.projectModel.create(createProjectDto);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    const result = await this.projectModel.find().exec();
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  async remove(id: string) {
    try {
      const result = await this.projectModel.deleteOne({ _id: id });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

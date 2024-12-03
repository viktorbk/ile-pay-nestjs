import { Injectable, Logger } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse, AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

import { Project } from './schemas/projects.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProjectsService {
  private readonly logger = new Logger(ProjectsService.name);

  constructor(
    @InjectModel(Project.name) private readonly projectModel: Model<Project>,
    private readonly httpService: HttpService,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    try {
      const result = await this.projectModel.create(createProjectDto);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async findAllNitro() {
    const { data } = await firstValueFrom(
      this.httpService.get<Project[]>('https://ile.nitrots.com/api/projects', {
        headers: {'Authorization': '2fa7c816e1766bc1341a254f407a60b7613c6e5f'},
      }).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }

  async findAll() {
    const result = await this.projectModel.find().exec();
    return result;
  }

  async findOne(id: string) {
    const result = await this.projectModel.find({ nr: id }).exec();
    return result;
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

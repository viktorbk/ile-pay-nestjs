import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop()
  nr: number;

  @Prop()
  name: string;

  @Prop()
  desscription: string;

  @Prop()
  company: string;

  @Prop()
  from: string;

  @Prop()
  to: string;

  @Prop()
  customer: string;

  @Prop()
  price: number;

  @Prop()
  commission: number;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

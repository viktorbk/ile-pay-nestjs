import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop()
  licence: string;

  @Prop()
  name: string;

  @Prop()
  pax: number;

  @Prop()
  price: number;
}

export const CatSchema = SchemaFactory.createForClass(Cat);

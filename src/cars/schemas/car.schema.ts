import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';

export type CatDocument = HydratedDocument<Car>;

@Schema()
export class Car {
  //@Prop({ type: SchemaTypes.ObjectId })
  //_id: Types.ObjectId;

  @Prop()
  licence: string;

  @Prop()
  name: string;

  @Prop()
  pax: number;

  @Prop()
  price: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);

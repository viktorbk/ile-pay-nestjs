export class CreateProjectDto {
  readonly nr: number;
  readonly company: string;
  readonly name: string;
  readonly desscription: string;
  readonly from: string;
  readonly to: string;
  readonly customer: string;
  readonly price: number;
  readonly commission: number;
}

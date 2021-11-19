import { Prisma } from '.prisma/client';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { OrderByParams } from 'src/graphql';
import { DonationsService } from './donations.service';

@Resolver('Donation')
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Mutation('createDonation')
  create(
    @Args('createDonationInput')
    createDonationInput: Prisma.DonationCreateInput,
  ) {
    return this.donationsService.create(createDonationInput);
  }

  @Query('donations')
  findAll(@Args('orderBy') orderBy?: OrderByParams) {
    return this.donationsService.findAll(orderBy);
  }

  @Query('donation')
  findOne(@Args('id') id: number) {
    return this.donationsService.findOne({ id });
  }
}

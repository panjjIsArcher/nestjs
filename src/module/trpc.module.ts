import { Module, NestModule, Inject, MiddlewareConsumer } from '@nestjs/common';
import { ITrpcModuleOptions, TRPC_PREFIX_TOKEN } from 'src/trpc.interface';

@Module({})
export class tRPCModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    throw new Error('Method not implemented.');
  }
  @Inject(TRPC_PREFIX_TOKEN)
  private readonly prefix: ITrpcModuleOptions['prefix'];
}

import { Inject, NestMiddleware } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { ITrpcModuleOptions, TRPC_ROUTER_TOKEN } from 'src/trpc.interface';

export class tRPCMiddleware implements NestMiddleware {
  @Inject(TRPC_ROUTER_TOKEN)
  private readonly router!: ITrpcModuleOptions['router'];

  constructor(private readonly moduleRef: ModuleRef) {}
  use(req: any, res: any, next: (error?: Error | any) => void) {}
}

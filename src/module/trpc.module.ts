import {
  Module,
  NestModule,
  Inject,
  MiddlewareConsumer,
  DynamicModule,
} from '@nestjs/common';
import { tRPCMiddleware } from 'src/middleware/trpc.middleware';
import { ITrpcModuleOptions, TRPC_PREFIX_TOKEN } from 'src/trpc.interface';

@Module({})
export class tRPCModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 绑定tRPC中间件并指定路由前缀
    consumer.apply(tRPCMiddleware).forRoutes(this.prefix);
  }

  // 依赖注入prefix
  @Inject(TRPC_PREFIX_TOKEN)
  private readonly prefix: ITrpcModuleOptions['prefix'];

  static forRoot(options: ITrpcModuleOptions): DynamicModule {
    if (!options.prefix || !options.router) {
      throw new Error('请指定路由和前缀');
    }
    return {
      module: tRPCModule,
      providers: [
        { provide: TRPC_PREFIX_TOKEN, useValue: options.router },
        { provide: TRPC_PREFIX_TOKEN, useValue: options.prefix },
      ],
    };
  }
}

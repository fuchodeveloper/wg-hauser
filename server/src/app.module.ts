import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { HelloResolver } from './resolvers/hello.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['src/graphql/*.graphql'],
      // typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql/types.ts'),
      },
      playground: true,
    }),
  ],
  providers: [HelloResolver],
})
export class AppModule {}

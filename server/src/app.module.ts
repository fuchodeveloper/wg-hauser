import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql/types.ts'),
      },
      playground: true,
    }),
  ],
})
export class AppModule {}

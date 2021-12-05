import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Hello')
export class HelloResolver {
  @Query()
  hello() {
    return 'hello world';
  }
}

import { ClassWithImports } from '../dto/classWithImports';
import type { Import } from '../dto/import';
import type { Clazz } from '../dto/class';
import type { SubgraphResolver } from './subgraphResolver';
import type { Context } from './types';

export class DependencyResolver {
  constructor(private subgraphResolver: SubgraphResolver) { }

  public resolve(context: Context, clazz: Clazz, imports: Import[]) {
    const classWithImports = new ClassWithImports(clazz, imports, context.physicalFilename!);
    return [
      ...this.getGraphDependencies(classWithImports),
      ...this.getDependenciesFromSubgraphs(classWithImports),
    ];
  }

  private getDependenciesFromSubgraphs(clazz: ClassWithImports): string[] {
    return this.subgraphResolver
      .resolve(clazz)
      .flatMap(this.getGraphDependencies);
  }

  private getGraphDependencies({ clazz }: ClassWithImports) {
    return clazz
      .getDecoratedMethods('Provides')
      .map((method) => method.name);
  }
}
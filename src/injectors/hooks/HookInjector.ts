import { Constructable } from '@Obsidian';
import ObjectGraph from 'src/graph/ObjectGraph';
import useGraph from '../components/useGraph';

export default class HookInjector {
  inject<Args, Result>(
    hook: (args: Args) => Result,
    Graph: Constructable<ObjectGraph>,
  ): (args?: Partial<Args>) => Result {
    return (args?: Partial<Args>): Result => {
      const graph = useGraph(Graph);
      return hook(new Proxy(args ?? {}, new Injector(graph)));
    };
  }
}

class Injector implements ProxyHandler<any> {
  constructor(private graph: ObjectGraph) {}

  get(obj: any, property: string, receiver: any): any {
    return property in obj ? obj[property] : this.graph.retrieve(property, receiver);
  }
}

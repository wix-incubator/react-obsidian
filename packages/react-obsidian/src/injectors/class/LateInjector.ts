import { isString } from 'lodash';
import { ObjectGraph } from '../../graph/ObjectGraph';
import graphRegistry from '../../graph/registry/GraphRegistry';
import InjectionMetadata from './InjectionMetadata';
import {Reflect} from '../../utils/reflect';

export const GRAPH_INSTANCE_NAME_KEY = 'GRAPH_INSTANCE_NAME';

class LateInjector<T extends object> {
  inject(target: T, keyOrGraph?: string | ObjectGraph): T {
    if (keyOrGraph) graphRegistry.ensureRegistered(keyOrGraph);
    const injectionMetadata = new InjectionMetadata();
    const graph = this.getGraph(target, keyOrGraph);
    injectionMetadata.getLatePropertiesToInject(target.constructor).forEach((key) => {
      Reflect.set(target, key, graph.retrieve(key));
    });
    return target;
  }

  private getGraph(target: T, keyOrGraph?: string | ObjectGraph) {
    if (keyOrGraph instanceof ObjectGraph) return keyOrGraph;
    if (isString(keyOrGraph)) return graphRegistry.resolve(keyOrGraph, 'classInjection');
    return this.getGraphInstance(target);
  }

  private getGraphInstance(target: T) {
    const graphInstanceName = Reflect.getMetadata(GRAPH_INSTANCE_NAME_KEY, target.constructor);
    return graphRegistry.getGraphInstance(graphInstanceName);
  }
}

export default new LateInjector();

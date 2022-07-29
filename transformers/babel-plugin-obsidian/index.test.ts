import * as babel from '@babel/core';
import providerArgumentsTransformer from './index';

const unnamedProvider = `class MainGraph {
  @Provides()
  someString(stringProvider, emptyString) {
    return stringProvider.theString + emptyString;
  }
}`;

const namedProvider = `class MainGraph {
  @Provides({name: 'myDependency'})
  someString(stringProvider) {
    return stringProvider.theString;
  }
}`;

const noArgsProvider = `class MainGraph {
  @Provides()
  someString() {
    return 'someString';
  }
}`;

const unnamedConstructorInject = `class MainGraph {
  constructor(@Inject() arg) {}
}`;

const unnamedInject = `class MainGraph {
  @Inject() someString;
}`;

const namedInject = `class MainGraph {
  @Inject('myDependency') someString;
}`;

const unnamedLazyInject = `class MainGraph {
  @LazyInject() someString;
}`;

const namedLazyInject = `class MainGraph {
  @LazyInject('myDependency') someString;
}`;

describe('Provider Arguments Transformer', () => {
  const uut: Function = providerArgumentsTransformer;

  it('Adds method name to provider arguments (@Provider() -> @Provider({name: "myProvidedDependency"})', () => {
    const result = transformSync(unnamedProvider);
    expect(result?.code).toMatchSnapshot();
  });

  it('Does not add name if name is provided by the user', () => {
    const result = transformSync(namedProvider);
    expect(result?.code).toMatchSnapshot();
  });

  it('handles providers that have no arguments', () => {
    const result = transformSync(noArgsProvider);
    expect(result?.code).toMatchSnapshot();
  });

  it('saves constructor argument name in Inject - @Inject -> @Inject(arg)', () => {
    const result = transformSync(unnamedConstructorInject);
    expect(result?.code).toMatchSnapshot();
  });

  it('Adds property name to @Inject arguments @Inject -> @Inject("myDependency")', () => {
    const result = transformSync(unnamedInject);
    expect(result?.code).toMatchSnapshot();
  });

  it('Does not add property name to @Inject if name is provided by the user', () => {
    const result = transformSync(namedInject);
    expect(result?.code).toMatchSnapshot();
  });

  it('Adds property name to @LazyInject arguments @LazyInject -> @LazyInject("myDependency")', () => {
    const result = transformSync(unnamedLazyInject);
    expect(result?.code).toMatchSnapshot();
  });

  it('Does not add property name to @LazyInject if name is provided by the user', () => {
    const result = transformSync(namedLazyInject);
    expect(result?.code).toMatchSnapshot();
  });

  const transformSync = (snippet: string) => babel.transformSync(snippet, {
    plugins: [
      'babel-plugin-typescript-decorators',
      uut,
    ],
    ast: true,
    configFile: false,
  });
});

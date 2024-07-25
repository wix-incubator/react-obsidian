import { ESLintUtils, type TSESLint } from '@typescript-eslint/utils';
import type { RuleContext } from '@typescript-eslint/utils/ts-eslint';
import { create } from './createRule';
import {Context} from '../../dto/context';

export type Options = readonly [
  {
    injectedPropsPattern: string;
  },
];

type Rule = TSESLint.RuleModule<'strongly-typed-inject-component', Options>;

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://wix-incubator.github.io/obsidian/docs/documentation/meta/eslint#${name}`,
);

export const stronglyTypedInjectComponentGenerator = () => {
  return createRule({
    create: (context: RuleContext<'strongly-typed-inject-component', Options>, options: Options) => {
      return create(new Context<'strongly-typed-inject-component', Options>(context), options);
    },
    name: 'strongly-typed-inject-component',
    meta: {
      docs: {
        description: 'Calling injectComponent without prop types is a bad practice and a common source of bugs.',
        recommended: 'strict',
      },
      messages: {
        'strongly-typed-inject-component': 'The call to injectComponent is missing prop types. It should be typed as: {{expectation}}',
      },
      schema: [
        {
          type: 'object',
          properties: {
            injectedPropsPattern: {
              type: 'string',
            },
          },
          additionalProperties: false,
        },
      ],
      type: 'problem',
    },
    defaultOptions: [
      {
        injectedPropsPattern: '/\\b(Injected|InjectedProps)\\b/',
      },
    ],
  }) satisfies Rule;
};
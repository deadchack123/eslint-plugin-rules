module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: 'не используйте "as jest.mock"',
      category: "Best Practices",
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      TSAsExpression(node) {
        if (
          node.typeAnnotation?.typeName?.left?.name === "jest" &&
          node.typeAnnotation?.typeName?.right?.name === "Mock"
        ) {
          context.report({
            node,
            message: 'не используйте "as jest.mock"',
          });
        }
      },
    };
  },
};

const path = require(`path`);
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
      graphql(`
        {
            allStrapiWork(filter: { locale: { eq: "en" } }) {
            edges {
                node {
                  id
                  slug
                }
            }
          }
        }
      `).then(result => {
        result.data.allStrapiWork.edges.forEach(({ node }) => {
          createPage({
            path: `/works/${node.slug}`,
            component: path.resolve(`./src/components/work.js`),
            context: {
              slug: { id: node.id },
            },
          });
        });
        resolve();
      });
    });
  };
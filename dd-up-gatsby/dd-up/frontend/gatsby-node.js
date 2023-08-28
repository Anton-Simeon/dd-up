const path = require(`path`);
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
      graphql(`
        {
            allStrapiWork(filter: { locale: { eq: "en" } }){
            edges {
                node {
                  strapi_id
                  slug
                  localizations {
                    data {
                      id
                    }
                  }
                }
            }
          }
        }
      `).then(result => {
        result.data.allStrapiWork.edges.forEach(({ node }) => {


          createPage({
            path: `/works/${node.slug}`,
            component: path.resolve(`./src/templates/work.js`),
            context: {
              slug: node.slug
            },
          });



        });
        resolve();
      });
    });
  };
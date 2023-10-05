/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
 const path = require('path');

 exports.createPages = async ({ graphql, actions }) => {
   const { createPage } = actions;
 
   return new Promise((resolve, reject) => {
     graphql(`
       {
         allContentfulBlogPost {
           edges {
             node {
               id
               slug
             }
           }
         }
       }
     `).then((result) => {
       if (result.errors) {
         reject(result.errors);
       }
 
       result.data.allContentfulBlogPost.edges.forEach((edge) => {
         createPage({
           path: edge.node.slug,
           component: path.resolve('./src/templates/blog-post.js'), // Use path.resolve to provide the correct file path
           context: {
             slug: edge.node.slug,
           },
         });
       });
 
       resolve();
     });
   });
 };
 

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Article {
    id: Int!
    title: String!
    date: String!
    introduction: String!
    category: String
    isRead: Boolean!

  }

  type ArticleContent {
    id: Int!
    html: String!
  }

  type Category {
    id: Int!
    title: String!
    date: String!
    introduction: String!
    category: String
    isRead: Boolean!
    num: Int!,
    name: String!
  }
  type userInfo {
    projectid:Int!
    projectName:String!
    engineversion:String!
    toolversion:String!
    PREVIEWSTATUS:String!
    DEPLOYSTATUS:String!
    BUSINESSTYPE:String!
    BUSINESSTYPEID:String!
    CONFIGEXTENDID:String!
    crearedBy:String!
    createdDate:String!
    editBy:String!
    editDate:String!
    isDelete:Int!

  }

  type Message {
    message: String
  }


  type Query {
    fetchArticles: [Article]
    getAllCategories: [Category]
    getArticleContent(id: Int!): ArticleContent
    getUserInfo:[userInfo]
  }

  type Mutation {
    articleIsRead(id: Int!): Article
    userInfoDelete(projectid:Int!): Message
  }
`

module.exports = typeDefs;

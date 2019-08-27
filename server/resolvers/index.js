const articles = require("../data/articles.json");
const articleContent = require("../data/articleContent.json");
const userInfo = require('../data/userInfo.json')

const message = {message: 'sucess'};

const resolvers = {
  Query: {
    fetchArticles() {
      return articles;
    },
    getAllCategories() {
      // return articles.map(item => {
      //   if (item.)
      // })
      const art =  articles.reduce((pre, cur) => {
        const cate = pre.find(_ => _.name === cur.category);
        if (cate) {
          cate.num++;
        } else {
          const obj = {
            name: cur.category,
            num: 1
          };
          Object.assign(obj, cur)
          pre.push(obj);
        }
        return pre;
      }, [])
      return art;
    },
    getArticleContent(_, { id }) {
      return articleContent.find(val => val.id === id);
    },
    getUserInfo(){
      const userList = []
      userInfo.map(item =>{ 
        if(item.isDelete === 0){
          userList.push(item)
        }
      })
      return userList
    }
  },

  Mutation: {
    articleIsRead(_, { id }) {
      const article = articles.find(val => val.id === id);
      
      if (!article) {
        throw new Error(`找不到id为 ${id} 的文章`);
      }

      if (article.isRead) {
        return article;
      }

      article.isRead = true;

      return article;
    },
    userInfoDelete(_, { projectid }){
      console.log(projectid);
      
      const user = userInfo.find(val => val.projectid === projectid);
      console.log(user.isDelete);
      if (user.isDelete == 0 ) {
        user.isDelete = 1
        message.message = '删除成功'

        return message
        

      }else {
        console.log(message)
        message.message = '已经删除过请刷新'

        return message
       


      }
      


      
    }
  }
}

module.exports = resolvers;

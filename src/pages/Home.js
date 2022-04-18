import React from 'react'
import axios from 'axios'
import Article from '../components/Article'

export default function Home() {
  const [articles, setArticles] = React.useState(() => {
    return localStorage.getItem('articles') ? JSON.parse(localStorage.getItem('articles')) : []
  })
  const apiKey = '11182b6aec6e4c44b4ab802adbda59c4'
  
  React.useEffect(() => {
    axios(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`)
      .then(res => setArticles(res.data.articles))
      .catch(err => console.log(err))

  }, [])

  React.useEffect(() => {
    localStorage.setItem('articles', JSON.stringify(articles))
  }, [articles])

  console.log(articles)

  const getArticles = articles.map(article => {
    return <div><Article key={article.title} article={article} /></div>
  })
  return (
    <>
        

<main>
  <div class="album py-3 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        {getArticles}
      </div>
    </div>
  </div>

</main>
    </>
  )
}

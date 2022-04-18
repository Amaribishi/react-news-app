import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Article() {
  const {article} = useParams()
  const [articles, setArticles] = React.useState([])


  const apiKey = '11182b6aec6e4c44b4ab802adbda59c4'

  React.useEffect(() => {
    axios(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`)
      .then(res => setArticles(res.data.articles))
      .catch(err => console.log(err))

  }, [])

  const getArticle = articles.map(ar => {
    if(ar.title === article){
      return <div>
        <img src={ar.urlToImage} className="img-fluid"/>
        <h3>{ar.title}</h3>
        <p>{ar.description}</p>
        <p>Source: <strong>{ar.source.name}</strong></p>
      </div>
    }
  })


  return (
    <div>{getArticle}</div>
  )
}

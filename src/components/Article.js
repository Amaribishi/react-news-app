import React from 'react'
import { Link } from 'react-router-dom'

export default function Article({article}) {
  return (
    <div class="col">
          <div class="card shadow-sm">
            <img src={article.urlToImage} alt={article.title}/>
            <div class="card-body">
              <Link to={article.title} ><p class="card-text">{article.title}</p></Link>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

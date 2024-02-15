import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {Result} from '../interfaces/Articles';
import { Col, Row } from "react-bootstrap";

import Card from 'react-bootstrap/Card';


interface params {
    articleId : string
}
const Detail= ()=>{
    const params = useParams()
    const [articles, setArticles]= useState<Result>()
    console.log(params)
    
    
    const articlesFetch = ()=>{
        fetch("https://api.spaceflightnewsapi.net/v4/articles/" + params.articleId)
        .then((response)=>{
            if(response.ok){
                return response.json()
            }else{
                throw new Error()
            }
        })
        .then((data)=>{
            console.log(data)
            setArticles(data)
        })
        .catch((err)=>{
            console.log("prima fetch anddata male", err)
        })
    }


    useEffect(()=> {articlesFetch()}, [])


    return(
        <Row>
            <Col>
            <Card >
      <Card.Img variant="top" src={articles?.image_url} />
      <Card.Body>
        <Card.Title>{articles?.title}</Card.Title>
        <Card.Text>
          {articles?.summary}
        </Card.Text>
        <Card.Text>
          {articles?.news_site}
        </Card.Text>
        <Card.Text>
          {articles?.url}
        </Card.Text>

      </Card.Body>
    </Card>
                    
            </Col>
        </Row>
    )
}
export default Detail
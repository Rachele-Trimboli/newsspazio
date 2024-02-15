import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

import {Result} from '../interfaces/Articles';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Articles = ()=>{

    const [articles, setArticles]= useState<Result[]>([])

    const articlesFetch = ()=>{
        fetch("https://api.spaceflightnewsapi.net/v4/articles")
        .then((response)=>{
            if(response.ok){
                return response.json()
            }else{
                throw new Error()
            }
        })
        .then((data)=>{
            console.log(data)
            setArticles(data.results)
        })
        .catch((err)=>{
            console.log("prima fetch anddata male", err)
        })
    }


    useEffect(()=> {articlesFetch()}, [])

    return (
        <Row className='g-3'>
          {articles.map((art) =>
          <Col className='col-4 ' key={art.id}>
            
           <Card className='h-100 '>
           <Card.Img variant="top" src={art.image_url} />
           <Card.Body className='d-flex flex-column justify-content-evenly'>
           <Link to={"/detail/" + art.id}>
             <Card.Title>{art.title}</Card.Title>
             </Link>
             <Card.Text>{art.news_site}</Card.Text>
             <Card.Text>{art.url}</Card.Text>
           </Card.Body>
           
         </Card>
         
         </Col>
          )}
        </Row>
      );

}
export default Articles
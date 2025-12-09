import json
import os
from typing import Dict, Any
from urllib.request import urlopen, Request
from urllib.error import HTTPError, URLError

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Загружает отзывы организации с Яндекс.Карт
    Параметры: organization_id - ID организации в Яндекс.Картах
    Возвращает: список отзывов с рейтингом, текстом и автором
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    params = event.get('queryStringParameters', {})
    organization_id = params.get('organization_id', '')
    
    if not organization_id:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'organization_id parameter is required'}),
            'isBase64Encoded': False
        }
    
    api_key = os.environ.get('YANDEX_API_KEY', '')
    
    if not api_key:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'YANDEX_API_KEY not configured'}),
            'isBase64Encoded': False
        }
    
    try:
        url = f'https://search-maps.yandex.ru/v1/?text={organization_id}&type=biz&lang=ru_RU&apikey={api_key}'
        
        req = Request(url)
        req.add_header('User-Agent', 'Mozilla/5.0')
        
        with urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode('utf-8'))
        
        features = data.get('features', [])
        if not features:
            return {
                'statusCode': 404,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Organization not found'}),
                'isBase64Encoded': False
            }
        
        org_data = features[0].get('properties', {}).get('CompanyMetaData', {})
        reviews_data = org_data.get('Reviews', [])
        
        reviews = []
        for review in reviews_data:
            reviews.append({
                'rating': review.get('rating', 5),
                'text': review.get('text', ''),
                'author': review.get('author', {}).get('name', 'Аноним'),
                'date': review.get('updatedAt', '')
            })
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'reviews': reviews,
                'total': len(reviews)
            }),
            'isBase64Encoded': False
        }
        
    except HTTPError as e:
        return {
            'statusCode': e.code,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'API error: {e.reason}'}),
            'isBase64Encoded': False
        }
    except URLError as e:
        return {
            'statusCode': 503,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Service unavailable'}),
            'isBase64Encoded': False
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }

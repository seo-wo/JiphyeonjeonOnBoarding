import { Router } from 'express';
import { search } from '../books/books.controller';

const router = Router();
const path = '/books'

router.get('/search', search);
//  .get('/create', create); 이런식으로 추가할 수 있습니다.

export { path, router };
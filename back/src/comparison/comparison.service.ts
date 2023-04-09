import { Injectable } from '@nestjs/common';
import {compareData} from '../Dto/compareData.dto'
const natural = require('natural')


const tokenizer = new natural.WordTokenizer();
@Injectable()
export class ComparisonService {

    CompareParagraphs(data: compareData):any{
        //Compare the two paragraphs passed in data
        //tokenize 
        //stem
        
        const tokenized1 = tokenizer.tokenize(data.firstParagraph);
        const tokenized2 = tokenizer.tokenize(data.secondParagraph);
        //const distance =natural.JaroWinklerDistance(tokenized1,tokenized2)
        //this ^^^^^ dont work with more than 9 words prolly
        // article: https://blog.logrocket.com/natural-language-processing-node-js/
        //docs: https://naturalnode.github.io/natural/development.html
        // console.log(distance);
        // return distance;
    }
}

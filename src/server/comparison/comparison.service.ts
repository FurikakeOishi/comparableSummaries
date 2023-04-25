import { ConsoleLogger, Injectable } from '@nestjs/common';
import {compareData} from '../Dto/compareData.dto'
const stringSimilarity = require("string-similarity");


@Injectable()
export class ComparisonService {

    CompareParagraphs(data: compareData): number{
        try{
        const distance = stringSimilarity.compareTwoStrings(data.firstParagraph,data.secondParagraph);
        console.log('distance'+distance);
         return distance;
        }
        catch(error){
              throw error;
        }
    }
}

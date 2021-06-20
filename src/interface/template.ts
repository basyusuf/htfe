import { TemplateTypes } from '../templates/TemplateTypes';
import { ISection } from './section';

export interface ITemplate {
    type: TemplateTypes;
    sections: Array<ISection>;
}

import { ITemplate } from './template';
import { IVariable } from './variable';

export interface IPayload {
    variables?: Array<IVariable>;
    template: ITemplate;
}

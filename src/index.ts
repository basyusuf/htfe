import htfe from './htfe';
import { IPayload } from './interface/payload';
import { TemplateTypes } from './templates/TemplateTypes';

let payload: IPayload = {
    variables: [
        { key: 'header', value: 'Company Name' },
        { key: 'username', value: 'Yusuf Baş' },
    ],
    template: {
        type: TemplateTypes.forgot_password_one,
        sections: [
            {
                target: 'top_area',
                text: '{{header}}',
            },
            {
                target: 'forgot_message',
                text: 'Şifreyi mi unuttun {{username}}?',
            },
            {
                target: 'href',
                text: 'http://www.github.com/basyusuf',
            },
        ],
    },
};
let htfeResult = htfe(payload);
console.info('Htfe Result:', htfeResult);

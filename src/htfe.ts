import { IPayload } from './interface/payload';
import { IVariable } from './interface/variable';
import { ForgotPasswordOne } from './templates/ForgotPasswordOne';
import { ISection } from './interface/section';
import { TemplateTypes } from './templates/TemplateTypes';
import { VerifyEmailOne } from './templates/VerifyEmailOne';

const htfe = (payload: IPayload) => {
    let editedPayload = convertVariablesToItem(payload);
    console.info('Edited Payload:', JSON.stringify(editedPayload));
    switch (payload.template.type) {
        case TemplateTypes.forgot_password_one:
            return ForgotPasswordOne(payload);
        case TemplateTypes.verify_email_one:
            return VerifyEmailOne(payload);
        default:
            throw Error('Unsportted type. Please check types');
    }
};
const convertVariablesToItem = (payload: IPayload) => {
    let convertedPayload = payload;
    if (payload.variables.length > 0 && payload.template.sections.length > 0) {
        payload.variables.map((variable_item: IVariable) => {
            payload.template.sections.map((section_item: ISection, index) => {
                let section_text = section_item.text;
                let check_variables_in_section = [...new Set(section_text.match(new RegExp(/{{\w+}}/g)))];
                check_variables_in_section.map((section_variable) => {
                    let deletedCurly = deleteCurlyBraces(section_variable);
                    if (variable_item.key == deletedCurly) {
                        section_text = replaceAll(section_text, section_variable, variable_item.value);
                    }
                });
                payload.template.sections[index].text = section_text;
            });
        });
    }
    return convertedPayload;
};
const deleteCurlyBraces = (text: string): string => {
    return text.substring(2, text.length - 2);
};
const replaceAll = (str: string, regex: string, replace: string | number): string => {
    return str.replace(new RegExp(regex, 'g'), String(replace));
};

export default htfe;

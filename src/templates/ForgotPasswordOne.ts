import { ISection } from '../interface/section';
import { IPayload } from '../interface/payload';

export interface IFargotPassword {
    [key: string]: string;
    top_area: string;
    forgot_message: string;
    button_top_text: string;
    button_text: string;
    href: string;
    button_alt_text: string;
    alt_information: string;
    footer: string;
}
export const ForgotPasswordOne = (payload: IPayload): string => {
    let default_values: IFargotPassword = {
        top_area: 'Company Name',
        forgot_message: 'FORGOT YOUR PASSWORD?',
        button_top_text: "Let's get yoy a new password",
        button_text: 'Reset My Password!',
        href: 'http://wwww.google.com',
        button_alt_text: 'If you didn’t request to change your password, simply ignore this email.',
        alt_information:
            'This link will expire in 24 hours. If you continue to have problems please feel free to contact us at support@youremail.com',
        footer: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    };
    let sections = payload.template.sections;
    sections.map((section_item: ISection) => {
        if (default_values.hasOwnProperty(section_item.target)) {
            default_values[section_item.target] = section_item.text;
        }
    });
    console.info('Values:', default_values);
    return codeBuild(default_values);
};
const codeBuild = (values: IFargotPassword): string => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
            integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
        <title>Forgot Password!</title>
        <style>
            .topBar {
                text-align: center;
                padding-top: 10px;
                margin-bottom: 20px;
                font-size: 1.4em;
                background-color: white;
            }
    
            .mainGrid {
                background-color: #85A3CD;
            }
    
            .forgotMessage {
                margin-top: 10px;
                margin-bottom: 10px;
                text-align: center;
                font-size: 1.2em;
                color: white;
                font-weight: bold;
            }
    
            .forgotImage {
                text-align: center;
            }
    
            .forgotImage img {
                max-width: 100%;
                height: auto;
                max-height: 30%;
                user-select: none;
            }
    
            .altText {
                margin-top: 5px;
                color: #3f4d75;
                text-align: center;
                font-size: 1.1em;
            }
    
            .clickArea {
                margin-top: 30px;
                margin-bottom: 30px;
                text-align: center;
            }
    
            .informationText {
                font-size: 0.9em;
                text-align: center;
                color: #3f4d75;
                margin-top: 20px;
                padding-bottom: 50px;
            }
    
            .footer {
                background-color: #c4d6ec;
                padding: 20px;
                font-size: 0.8em;
                text-align: center;
            }
    
            .endBottom {
                text-align: center;
                font-size: 0.7em;
                padding-top: 15px;
                padding-bottom: 15px;
                padding-left: 20px;
                padding-right: 20px;
            }
        </style>
    </head>
    <body>
        <div class="topBar">
            ${values.top_area}
        </div>
        <div class="mainGrid ui grid centered">
            <div class="eight wide computer column">
                <div class="forgotMessage">
                    ${values.forgot_message}
                </div>
                <div class="forgotImage">
                    <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/3856/GIF_password.gif">
                </div>
                <div class="altText">
                    ${values.button_top_text}
                </div>
                <div class="clickArea">
                    <a href="${values.href}">
                        <button class="large ui primary button">
                            ${values.button_text}
                        </button>
                    </a>
                </div>
                <div class="informationText">
                    ${values.button_alt_text}
                </div>
            </div>
        </div>
        <div class="footer">
            ${values.alt_information}
        </div>
        <div class="endBottom">
            ${values.footer}
        </div>
    </body>
    </html>`;
};

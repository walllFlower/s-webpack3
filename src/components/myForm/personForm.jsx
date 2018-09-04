import React, {Component} from 'react';
import { createForm } from 'rc-form';

import cookie from 'react-cookies';
import axios from 'axios';

import Bridge from '../../libs/bridge';


class PersonForm extends Component{
    constructor(props){
        super(props);
    }

    submit = (e) => {
        e.preventDefault();
        const { getFieldsValue } = this.props.form;
        let data = getFieldsValue();

        Bridge.post('/api/form', data)
        .then(res => {
            console.log(res);
        })
    }

    render(){
        const rules = {
            englishName:[{
                type:'string', pattern:/^[a-zA-z]+$/, message:'Only English letters are able!'
            },{
                required: true
            }],
            chineseName:[{
                type:'string', pattern:/^[\u4e00-\u9fa5]+$/, message:'Only Chinese letters are able!'
            },{
                required: true
            }],
            tel:[{
                type:'string', pattern:/^(13|15|18|17)[0-9]{9}$/, message: 'Wrong Tel!'
            },{
                required: true
            }]
        }

        const { getFieldProps, getFieldError } = this.props.form;
        return(
            <div>
                <form id="myform">
                    <div className="form-item">
                        <div>
                            <label>
                                English Name: 
                            </label>
                        </div>
                        <div>
                            <input type="text" {...getFieldProps('englishName',{
                                rules:rules.englishName
                            })}/>
                            {<span className="error">{getFieldError('englishName')}</span>}
                        </div>
                    </div>
                    <div className="form-item">
                        <div>
                            <label>
                                Chinese Name:
                            </label>
                        </div>
                        <div>
                            <input type="text" {...getFieldProps('chineseName',{
                                rules:rules.chineseName
                            })}/> 
                            {<span className="error">{getFieldError('chineseName')}</span>}
                        </div>
                    </div>
                    <div className="form-item">
                        <div>
                            <label>
                                Tel:
                            </label>
                        </div>
                        <div>
                            <input type="text" {...getFieldProps('tel',{
                                rules:rules.tel
                            })}/>
                            {<span className="error">{getFieldError('tel')}</span>}
                        </div>
                    </div>
                    <div className="form-item">
                        <div>
                            <label>
                                E-mail:
                            </label>
                        </div>
                        <div>
                            <input type="text" {...getFieldProps('eMail')}/>
                            {<span className="error">{getFieldError('eMail')}</span>}
                        </div>
                    </div>
                    <div className="form-item"> 
                        <div>
                            <label>
                                Sex:
                            </label>
                        </div>
                        <div>
                            <input type="radio" {...getFieldProps('sex')}/>
                        </div>
                    </div>
                    <div className="form-item">
                        <div>
                            <label>
                                Tag:
                            </label>
                        </div>
                        <div>
                            <select {...getFieldProps('tag')}>
                                <option value="acg">acg</option>
                                <option value="talent">talent</option>
                                <option value="doctor">doctor</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-item">
                        <button onClick={this.submit}>提交</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default createForm()(PersonForm);
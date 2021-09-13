import { connect } from "react-redux";
import * as contactActions from "../Actions/contactActions";
import { useState } from "react";
import { useEffect } from "react";
import { fieldCd } from "../Constants/typeCodes";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import ResumePreview from "./ResumePreview";
// import "../Static/scss/documentStyles.scss";
// import "../Static/scss/common.scss";



const Contact = (props) => {
    let history=useHistory();

    const [contact,setContact]= useState(props.contactSection);

    
    useEffect(() => {
        if(!props.document || !props.document.id)
        {
            history.push('/getting-started')
        }
    }, [])

    const onchange=(e)=>{
        let key =e.target.name;
        let value=e.target.value;

        setContact({...contact,[key]:value});

    }
     const getFieldData=(key)=>{

         if(contact && contact[key]){

             return contact[key]
         }
         
         return "";
     }
    
     const onSubmit =()=>{

        if(contact){
            props.update(contact);

        }else{
            props.add(contact);
        }
       history.push('/education');
     }


    return ( 
        <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
                    <h2 className="form-heading center">Personal Details</h2>
                    <div className="form-section">
                        <div className="input-group"><label>First Name</label>
                            <div className="effect"><input type="text" name={fieldCd.FirstName} value={getFieldData(fieldCd.FirstName)}  onChange={onchange}  /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Last Name</label>
                            <div className="effect"><input type="text" name={fieldCd.LastName}  value={getFieldData(fieldCd.LastName)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group full"><label>Professional Summary</label>
                            <div className="effect"><input type="text" name={fieldCd.ProfSummary}   value={getFieldData(fieldCd.ProfSummary)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Email</label>
                            <div className="effect"><input type="text"  name={fieldCd.Email}  value={getFieldData(fieldCd.Email)}  onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Phone</label>
                            <div className="effect"><input type="text"  name={fieldCd.Phone}   value={getFieldData(fieldCd.Phone)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Profession</label>
                            <div className="effect"><input type="text"  name={fieldCd.Profession}  value={getFieldData(fieldCd.Profession)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Street</label>
                            <div className="effect"><input type="text" name={fieldCd.Street}   value={getFieldData(fieldCd.Street)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>City</label>
                            <div className="effect"><input type="text" name={fieldCd.City}  value={getFieldData(fieldCd.City)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>State</label>
                            <div className="effect"><input type="text"   name={fieldCd.State}  value={getFieldData(fieldCd.State)}  onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>


                        <div className="input-group"><label>Country</label>
                            <div className="effect"><input type="text"  name={fieldCd.Country}  value={getFieldData(fieldCd.Country)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Pin Code</label>
                            <div className="effect"><input type="text" name={fieldCd.ZipCode}  value={getFieldData(fieldCd.ZipCode)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="form-buttons">
                            <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Next</button>
                            <NavLink to='/getting-started'  className="center">Back</NavLink>
                        </div>
                    </div>

                </div>

                <div className="preview-card">
                    <ResumePreview contactSection={contact} skinCd={props.document.skinCd}></ResumePreview>
                </div>

            </div>
        </div>


     );
}

const mapStateToProps=(state)=>{
    return {
        contactSection:state.contactSection,
        document:state.document,
    }


}

const mapDispatchToProps = (dispatch)=>{

    return {
        add:(contact)=>dispatch(contactActions.add(contact)),
        update:(contact)=>dispatch(contactActions.update(contact)),
    }

}

 
export default connect(mapStateToProps,mapDispatchToProps)(Contact);

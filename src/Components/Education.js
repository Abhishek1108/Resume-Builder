import React, { useState } from "react";
import { connect } from "react-redux";

import * as educationAction from "../Actions/educationActions";
import { useHistory} from "react-router-dom";
import { NavLink } from "react-router-dom";
import ResumePreview from "./ResumePreview";
import { fieldCd } from "../Constants/typeCodes";

const Education = (props) => {

    let history =useHistory();

  const[education,setEducation]=useState(props.educationSection);
//   console.log(education);

  const onchange=(e)=>{
      let key=e.target.name;
      let value=e.target.value;

      setEducation({...education,[key]:value});

  }

  const onSubmit=()=>{

      if(education){
          props.update(education);

      }else{
          props.add(education);

      }
      history.push('/finalize');
  }




    return (
        <div className="container med education" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Educational Section</h2>
            <div className="form-section">
              <div className="input-group"><label>College Name</label>
                <div className="effect"><input type="text" name={fieldCd.SchoolName}
                  onChange={onchange} value={education[fieldCd.SchoolName]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Degree</label>
                <div className="effect"><input type="text" name={fieldCd.Degree}
                  onChange={onchange} value={education[fieldCd.Degree]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>CGPA</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationCGPA}
                  onChange={onchange} value={education[fieldCd.GraduationCGPA]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>City/State</label>
                <div className="effect"><input type="text"  name={fieldCd.City}
                  onChange={onchange} value={education[fieldCd.City]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Month</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationDate}
                  onChange={onchange} value={education[fieldCd.GraduationDate]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Year</label>
                <div className="effect"><input type="text"  name={fieldCd.GraduationYear}
                  onChange={onchange} value={education[fieldCd.GraduationYear]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="form-buttons">
                <button className="btn hvr-float-shadow" type='button' onClick={onSubmit}>Next</button>
                <NavLink to='/contact' className="center">Back</NavLink>
              </div>
            </div>
          </div>
          <div className="preview-card">
            <ResumePreview contactSection={props.contactSection} educationSection={education} skinCd={props.document.skinCd}></ResumePreview>            
          </div>
        </div>
      </div>
      );
}


const mapStateToProps =(state)=>{
  console.log(state);
    return {
         contactSection:state.contactSection,
        educationSection:state.educationSection,
        document:state.document,
    }

}
const mapDispatchToProps =(dispatch)=>{

    return{
        add:(education)=>dispatch(educationAction.add(education)),
        update:(education)=>dispatch(educationAction.update(education))
    }

}
 
export default connect(mapStateToProps,mapDispatchToProps)(Education);
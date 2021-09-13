import { connect } from "react-redux";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import ResumePreview from "./ResumePreview";
import { useFirestore } from "react-redux-firebase";




const Finalize = (props) => {
    let fireStore=useFirestore();
    let educationSection=props.educationSection;
    let documentd=props.document;
    let contactSection=props.contactSection;

  const downloadResume=()=>{

   const input =document.getElementById('resumePreview');
     html2canvas(input).then((canvas)=>{
       const imgData=canvas.toDataURL('image/png');
       const pdf=new jsPDF('p','mm','a4');
       const width = pdf.internal.pageSize.getWidth();
       const height = pdf.internal.pageSize.getHeight();
       pdf.addImage(imgData,'JPEG',0,0,width,height);
       pdf.save('resume.pdf');
   }).catch(function(err){
        console.log(err);
   })
  }
  const saveToDatabase= async()=>{
      let user=await fireStore.collection('users').doc(props.auth.uid).get();
      user=user.data();
      console.log(user);
      let newObj=null;
      if(user.resumeIds!=undefined){
          newObj={...user.resumeIds,[documentd.id]:{educationSection:educationSection,contactSection:contactSection,document:documentd}}
      }else{
        newObj={[documentd.id]:{educationSection:educationSection,contactSection:contactSection,document:documentd}} 
      }
      console.log(user);
   await fireStore.collection('users').doc(props.auth.uid).update({
       resumeIds:newObj
   })
  }




    return (  
        <div className="container full finalize-page" >
      <div className="funnel-section ">
          <div className="finalize-preview-card " id="resumePreview">
            <ResumePreview contactSection={contactSection} educationSection={educationSection} skinCd={props.document.skinCd}></ResumePreview>   
          </div>
          <div className="finalize-settings center">                    
              <div className=" download-resume resume-options">
                <p className="no-margin"  >
                  Download Resume As PdF
                </p>
                    <a style={{cursor:'pointer'}}  onClick={downloadResume}  >download Resume</a>
             </div>
             <div className=" download-resume resume-options">
                <p className="no-margin"  >
                 Save to Database
                </p>
                    <a style={{cursor:'pointer'}}  onClick={saveToDatabase}  >Save to Database</a>
             </div>
    </div>
    </div>
    </div>
    );
}
const mapStateToProps =(state)=>{
    return{
        document:state.document,
        contactSection:state.contactSection,
        educationSection:state.educationSection,
        auth:state.firebase.auth,
    }

}
const mapDispatchToProps =(dispatch)=>{
    return {
   
    }

}
 
export default connect(mapStateToProps,mapDispatchToProps)(Finalize)

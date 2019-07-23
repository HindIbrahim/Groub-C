import React,{Component} from 'react';
import {Layout,Content,Textfield,Button} from "react-mdl";

class UploadCv extends Component{    
    render() {
        return(
          
          <div style={{ height: "300px", position: "relative " }}>
          
<div className="preview-text">
                            <h1>
                            Fill the below with your personal info, and then upload your CV to publish it.
                
                              </h1><hr/> </div>

                              

            <Layout>
             
              <Content>
                <Textfield
                  onChange={() => {}}
                  label="Your Full Name..."
                  style={{ width: "300px" }}
                />
                
              </Content>
              <Content>
                <Textfield
                  onChange={() => {}}
                  label="Your Univercity..."
                  style={{ width: "300px" }}
                />
                <br></br>
                <Textfield
                  onChange={() => {}}
                  label="Your Major..."
                  style={{ width: "300px" }}
                />
              </Content>
              <Content>
                <Button raised ripple>
                  Browse and Upload your CV
                  
                </Button>
              
                <Button primary>Submit</Button>
              </Content>
            </Layout>
            
          </div>
        )
      }
    }
export default UploadCv;
import ReactQuill, { Quill } from 'react-quill'; // ES6
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addPrivate} from '../dux/privateReducer'



import 'react-quill/dist/quill.snow.css'; 
import axios from 'axios';


class Qe extends Component {
  constructor(props) {
      super(props);
      this.modules = {
          toolbar: [
            [{ 'header': [false, 1, 2, 3] }],
            [{ 'align': [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            ['link', 'image'],
            [{ 'font': [] }],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'color': [] }, { 'background': [] }],
            ['clean']
          ]
      };
      this.formats = [
          'header',
          'align',
          'bold', 'italic', 'underline', 'strike',
          'list', 'bullet',
          'indent', 'indent',
          'link', 'image',
          'font',
          'script', 'script',
          'color', 'background'
      ];
      this.state = {
          comments: '',
          title: ''
      }
      this.rteChange = this.rteChange.bind(this);
      this.potato = ''
      this.porta = "fknewkfjnerkfjnwkejfnwr"
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState ({
        [name]: value
    })
}
  
  rteChange = (content, delta, source, editor) => {
      this.state.comments = (editor.getHTML()); // rich text
      this.potato = (editor.getText()); // plain text
      console.log("potato", this.potato)
      console.log(editor.getLength()); // number of characters
      
  }



// see = () => {
//   const editor = this.reactQuillRef.getEditor();
//   const unprivilegedEditor = this.reactQuillRef.makeUnprivilegedEditor(editor);
//   this.inpText = unprivilegedEditor.getText();
//   console.log("unprivilegedEditor.getLength()",unprivilegedEditor.getLength());
// }
 
// see = () => {
//   var range = this.quillRef.getSelection();
//   let position = range ? range.index : 0;
//   this.quillRef.see(position, 'Hello, World! ')
// }
  render(props) {
      console.log("potato2",this.potato)
      const title = this.state
      console.log(this.porta)

      return (
        <div>
          <button
                    onClick={()=> {
                        this.props.addPrivate(title, this.state.comments) 
                      this.render()
                    }}    
                >Save</button>
          <input
          className='title'
          name='title'
          value={this.state.title}
          onChange={e => this.handleChange(e)}
          maxLength='10'
          type='text'/>
          
        <div>
          <ReactQuill 
              theme="snow"  
              modules={this.modules}
              formats={this.formats} 
              onChange={this.rteChange}
             
           
              value={this.state.comments || ''}
              />
        </div>
       
      
        </div>
      );
  }
}

function mapStateToProps (state) {
  return {
      inputsReducer: state.inputsReducer
  }
}

export default connect(mapStateToProps, { addPrivate })(Qe)
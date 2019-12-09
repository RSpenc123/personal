import ReactQuill, { Quill } from 'react-quill'; // ES6
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addPublic} from '../dux/publicReducer'
import {getPublic} from '../dux/publicReducer'
import {editPublic} from '../dux/publicReducer'





import 'react-quill/dist/quill.snow.css'; 
import axios from 'axios';


class Update extends Component {
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
          title: '',
          
      }
      this.rteChange = this.rteChange.bind(this);
      this.potato = ''      
  }

  componentDidMount(){
console.log(this.props.match.params.id)
    axios.get(`/auth/getPublicId/${this.props.match.params.id}`)
    .then((response) => {
      console.log(response.data)
      
      this.setState({
        title: response.data[0].title,
        comments: response.data[0].content
      })
    })
  }
// // handleEdit(){
//   const {match: {params}} = this.props;
//   axios.edit(`/api/addPrivate/${params.id}`)
  
// }

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

  render(props) {
    
      const title = this.state
      const {Text} = this.state
      console.log(Text)
      console.log(title)
      

      return (
        <div>
          {/* <p>{Text.title}</p> */}
          
          {/* <button
                    onClick={()=> {
                        this.props.addPublic(title, this.state.comments) 
                      this.render()
                    }}    
                >Save</button> */}
                <button
                    onClick={()=> {
                        this.props.editPublic(`${this.props.match.params.id}`, title, this.state.comments) 
                      this.render()
                    }}    
                >Save</button>
          <input
          className='title'
          name='title'
          value={this.state.props}
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

export default connect(mapStateToProps, { addPublic, getPublic, editPublic })(Update)
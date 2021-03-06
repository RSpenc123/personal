import ReactQuill, { Quill } from 'react-quill'; // ES6
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addPublic} from '../dux/publicReducer'
import {getPrivateText} from '../dux/privateReducer'
import {editPrivate} from '../dux/privateReducer'




import 'react-quill/dist/quill.snow.css'; 
import axios from 'axios';


class Edit extends Component {
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
          genre: '',
          image: '',
          description: ''
          
      }
      this.rteChange = this.rteChange.bind(this);
      this.potato = ''  
        
  }

  componentDidMount(){
console.log(this.props.match.params.id)
    axios.get(`/auth/getPrivateId/${this.props.match.params.id}`)
    .then((response) => {
      console.log("p", response.data)
      
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
      console.log("potato2",this.potato)
      const genre = this.state
      const image = this.state
      const title = this.state
      const description = this.state
      const {Text} = this.state
      console.log(this.state)
      console.log(Text)
      console.log(title)
      console.log(genre.genre)
      console.log(this.props)
      console.log(this.props.store.userReducer.User.id)
      console.log(this.props.store.userReducer.User.username)

      

      return (
        <div>
          {/* <p>{Text.title}</p> */}
          
         
                
                <button
                    onClick={()=> {
                        this.props.editPrivate(this.props.match.params.id, title, this.state.comments) 
                      this.render()
                    }}    
                >Save</button>
          <input
          className='title'
          name='title'
          value={this.state.title}
          onChange={e => this.handleChange(e)}
          maxLength='30'
          type='text'/>
          

          <div className = 'dropdown'>
            <button className="dropbtn">Upload</button>
            <div className = "dropdown-content"> 
            <a >Genre <input
          className='genre'
          name='genre'
          value={this.state.genre}
          onChange={e => this.handleChange(e)}
          maxLength='10'
          type='text'/></a>
            {/* <a >image <input
          className='image'
          name='image'
          value={this.state.image}
          onChange={e => this.handleChange(e)}
          maxLength='1000'
          type='text'/></a> */}
         
          <a >description <input
          className='description'
          name='description'
          value={this.state.description}
          onChange={e => this.handleChange(e)}
          maxLength='250'
          type='text'/></a>
            <a ><button 
                    onClick={()=> {
                        this.props.addPublic(title, this.state.comments,genre.genre, image.image, this.props.store.userReducer.User.username, description.description,  this.props.store.userReducer.User.id) 
                      this.render()
                    }}    
                >Save</button></a>
                </div>
                </div>

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
      store: state
  }
}

export default connect(mapStateToProps, { addPublic, getPrivateText, editPrivate })(Edit)
import classess from '@/src/Post.module.css'

function Post(props) {
  return (
    <li className={classess.post}>
      <p className={classess.author}>{props.author}</p>
      <p className={classess.text}>{props.body}</p>
    </li>
  ); 
} 

export default Post;

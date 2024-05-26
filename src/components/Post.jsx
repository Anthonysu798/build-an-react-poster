import classess from '@/src/Post.module.css'

function Post({author, body}) {
  return (
    <li className={classess.post}>
      <p className={classess.author}>{author}</p>
      <p className={classess.text}>{body}</p>
    </li>
  ); 
} 

export default Post;

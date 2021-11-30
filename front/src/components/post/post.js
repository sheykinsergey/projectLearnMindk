export function UserPost({ title, post, publicationDate  }){
    return(
        <div>
            <p><b>{title}</b></p>
            <p>{post}</p>
            <p><small>Дата публикации: {publicationDate}</small></p>
        </div>
    )
}
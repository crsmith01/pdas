function ProfileCard({ title, handle, image, description}) {
// function ProfileCard(props) {
    // // destructuring
    // const { title, handle } = props;
    // // move to artument list instead

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt={title} />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">{description}</div>
            </div>
        </div>
    )
}

// return (
//     <div>
//         <img src={image} alt={title} />
//         <div>{title}</div>
//         <div>{handle}</div>
//     </div>
// )
export default ProfileCard;

//// ORIGINALLY
// function ProfileCard(props) {
//     return (
//         <div>
//             <div>{props.title}</div>
//             <div>{props.handle}</div>
//         </div>
//     )
// }

// export default ProfileCard;
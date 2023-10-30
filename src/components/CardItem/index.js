import './index.css'

const TechnologyCardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} list-item`}>
      <div>
        <h1 className="title">{title}</h1>
        <p className="card-description">{description}</p>
        <div className="image-container">
          <img src={`${imgUrl}`} alt={`${title}`} />
        </div>
      </div>
    </li>
  )
}

export default TechnologyCardItem

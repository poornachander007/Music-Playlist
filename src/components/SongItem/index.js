import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongItem = props => {
  const {songDetails, onClickDeleteIcon} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const onClickDelete = () => {
    onClickDeleteIcon(id)
  }
  return (
    <li className="song_li_container">
      <div className="img_and_name">
        <img className="song_image" src={imageUrl} alt="track" />
        <div className="name_and_genre">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration_And_delete">
        <p className="name">{duration}</p>
        <button
          data-testid="delete"
          onClick={onClickDelete}
          className="button"
          type="button"
        >
          <AiOutlineDelete size={25} color="white" />
        </button>
      </div>
    </li>
  )
}

export default SongItem

import { FaTimes} from 'react-icons/fa'
import Card from "./shared/Card"
import PropTypes from 'prop-types'

function FeedbackItem({item}) {
  const handleClick=(id)=>{
    console.log(id)
  }
  return (
    <Card reverse={true}>
        <div className="num-display">{item.rating}
        </div>
        <button onClick={()=> handleClick(item.id)} className="close">
          <FaTimes color='purple'/>
        </button>
            <div className="text-display">
                {item.text}
            </div>
    </Card>
  )
}

export default FeedbackItem
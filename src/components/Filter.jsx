import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

function Filter() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(filterChange(event.target.value))
  }

  const style = {
    margin: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter

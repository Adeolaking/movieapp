
const SearchBox=(props)=> {
  return (
    <>
    <input type={'search'}
    value={props.value}
    onChange ={(event)=> props.setsearchValue(event.target.value)}
    />
  </>
  )
}


export default SearchBox;
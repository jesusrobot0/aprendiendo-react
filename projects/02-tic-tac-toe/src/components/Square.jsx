import PropTypes from 'prop-types'

export const Square = ({ children, index, isSelected, onUpdateBoard }) => {
  const className = `square ${isSelected && 'is-selected'}`

  const handleClick = () => {
    onUpdateBoard(index)
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

Square.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onUpdateBoard: PropTypes.func,
}

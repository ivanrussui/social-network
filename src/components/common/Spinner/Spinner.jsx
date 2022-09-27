import spinner from '../../../assets/img/spinner.svg';

const Spinner = () => {
  return (
    <div style={ {backgroundColor: 'indigo'} }>
      <img src={spinner} alt={spinner} style={ {height: '100%', width: '100%', display: 'block', margin: '0 auto'} } />
    </div>
  )
}

export default Spinner;
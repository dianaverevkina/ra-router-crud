export const PostInput = ({value, onChange, actionData}) => {
  return (
    <div className="form__field">
      <textarea 
          name="content" 
          className='post-input' 
          placeholder='Type your text'
          value={value}
          onChange={onChange}
      ></textarea>
      {actionData && actionData.error ? <p className='form__error'>{actionData.error}</p>
        : null}
    </div>

  )
}

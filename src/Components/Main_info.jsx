function Main_info(props) {
  return (
    <div className='main__video'>
      <video width="640" height="360" controls autoPlay muted>
        <source src="/path/to/video.mp4" type="video/mp4" />
        Ваш браузер не поддерживает тег video.
      </video>
    </div>
  )
}
export default Main_info
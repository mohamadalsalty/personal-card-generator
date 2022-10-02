import { useEffect, useState } from 'react'
import './styles.scss'
import Form from './Form'
import saveImage from './functions/saveImage'
const FormIndex: React.FC = () => {

  const [name, setName] = useState<string>('')
  const [photo, setPhoto] = useState<string>('https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png')
  const [details, setDetails] = useState<string>('')
  const [facebook, setFacebook] = useState<string | null>('')
  const [twitter, setTwitter] = useState<string | null>('')
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff')
  const [width, setWidth] = useState<string | null>('700')
  const [mainTextColor, setMainTextColor] = useState<string>('#000000')
  const [mainLinkColor, setMainLinkColor] = useState<string>('#ffffff')
  const [widthOfTheImage, setWidthOfTheImage] = useState<string | null>('150')




  // set default card's width 
  useEffect(() => {
    if (width === '') {
      setWidth('700')
    }
  }, [width])



  // set default photo
  useEffect(() => {
    if (photo == '') setPhoto('https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png')
  }, [photo])



  // set default image width
  useEffect(() => {
    if (widthOfTheImage === '') {
      setWidthOfTheImage('150')
    }
  }, [widthOfTheImage])




  return (
    <div className='form'>
      <form onSubmit={(e) => saveImage(e)}>

        <div className="col-2">
          <input maxLength={22} type="text" onChange={(e) => setName(e.target.value)} placeholder='name' />
          <input type="url" onChange={(e) => setPhoto(e.target.value)} placeholder='photo' />
        </div>

        <div className="col-2">
          <input type="text" onChange={(e) => setFacebook(e.target.value)} placeholder='Facebook' />
          <input type="text" onChange={(e) => setTwitter(e.target.value)} placeholder='Twitter' />
        </div>

        <div className="col-2">
          <input type="text" onChange={(e) => setWidth(e.target.value)} placeholder='width of the card (ex: 700)' />
          <input type="text" onChange={(e) => setWidthOfTheImage(e.target.value)} placeholder='width of the image (ex: 150)' />
        </div>

        <div className="col-3">
          <div className='background-color'>
            <label htmlFor="backgroundColor">Background Color </label>
            <input value={backgroundColor} style={{ backgroundColor: backgroundColor }} id="backgroundColor" type="color" onChange={(e) => setBackgroundColor(e.target.value)} placeholder='Background color' />
          </div>

          <div className='main-text-color'>
            <label htmlFor="mainTextColor">Main text Color </label>
            <input value={mainTextColor} style={{ backgroundColor: mainTextColor }} id="mainTextColor" type="color" onChange={(e) => setMainTextColor(e.target.value)} placeholder='Main text color' />
          </div>

          <div className='main-link-color'>
            <label htmlFor="mainLinkColor">Main Link Color </label>
            <input value={mainLinkColor} style={{ backgroundColor: mainLinkColor }} id="mainLinkColor" type="color" onChange={(e) => setMainLinkColor(e.target.value)} placeholder='Main Link color' />
          </div>
        </div>

        <textarea onChange={(e) => setDetails(e.target.value)} placeholder='details' />
        <button type='submit'>Save card image</button>

      </form>


      <Form
        name={name}
        photo={photo}
        details={details}
        facebook={facebook}
        twitter={twitter}
        backgroundColor={backgroundColor}
        width={width}
        mainTextColor={mainTextColor}
        widthOfTheImage={widthOfTheImage}
        mainLinkColor={mainLinkColor}

      />




    </div>
  )
}

export default FormIndex